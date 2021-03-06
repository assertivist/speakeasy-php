
express = require('express')
http = require('http')
fs = require('fs')
crypto = require('crypto')
redis = require('redis')
rand_str = require('randomstring')
rclient = redis.createClient()
validator = require('validator')
 

app = express();
app.set('domain', 'saddlecat.dopetank.net')
app.set('port', 8080)
server = app.listen(8080);
io = require('socket.io').listen(server);



app.use(express.static(__dirname + '/static'));
 
app.get '/', (req, res) ->
    fs.readFile __dirname+'/client.html',
        (err, data) ->
            if err 
                res.writeHead(500)
                return res.end('Error loading client')
            else
                res.writeHead(200)
                res.end(data)

#app.configure 'development', () ->
#    app.use(express.errorHandler())



root = exports ? this

root.game = require('./mafia.coffee')

root.in_game = false
root.game_starting = false
root.join_phase = false
root.USER_CONNECTED = 1
root.USER_AUTHED = 2
root.players = []
root.frames = 0

io.sockets.on 'connection', (sock) ->
    
    sock.se_data = {}

    sock.on 'message', (data) ->
        console.log('testing bind to every message')

    sock.on 'username', (data) ->
        sock.se_data.nick = data
        sock.se_data.status = root.USER_CONNECTED
        sock.se_data.authed = false
        console.log('got user '+data)
        exists = rclient.hexists('users', data)
        console.log('exists: '+exists)
        if exists
            sock.emit('exists')
        else
            sock.emit('newuser', data)
    
            
    sock.on 'newpass', (data) ->
        nick = sock.se_data.nick;
        rclient.hset('users', nick, data)
        sock.se_data.status = root.USER_AUTHED
        sock.emit('startload')
        load_new_user(nick, sock)
        sock.emit('loaded')

    sock.on 'pass', (data) ->
        nick = sock.se_data.nick;
        hash = crypto.createHash('md5').update(data).digest("hex")
        rclient.hmset('users', hash, ()->
            sock.se_data.status = root.USER_AUTHED
            sock.emit('startload')
            root.load_new_user(nick, sock)
            sock.emit('loaded')
        )

    sock.on 'chat', (data) ->
        cmsg = validator.escape(validator.toString(data))
        if root.in_game
            console.log 'ingame'
            root.game.chat(cmsg)
        else 
            io.sockets.emit('chat', {uid: sock.id, msg: cmsg})

    sock.on 'action', (data) ->
        if root.in_game
            console.log 'ingame'
        else
            amsg = validator.escape(validator.toString(data))
            io.sockets.emit('action', {uid: sock.id, msg: amsg})

    sock.on 'disconnect', () ->
        console.log('disconnection: '+sock.id)
        io.sockets.emit('part', {uid: sock.id})

    sock.on 'startgame', () ->
        nick = sock.se_data.nick;
        console.log('starting game: '+nick);
        root.join_phase = true
        io.sockets.emit('joinphase');
        root.players.push(nick)

    sock.on 'joingame', () ->
        nick = sock.se_data.nick;
        if root.join_phase
            console.log('joined game: ' + nick);
            root.players.push(nick)


    for mfunc in root.game.funcs 
        do (mfunc) ->
            sock.on mfunc.event_name, (d) -> 
                mfunc.func(sock,d)
    root.game.bootstrap(io.sockets)

    sock.emit('ready')


root.load_new_user = (nick, sock) ->
    color_class = "c"+ rand_str.generate(4);
    sock.se_data.color_class = color_class;
    random_color = () ->
        c = Math.floor(Math.random()*16777215).toString(16)
        if c.length < 6 
            return "0" + c
        else
            return c
    console.log(random_color())
    color_data = random_color()
    sock.se_data.color_data = color_data;
    contrast_color = 'ffffff'
    if parseInt(color_data, 16) > 0xFFFFFF/2 
        contrast_color = '000000'
    sock.se_data.contrast_color = contrast_color;
    #send new user to all clients
    io.emit('colorcls', {
        classname: color_class, 
        color: color_data,
        contrast: contrast_color
    });
    io.emit('join', { 
        uid: sock.id,
        nick: nick,
        classname: color_class,
        status: sock.se_data.status
    });

    root.all_clients().forEach (s)->
        if sock.id == s.id
            return
        else
            sock.emit('colorcls',{
                classname: s.se_data.color_class, 
                color: s.se_data.color_data,
                contrast: s.se_data.contrast_color
            });
            sock.emit('join', { 
                uid: s.id,
                nick: s.se_data.nick,
                classname: s.se_data.color_class,
                status: s.se_data.status
            });

root.update_loop = () ->
    root.frames += 1

    if root.in_game
        root.game.update_loop

root.all_clients = () ->
    res = []
    room = io.sockets.adapter.rooms['/'];
    if (room) 
        for id in room
            res.push(io.sockets.adapter.nsp.connected[id]);
    return res;
    

setInterval(root.update_loop, 150)