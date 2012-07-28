  


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>web-socket-js/swfobject.js at master · gimite/web-socket-js · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon-precomposed" sizes="57x57" href="apple-touch-icon-114.png" />
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="apple-touch-icon-114.png" />
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="apple-touch-icon-144.png" />
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="apple-touch-icon-144.png" />

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.png" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="f7fqwVm42yAeuU6IQuXf+q/9ylCiA1bFBOfr4BR9T6c=" name="csrf-token" />

    <link href="https://a248.e.akamai.net/assets.github.com/assets/github-80066d274e40dad6be1ac4b06b88b5f1a0fdf80a.css" media="screen" rel="stylesheet" type="text/css" />
    <link href="https://a248.e.akamai.net/assets.github.com/assets/github2-582d647b91d9d5ed148bfb80c7a6992c838cb5ed.css" media="screen" rel="stylesheet" type="text/css" />
    


    <script src="https://a248.e.akamai.net/assets.github.com/assets/frameworks-cda884a5a58f7a231c16c075e16bc5c1509f192b.js" type="text/javascript"></script>
    
    <script defer="defer" src="https://a248.e.akamai.net/assets.github.com/assets/github-51bb4f9055afda80562b32fb6dc9d6fd15bb7ecb.js" type="text/javascript"></script>
    
    

      <link rel='permalink' href='/gimite/web-socket-js/blob/2ee87e910e92f2366d562efebbbec96349924df3/swfobject.js'>
    <meta property="og:title" content="web-socket-js"/>
    <meta property="og:type" content="githubog:gitrepository"/>
    <meta property="og:url" content="https://github.com/gimite/web-socket-js"/>
    <meta property="og:image" content="https://a248.e.akamai.net/assets.github.com/images/gravatars/gravatar-140.png?1329275856"/>
    <meta property="og:site_name" content="GitHub"/>
    <meta property="og:description" content="HTML5 Web Socket implementation powered by Flash. Contribute to web-socket-js development by creating an account on GitHub."/>

    <meta name="description" content="HTML5 Web Socket implementation powered by Flash. Contribute to web-socket-js development by creating an account on GitHub." />

  <link href="https://github.com/gimite/web-socket-js/commits/master.atom" rel="alternate" title="Recent Commits to web-socket-js:master" type="application/atom+xml" />

  </head>


  <body class="logged_out page-blob macintosh vis-public env-production ">
    <div id="wrapper">

    
    
    

      <div id="header" class="true clearfix">
        <div class="container clearfix">
          <a class="site-logo" href="https://github.com/">
            <!--[if IE]>
            <img alt="GitHub" class="github-logo" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov7.png?1323882717" />
            <img alt="GitHub" class="github-logo-hover" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov7-hover.png?1324325359" />
            <![endif]-->
            <img alt="GitHub" class="github-logo-4x" height="30" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov7@4x.png?1337118068" />
            <img alt="GitHub" class="github-logo-4x-hover" height="30" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov7@4x-hover.png?1337118068" />
          </a>



                  <!--
      make sure to use fully qualified URLs here since this nav
      is used on error pages on other domains
    -->
    <ul class="top-nav logged_out">
        <li class="pricing"><a href="https://github.com/plans">Signup and Pricing</a></li>
        <li class="explore"><a href="https://github.com/explore">Explore GitHub</a></li>
      <li class="features"><a href="https://github.com/features">Features</a></li>
        <li class="blog"><a href="https://github.com/blog">Blog</a></li>
      <li class="login"><a href="https://github.com/login?return_to=%2Fgimite%2Fweb-socket-js%2Fblob%2Fmaster%2Fswfobject.js">Sign in</a></li>
    </ul>



          
        </div>
      </div>

      

            <div class="site hfeed" itemscope itemtype="http://schema.org/WebPage">
      <div class="container hentry">
        <div class="pagehead repohead instapaper_ignore readability-menu">
        <div class="title-actions-bar">
          



              <ul class="pagehead-actions">



          <li>
            <span class="watch-button"><a href="/login?return_to=%2Fgimite%2Fweb-socket-js" class="minibutton btn-watch js-toggler-target entice tooltipped leftwards" title="You must be signed in to use this feature" rel="nofollow">Watch</a><a class="social-count js-social-count" href="/gimite/web-socket-js/watchers">1,393</a></span>
          </li>
          <li>
            <a href="/login?return_to=%2Fgimite%2Fweb-socket-js" class="minibutton btn-fork js-toggler-target fork-button entice tooltipped leftwards"  title="You must be signed in to use this feature" rel="nofollow">Fork</a><a href="/gimite/web-socket-js/network" class="social-count">107</a>
          </li>
    </ul>

          <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
            <span class="repo-label"><span>public</span></span>
            <span class="mega-icon mega-icon-public-repo"></span>
            <span class="author vcard">
<a href="/gimite" class="url fn" itemprop="url" rel="author">              <span itemprop="title">gimite</span>
              </a></span> /
            <strong><a href="/gimite/web-socket-js" class="js-current-repository">web-socket-js</a></strong>
          </h1>
        </div>

          

  <ul class="tabs">
    <li><a href="/gimite/web-socket-js" class="selected" highlight="repo_sourcerepo_downloadsrepo_commitsrepo_tagsrepo_branches">Code</a></li>
    <li><a href="/gimite/web-socket-js/network" highlight="repo_network">Network</a>
    <li><a href="/gimite/web-socket-js/pulls" highlight="repo_pulls">Pull Requests <span class='counter'>1</span></a></li>

      <li><a href="/gimite/web-socket-js/issues" highlight="repo_issues">Issues <span class='counter'>8</span></a></li>

      <li><a href="/gimite/web-socket-js/wiki" highlight="repo_wiki">Wiki</a></li>

    <li><a href="/gimite/web-socket-js/graphs" highlight="repo_graphsrepo_contributors">Graphs</a></li>


  </ul>
  
<div class="frame frame-center tree-finder" style="display:none"
      data-tree-list-url="/gimite/web-socket-js/tree-list/2ee87e910e92f2366d562efebbbec96349924df3"
      data-blob-url-prefix="/gimite/web-socket-js/blob/2ee87e910e92f2366d562efebbbec96349924df3"
    >

  <div class="breadcrumb">
    <span class="bold"><a href="/gimite/web-socket-js">web-socket-js</a></span> /
    <input class="tree-finder-input js-navigation-enable" type="text" name="query" autocomplete="off" spellcheck="false">
  </div>

    <div class="octotip">
      <p>
        <a href="/gimite/web-socket-js/dismiss-tree-finder-help" class="dismiss js-dismiss-tree-list-help" title="Hide this notice forever" rel="nofollow">Dismiss</a>
        <span class="bold">Octotip:</span> You've activated the <em>file finder</em>
        by pressing <span class="kbd">t</span> Start typing to filter the
        file list. Use <span class="kbd badmono">↑</span> and
        <span class="kbd badmono">↓</span> to navigate,
        <span class="kbd">enter</span> to view files.
      </p>
    </div>

  <table class="tree-browser" cellpadding="0" cellspacing="0">
    <tr class="js-header"><th>&nbsp;</th><th>name</th></tr>
    <tr class="js-no-results no-results" style="display: none">
      <th colspan="2">No matching files</th>
    </tr>
    <tbody class="js-results-list js-navigation-container">
    </tbody>
  </table>
</div>

<div id="jump-to-line" style="display:none">
  <h2>Jump to Line</h2>
  <form accept-charset="UTF-8">
    <input class="textfield" type="text">
    <div class="full-button">
      <button type="submit" class="classy">
        Go
      </button>
    </div>
  </form>
</div>


<div class="subnav-bar">

  <ul class="actions subnav">
    <li><a href="/gimite/web-socket-js/tags" class="blank" highlight="repo_tags">Tags <span class="counter">0</span></a></li>
    <li><a href="/gimite/web-socket-js/downloads" class="blank downloads-blank" highlight="repo_downloads">Downloads <span class="counter">0</span></a></li>
    
  </ul>

  <ul class="scope">
    <li class="switcher">

      <div class="context-menu-container js-menu-container js-context-menu">
        <a href="#"
           class="minibutton bigger switcher js-menu-target js-commitish-button btn-branch repo-tree"
           data-hotkey="w"
           data-master-branch="master"
           data-ref="master">
           <span><i>branch:</i> master</span>
        </a>

        <div class="context-pane commitish-context js-menu-content">
          <a href="javascript:;" class="close js-menu-close"><span class="mini-icon mini-icon-remove-close"></span></a>
          <div class="context-title">Switch branches/tags</div>
          <div class="context-body pane-selector commitish-selector js-navigation-container">
            <div class="filterbar">
              <input type="text" id="context-commitish-filter-field" class="js-navigation-enable" placeholder="Filter branches/tags" data-filterable />

              <ul class="tabs">
                <li><a href="#" data-filter="branches" class="selected">Branches</a></li>
                <li><a href="#" data-filter="tags">Tags</a></li>
              </ul>
            </div>

            <div class="js-filter-tab js-filter-branches" data-filterable-for="context-commitish-filter-field" data-filterable-type=substring>
              <div class="no-results js-not-filterable">Nothing to show</div>
                <div class="commitish-item branch-commitish selector-item js-navigation-item js-navigation-target ">
                  <span class="mini-icon mini-icon-confirm"></span>
                  <h4>
                      <a href="/gimite/web-socket-js/blob/hixie-76/swfobject.js" class="js-navigation-open" data-name="hixie-76" rel="nofollow">hixie-76</a>
                  </h4>
                </div>
                <div class="commitish-item branch-commitish selector-item js-navigation-item js-navigation-target selected">
                  <span class="mini-icon mini-icon-confirm"></span>
                  <h4>
                      <a href="/gimite/web-socket-js/blob/master/swfobject.js" class="js-navigation-open" data-name="master" rel="nofollow">master</a>
                  </h4>
                </div>
            </div>

            <div class="js-filter-tab js-filter-tags" style="display:none" data-filterable-for="context-commitish-filter-field" data-filterable-type=substring>
              <div class="no-results js-not-filterable">Nothing to show</div>
            </div>
          </div>
        </div><!-- /.commitish-context-context -->
      </div>

    </li>
  </ul>

  <ul class="subnav with-scope">

    <li><a href="/gimite/web-socket-js" class="selected" highlight="repo_source">Files</a></li>
    <li><a href="/gimite/web-socket-js/commits/master" highlight="repo_commits">Commits</a></li>
    <li><a href="/gimite/web-socket-js/branches" class="" highlight="repo_branches" rel="nofollow">Branches <span class="counter">2</span></a></li>
  </ul>

</div>

  
  
  


          

        </div><!-- /.repohead -->

        <div id="js-repo-pjax-container" data-pjax-container>
          




<!-- blob contrib key: blob_contributors:v21:2b3029a52727371c3db78527fb28f139 -->
<!-- blob contrib frag key: views10/v8/blob_contributors:v21:2b3029a52727371c3db78527fb28f139 -->

<!-- block_view_fragment_key: views10/v8/blob:v21:085858c38bdfe20ac75768e1287e7bc7 -->
  <div id="slider">

    <div class="breadcrumb" data-path="swfobject.js/">
      <b itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/gimite/web-socket-js/tree/2ee87e910e92f2366d562efebbbec96349924df3" class="js-rewrite-sha" itemprop="url"><span itemprop="title">web-socket-js</span></a></b> / <strong class="final-path">swfobject.js</strong> <span class="js-clippy mini-icon mini-icon-clippy " data-clipboard-text="swfobject.js" data-copied-hint="copied!" data-copy-hint="copy to clipboard"></span>
    </div>

      
  <div class="commit file-history-tease js-blob-contributors-content" data-path="swfobject.js/">
    <img class="main-avatar" height="24" src="https://secure.gravatar.com/avatar/4ed1b9aa1d9562bc758f17e7b618bc16?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="24" />
    <span class="author"><a href="/mcav">mcav</a></span>
    <time class="js-relative-date" datetime="2010-02-28T17:12:32-08:00" title="2010-02-28 17:12:32">February 28, 2010</time>
    <div class="commit-title">
        <a href="/gimite/web-socket-js/commit/a2f5f7716f5ea71c9f8c7e9fa5c9d4f3f3ef15a3" class="message">Undo the hasty fix to swfobject by mistake.</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>2</strong> contributors</a></p>
          <a class="avatar tooltipped downwards" title="mcav" href="/gimite/web-socket-js/commits/2ee87e910e92f2366d562efebbbec96349924df3/swfobject.js?author=mcav"><img height="20" src="https://secure.gravatar.com/avatar/4ed1b9aa1d9562bc758f17e7b618bc16?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="gimite" href="/gimite/web-socket-js/commits/2ee87e910e92f2366d562efebbbec96349924df3/swfobject.js?author=gimite"><img height="20" src="https://secure.gravatar.com/avatar/bdf55e4b2948b8351e4536b1892e0c8c?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2>Users on GitHub who have contributed to this file</h2>
      <ul class="facebox-user-list">
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/4ed1b9aa1d9562bc758f17e7b618bc16?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="24" />
          <a href="/mcav">mcav</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/bdf55e4b2948b8351e4536b1892e0c8c?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="24" />
          <a href="/gimite">gimite</a>
        </li>
      </ul>
    </div>
  </div>


    <div class="frames">
      <div class="frame frame-center" data-path="swfobject.js/" data-permalink-url="/gimite/web-socket-js/blob/2ee87e910e92f2366d562efebbbec96349924df3/swfobject.js" data-title="web-socket-js/swfobject.js at master · gimite/web-socket-js · GitHub" data-type="blob">

        <div id="files" class="bubble">
          <div class="file">
            <div class="meta">
              <div class="info">
                <span class="icon"><b class="mini-icon mini-icon-text-file"></b></span>
                <span class="mode" title="File Mode">file</span>
                  <span>4 lines (4 sloc)</span>
                <span>10.22 kb</span>
              </div>
              <ul class="button-group actions">
                  <li>
                    <a class="grouped-button file-edit-link minibutton bigger lighter js-rewrite-sha" href="/gimite/web-socket-js/edit/2ee87e910e92f2366d562efebbbec96349924df3/swfobject.js" data-method="post" rel="nofollow" data-hotkey="e">Edit</a>
                  </li>

                <li>
                  <a href="/gimite/web-socket-js/raw/master/swfobject.js" class="minibutton btn-raw grouped-button bigger lighter" id="raw-url">Raw</a>
                </li>
                  <li>
                    <a href="/gimite/web-socket-js/blame/master/swfobject.js" class="minibutton btn-blame grouped-button bigger lighter">Blame</a>
                  </li>
                <li>
                  <a href="/gimite/web-socket-js/commits/master/swfobject.js" class="minibutton btn-history grouped-button bigger lighter" rel="nofollow">History</a>
                </li>
              </ul>
            </div>
              <div class="data type-javascript">
      <table cellpadding="0" cellspacing="0" class="lines">
        <tr>
          <td>
            <pre class="line_numbers"><span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
</pre>
          </td>
          <td width="100%">
                <div class="highlight"><pre><div class='line' id='LC1'><span class="cm">/*	SWFObject v2.2 &lt;http://code.google.com/p/swfobject/&gt; </span></div><div class='line' id='LC2'><span class="cm">	is released under the MIT License &lt;http://www.opensource.org/licenses/mit-license.php&gt; </span></div><div class='line' id='LC3'><span class="cm">*/</span></div><div class='line' id='LC4'><span class="kd">var</span> <span class="nx">swfobject</span><span class="o">=</span><span class="kd">function</span><span class="p">(){</span><span class="kd">var</span> <span class="nx">D</span><span class="o">=</span><span class="s2">&quot;undefined&quot;</span><span class="p">,</span><span class="nx">r</span><span class="o">=</span><span class="s2">&quot;object&quot;</span><span class="p">,</span><span class="nx">S</span><span class="o">=</span><span class="s2">&quot;Shockwave Flash&quot;</span><span class="p">,</span><span class="nx">W</span><span class="o">=</span><span class="s2">&quot;ShockwaveFlash.ShockwaveFlash&quot;</span><span class="p">,</span><span class="nx">q</span><span class="o">=</span><span class="s2">&quot;application/x-shockwave-flash&quot;</span><span class="p">,</span><span class="nx">R</span><span class="o">=</span><span class="s2">&quot;SWFObjectExprInst&quot;</span><span class="p">,</span><span class="nx">x</span><span class="o">=</span><span class="s2">&quot;onreadystatechange&quot;</span><span class="p">,</span><span class="nx">O</span><span class="o">=</span><span class="nb">window</span><span class="p">,</span><span class="nx">j</span><span class="o">=</span><span class="nb">document</span><span class="p">,</span><span class="nx">t</span><span class="o">=</span><span class="nx">navigator</span><span class="p">,</span><span class="nx">T</span><span class="o">=</span><span class="kc">false</span><span class="p">,</span><span class="nx">U</span><span class="o">=</span><span class="p">[</span><span class="nx">h</span><span class="p">],</span><span class="nx">o</span><span class="o">=</span><span class="p">[],</span><span class="nx">N</span><span class="o">=</span><span class="p">[],</span><span class="nx">I</span><span class="o">=</span><span class="p">[],</span><span class="nx">l</span><span class="p">,</span><span class="nx">Q</span><span class="p">,</span><span class="nx">E</span><span class="p">,</span><span class="nx">B</span><span class="p">,</span><span class="nx">J</span><span class="o">=</span><span class="kc">false</span><span class="p">,</span><span class="nx">a</span><span class="o">=</span><span class="kc">false</span><span class="p">,</span><span class="nx">n</span><span class="p">,</span><span class="nx">G</span><span class="p">,</span><span class="nx">m</span><span class="o">=</span><span class="kc">true</span><span class="p">,</span><span class="nx">M</span><span class="o">=</span><span class="kd">function</span><span class="p">(){</span><span class="kd">var</span> <span class="nx">aa</span><span class="o">=</span><span class="k">typeof</span> <span class="nx">j</span><span class="p">.</span><span class="nx">getElementById</span><span class="o">!=</span><span class="nx">D</span><span class="o">&amp;&amp;</span><span class="k">typeof</span> <span class="nx">j</span><span class="p">.</span><span class="nx">getElementsByTagName</span><span class="o">!=</span><span class="nx">D</span><span class="o">&amp;&amp;</span><span class="k">typeof</span> <span class="nx">j</span><span class="p">.</span><span class="nx">createElement</span><span class="o">!=</span><span class="nx">D</span><span class="p">,</span><span class="nx">ah</span><span class="o">=</span><span class="nx">t</span><span class="p">.</span><span class="nx">userAgent</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">(),</span><span class="nx">Y</span><span class="o">=</span><span class="nx">t</span><span class="p">.</span><span class="nx">platform</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">(),</span><span class="nx">ae</span><span class="o">=</span><span class="nx">Y</span><span class="o">?</span><span class="sr">/win/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">Y</span><span class="p">)</span><span class="o">:</span><span class="sr">/win/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">ah</span><span class="p">),</span><span class="nx">ac</span><span class="o">=</span><span class="nx">Y</span><span class="o">?</span><span class="sr">/mac/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">Y</span><span class="p">)</span><span class="o">:</span><span class="sr">/mac/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">ah</span><span class="p">),</span><span class="nx">af</span><span class="o">=</span><span class="sr">/webkit/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">ah</span><span class="p">)</span><span class="o">?</span><span class="nb">parseFloat</span><span class="p">(</span><span class="nx">ah</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^.*webkit\/(\d+(\.\d+)?).*$/</span><span class="p">,</span><span class="s2">&quot;$1&quot;</span><span class="p">))</span><span class="o">:</span><span class="kc">false</span><span class="p">,</span><span class="nx">X</span><span class="o">=!+</span><span class="s2">&quot;\v1&quot;</span><span class="p">,</span><span class="nx">ag</span><span class="o">=</span><span class="p">[</span><span class="mi">0</span><span class="p">,</span><span class="mi">0</span><span class="p">,</span><span class="mi">0</span><span class="p">],</span><span class="nx">ab</span><span class="o">=</span><span class="kc">null</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">t</span><span class="p">.</span><span class="nx">plugins</span><span class="o">!=</span><span class="nx">D</span><span class="o">&amp;&amp;</span><span class="k">typeof</span> <span class="nx">t</span><span class="p">.</span><span class="nx">plugins</span><span class="p">[</span><span class="nx">S</span><span class="p">]</span><span class="o">==</span><span class="nx">r</span><span class="p">){</span><span class="nx">ab</span><span class="o">=</span><span class="nx">t</span><span class="p">.</span><span class="nx">plugins</span><span class="p">[</span><span class="nx">S</span><span class="p">].</span><span class="nx">description</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="nx">ab</span><span class="o">&amp;&amp;!</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">t</span><span class="p">.</span><span class="nx">mimeTypes</span><span class="o">!=</span><span class="nx">D</span><span class="o">&amp;&amp;</span><span class="nx">t</span><span class="p">.</span><span class="nx">mimeTypes</span><span class="p">[</span><span class="nx">q</span><span class="p">]</span><span class="o">&amp;&amp;!</span><span class="nx">t</span><span class="p">.</span><span class="nx">mimeTypes</span><span class="p">[</span><span class="nx">q</span><span class="p">].</span><span class="nx">enabledPlugin</span><span class="p">)){</span><span class="nx">T</span><span class="o">=</span><span class="kc">true</span><span class="p">;</span><span class="nx">X</span><span class="o">=</span><span class="kc">false</span><span class="p">;</span><span class="nx">ab</span><span class="o">=</span><span class="nx">ab</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^.*\s+(\S+\s+\S+$)/</span><span class="p">,</span><span class="s2">&quot;$1&quot;</span><span class="p">);</span><span class="nx">ag</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span><span class="o">=</span><span class="nb">parseInt</span><span class="p">(</span><span class="nx">ab</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^(.*)\..*$/</span><span class="p">,</span><span class="s2">&quot;$1&quot;</span><span class="p">),</span><span class="mi">10</span><span class="p">);</span><span class="nx">ag</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span><span class="o">=</span><span class="nb">parseInt</span><span class="p">(</span><span class="nx">ab</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^.*\.(.*)\s.*$/</span><span class="p">,</span><span class="s2">&quot;$1&quot;</span><span class="p">),</span><span class="mi">10</span><span class="p">);</span><span class="nx">ag</span><span class="p">[</span><span class="mi">2</span><span class="p">]</span><span class="o">=</span><span class="sr">/[a-zA-Z]/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">ab</span><span class="p">)</span><span class="o">?</span><span class="nb">parseInt</span><span class="p">(</span><span class="nx">ab</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^.*[a-zA-Z]+(.*)$/</span><span class="p">,</span><span class="s2">&quot;$1&quot;</span><span class="p">),</span><span class="mi">10</span><span class="p">)</span><span class="o">:</span><span class="mi">0</span><span class="p">}}</span><span class="k">else</span><span class="p">{</span><span class="k">if</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">O</span><span class="p">.</span><span class="nx">ActiveXObject</span><span class="o">!=</span><span class="nx">D</span><span class="p">){</span><span class="k">try</span><span class="p">{</span><span class="kd">var</span> <span class="nx">ad</span><span class="o">=</span><span class="k">new</span> <span class="nx">ActiveXObject</span><span class="p">(</span><span class="nx">W</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="nx">ad</span><span class="p">){</span><span class="nx">ab</span><span class="o">=</span><span class="nx">ad</span><span class="p">.</span><span class="nx">GetVariable</span><span class="p">(</span><span class="s2">&quot;$version&quot;</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="nx">ab</span><span class="p">){</span><span class="nx">X</span><span class="o">=</span><span class="kc">true</span><span class="p">;</span><span class="nx">ab</span><span class="o">=</span><span class="nx">ab</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot; &quot;</span><span class="p">)[</span><span class="mi">1</span><span class="p">].</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot;,&quot;</span><span class="p">);</span><span class="nx">ag</span><span class="o">=</span><span class="p">[</span><span class="nb">parseInt</span><span class="p">(</span><span class="nx">ab</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span><span class="mi">10</span><span class="p">),</span><span class="nb">parseInt</span><span class="p">(</span><span class="nx">ab</span><span class="p">[</span><span class="mi">1</span><span class="p">],</span><span class="mi">10</span><span class="p">),</span><span class="nb">parseInt</span><span class="p">(</span><span class="nx">ab</span><span class="p">[</span><span class="mi">2</span><span class="p">],</span><span class="mi">10</span><span class="p">)]}}}</span><span class="k">catch</span><span class="p">(</span><span class="nx">Z</span><span class="p">){}}}</span><span class="k">return</span><span class="p">{</span><span class="nx">w3</span><span class="o">:</span><span class="nx">aa</span><span class="p">,</span><span class="nx">pv</span><span class="o">:</span><span class="nx">ag</span><span class="p">,</span><span class="nx">wk</span><span class="o">:</span><span class="nx">af</span><span class="p">,</span><span class="nx">ie</span><span class="o">:</span><span class="nx">X</span><span class="p">,</span><span class="nx">win</span><span class="o">:</span><span class="nx">ae</span><span class="p">,</span><span class="nx">mac</span><span class="o">:</span><span class="nx">ac</span><span class="p">}}(),</span><span class="nx">k</span><span class="o">=</span><span class="kd">function</span><span class="p">(){</span><span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">M</span><span class="p">.</span><span class="nx">w3</span><span class="p">){</span><span class="k">return</span><span class="p">}</span><span class="k">if</span><span class="p">((</span><span class="k">typeof</span> <span class="nx">j</span><span class="p">.</span><span class="nx">readyState</span><span class="o">!=</span><span class="nx">D</span><span class="o">&amp;&amp;</span><span class="nx">j</span><span class="p">.</span><span class="nx">readyState</span><span class="o">==</span><span class="s2">&quot;complete&quot;</span><span class="p">)</span><span class="o">||</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">j</span><span class="p">.</span><span class="nx">readyState</span><span class="o">==</span><span class="nx">D</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">j</span><span class="p">.</span><span class="nx">getElementsByTagName</span><span class="p">(</span><span class="s2">&quot;body&quot;</span><span class="p">)[</span><span class="mi">0</span><span class="p">]</span><span class="o">||</span><span class="nx">j</span><span class="p">.</span><span class="nx">body</span><span class="p">))){</span><span class="nx">f</span><span class="p">()}</span><span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">J</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">j</span><span class="p">.</span><span class="nx">addEventListener</span><span class="o">!=</span><span class="nx">D</span><span class="p">){</span><span class="nx">j</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">(</span><span class="s2">&quot;DOMContentLoaded&quot;</span><span class="p">,</span><span class="nx">f</span><span class="p">,</span><span class="kc">false</span><span class="p">)}</span><span class="k">if</span><span class="p">(</span><span class="nx">M</span><span class="p">.</span><span class="nx">ie</span><span class="o">&amp;&amp;</span><span class="nx">M</span><span class="p">.</span><span class="nx">win</span><span class="p">){</span><span class="nx">j</span><span class="p">.</span><span class="nx">attachEvent</span><span class="p">(</span><span class="nx">x</span><span class="p">,</span><span class="kd">function</span><span class="p">(){</span><span class="k">if</span><span class="p">(</span><span class="nx">j</span><span class="p">.</span><span class="nx">readyState</span><span class="o">==</span><span class="s2">&quot;complete&quot;</span><span class="p">){</span><span class="nx">j</span><span class="p">.</span><span class="nx">detachEvent</span><span class="p">(</span><span class="nx">x</span><span class="p">,</span><span class="nx">arguments</span><span class="p">.</span><span class="nx">callee</span><span class="p">);</span><span class="nx">f</span><span class="p">()}});</span><span class="k">if</span><span class="p">(</span><span class="nx">O</span><span class="o">==</span><span class="nx">top</span><span class="p">){(</span><span class="kd">function</span><span class="p">(){</span><span class="k">if</span><span class="p">(</span><span class="nx">J</span><span class="p">){</span><span class="k">return</span><span class="p">}</span><span class="k">try</span><span class="p">{</span><span class="nx">j</span><span class="p">.</span><span class="nx">documentElement</span><span class="p">.</span><span class="nx">doScroll</span><span class="p">(</span><span class="s2">&quot;left&quot;</span><span class="p">)}</span><span class="k">catch</span><span class="p">(</span><span class="nx">X</span><span class="p">){</span><span class="nx">setTimeout</span><span class="p">(</span><span class="nx">arguments</span><span class="p">.</span><span class="nx">callee</span><span class="p">,</span><span class="mi">0</span><span class="p">);</span><span class="k">return</span><span class="p">}</span><span class="nx">f</span><span class="p">()})()}}</span><span class="k">if</span><span class="p">(</span><span class="nx">M</span><span class="p">.</span><span class="nx">wk</span><span class="p">){(</span><span class="kd">function</span><span class="p">(){</span><span class="k">if</span><span class="p">(</span><span class="nx">J</span><span class="p">){</span><span class="k">return</span><span class="p">}</span><span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="sr">/loaded|complete/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">j</span><span class="p">.</span><span class="nx">readyState</span><span class="p">)){</span><span class="nx">setTimeout</span><span class="p">(</span><span class="nx">arguments</span><span class="p">.</span><span class="nx">callee</span><span class="p">,</span><span class="mi">0</span><span class="p">);</span><span class="k">return</span><span class="p">}</span><span class="nx">f</span><span class="p">()})()}</span><span class="nx">s</span><span class="p">(</span><span class="nx">f</span><span class="p">)}}();</span><span class="kd">function</span> <span class="nx">f</span><span class="p">(){</span><span class="k">if</span><span class="p">(</span><span class="nx">J</span><span class="p">){</span><span class="k">return</span><span class="p">}</span><span class="k">try</span><span class="p">{</span><span class="kd">var</span> <span class="nx">Z</span><span class="o">=</span><span class="nx">j</span><span class="p">.</span><span class="nx">getElementsByTagName</span><span class="p">(</span><span class="s2">&quot;body&quot;</span><span class="p">)[</span><span class="mi">0</span><span class="p">].</span><span class="nx">appendChild</span><span class="p">(</span><span class="nx">C</span><span class="p">(</span><span class="s2">&quot;span&quot;</span><span class="p">));</span><span class="nx">Z</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">.</span><span class="nx">removeChild</span><span class="p">(</span><span class="nx">Z</span><span class="p">)}</span><span class="k">catch</span><span class="p">(</span><span class="nx">aa</span><span class="p">){</span><span class="k">return</span><span class="p">}</span><span class="nx">J</span><span class="o">=</span><span class="kc">true</span><span class="p">;</span><span class="kd">var</span> <span class="nx">X</span><span class="o">=</span><span class="nx">U</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">Y</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span><span class="nx">Y</span><span class="o">&lt;</span><span class="nx">X</span><span class="p">;</span><span class="nx">Y</span><span class="o">++</span><span class="p">){</span><span class="nx">U</span><span class="p">[</span><span class="nx">Y</span><span class="p">]()}}</span><span class="kd">function</span> <span class="nx">K</span><span class="p">(</span><span class="nx">X</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="nx">J</span><span class="p">){</span><span class="nx">X</span><span class="p">()}</span><span class="k">else</span><span class="p">{</span><span class="nx">U</span><span class="p">[</span><span class="nx">U</span><span class="p">.</span><span class="nx">length</span><span class="p">]</span><span class="o">=</span><span class="nx">X</span><span class="p">}}</span><span class="kd">function</span> <span class="nx">s</span><span class="p">(</span><span class="nx">Y</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">O</span><span class="p">.</span><span class="nx">addEventListener</span><span class="o">!=</span><span class="nx">D</span><span class="p">){</span><span class="nx">O</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">(</span><span class="s2">&quot;load&quot;</span><span class="p">,</span><span class="nx">Y</span><span class="p">,</span><span class="kc">false</span><span class="p">)}</span><span class="k">else</span><span class="p">{</span><span class="k">if</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">j</span><span class="p">.</span><span class="nx">addEventListener</span><span class="o">!=</span><span class="nx">D</span><span class="p">){</span><span class="nx">j</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">(</span><span class="s2">&quot;load&quot;</span><span class="p">,</span><span class="nx">Y</span><span class="p">,</span><span class="kc">false</span><span class="p">)}</span><span class="k">else</span><span class="p">{</span><span class="k">if</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">O</span><span class="p">.</span><span class="nx">attachEvent</span><span class="o">!=</span><span class="nx">D</span><span class="p">){</span><span class="nx">i</span><span class="p">(</span><span class="nx">O</span><span class="p">,</span><span class="s2">&quot;onload&quot;</span><span class="p">,</span><span class="nx">Y</span><span class="p">)}</span><span class="k">else</span><span class="p">{</span><span class="k">if</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">O</span><span class="p">.</span><span class="nx">onload</span><span class="o">==</span><span class="s2">&quot;function&quot;</span><span class="p">){</span><span class="kd">var</span> <span class="nx">X</span><span class="o">=</span><span class="nx">O</span><span class="p">.</span><span class="nx">onload</span><span class="p">;</span><span class="nx">O</span><span class="p">.</span><span class="nx">onload</span><span class="o">=</span><span class="kd">function</span><span class="p">(){</span><span class="nx">X</span><span class="p">();</span><span class="nx">Y</span><span class="p">()}}</span><span class="k">else</span><span class="p">{</span><span class="nx">O</span><span class="p">.</span><span class="nx">onload</span><span class="o">=</span><span class="nx">Y</span><span class="p">}}}}}</span><span class="kd">function</span> <span class="nx">h</span><span class="p">(){</span><span class="k">if</span><span class="p">(</span><span class="nx">T</span><span class="p">){</span><span class="nx">V</span><span class="p">()}</span><span class="k">else</span><span class="p">{</span><span class="nx">H</span><span class="p">()}}</span><span class="kd">function</span> <span class="nx">V</span><span class="p">(){</span><span class="kd">var</span> <span class="nx">X</span><span class="o">=</span><span class="nx">j</span><span class="p">.</span><span class="nx">getElementsByTagName</span><span class="p">(</span><span class="s2">&quot;body&quot;</span><span class="p">)[</span><span class="mi">0</span><span class="p">];</span><span class="kd">var</span> <span class="nx">aa</span><span class="o">=</span><span class="nx">C</span><span class="p">(</span><span class="nx">r</span><span class="p">);</span><span class="nx">aa</span><span class="p">.</span><span class="nx">setAttribute</span><span class="p">(</span><span class="s2">&quot;type&quot;</span><span class="p">,</span><span class="nx">q</span><span class="p">);</span><span class="kd">var</span> <span class="nx">Z</span><span class="o">=</span><span class="nx">X</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span><span class="nx">aa</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="nx">Z</span><span class="p">){</span><span class="kd">var</span> <span class="nx">Y</span><span class="o">=</span><span class="mi">0</span><span class="p">;(</span><span class="kd">function</span><span class="p">(){</span><span class="k">if</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">Z</span><span class="p">.</span><span class="nx">GetVariable</span><span class="o">!=</span><span class="nx">D</span><span class="p">){</span><span class="kd">var</span> <span class="nx">ab</span><span class="o">=</span><span class="nx">Z</span><span class="p">.</span><span class="nx">GetVariable</span><span class="p">(</span><span class="s2">&quot;$version&quot;</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="nx">ab</span><span class="p">){</span><span class="nx">ab</span><span class="o">=</span><span class="nx">ab</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot; &quot;</span><span class="p">)[</span><span class="mi">1</span><span class="p">].</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot;,&quot;</span><span class="p">);</span><span class="nx">M</span><span class="p">.</span><span class="nx">pv</span><span class="o">=</span><span class="p">[</span><span class="nb">parseInt</span><span class="p">(</span><span class="nx">ab</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span><span class="mi">10</span><span class="p">),</span><span class="nb">parseInt</span><span class="p">(</span><span class="nx">ab</span><span class="p">[</span><span class="mi">1</span><span class="p">],</span><span class="mi">10</span><span class="p">),</span><span class="nb">parseInt</span><span class="p">(</span><span class="nx">ab</span><span class="p">[</span><span class="mi">2</span><span class="p">],</span><span class="mi">10</span><span class="p">)]}}</span><span class="k">else</span><span class="p">{</span><span class="k">if</span><span class="p">(</span><span class="nx">Y</span><span class="o">&lt;</span><span class="mi">10</span><span class="p">){</span><span class="nx">Y</span><span class="o">++</span><span class="p">;</span><span class="nx">setTimeout</span><span class="p">(</span><span class="nx">arguments</span><span class="p">.</span><span class="nx">callee</span><span class="p">,</span><span class="mi">10</span><span class="p">);</span><span class="k">return</span><span class="p">}}</span><span class="nx">X</span><span class="p">.</span><span class="nx">removeChild</span><span class="p">(</span><span class="nx">aa</span><span class="p">);</span><span class="nx">Z</span><span class="o">=</span><span class="kc">null</span><span class="p">;</span><span class="nx">H</span><span class="p">()})()}</span><span class="k">else</span><span class="p">{</span><span class="nx">H</span><span class="p">()}}</span><span class="kd">function</span> <span class="nx">H</span><span class="p">(){</span><span class="kd">var</span> <span class="nx">ag</span><span class="o">=</span><span class="nx">o</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="nx">ag</span><span class="o">&gt;</span><span class="mi">0</span><span class="p">){</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">af</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span><span class="nx">af</span><span class="o">&lt;</span><span class="nx">ag</span><span class="p">;</span><span class="nx">af</span><span class="o">++</span><span class="p">){</span><span class="kd">var</span> <span class="nx">Y</span><span class="o">=</span><span class="nx">o</span><span class="p">[</span><span class="nx">af</span><span class="p">].</span><span class="nx">id</span><span class="p">;</span><span class="kd">var</span> <span class="nx">ab</span><span class="o">=</span><span class="nx">o</span><span class="p">[</span><span class="nx">af</span><span class="p">].</span><span class="nx">callbackFn</span><span class="p">;</span><span class="kd">var</span> <span class="nx">aa</span><span class="o">=</span><span class="p">{</span><span class="nx">success</span><span class="o">:</span><span class="kc">false</span><span class="p">,</span><span class="nx">id</span><span class="o">:</span><span class="nx">Y</span><span class="p">};</span><span class="k">if</span><span class="p">(</span><span class="nx">M</span><span class="p">.</span><span class="nx">pv</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span><span class="o">&gt;</span><span class="mi">0</span><span class="p">){</span><span class="kd">var</span> <span class="nx">ae</span><span class="o">=</span><span class="nx">c</span><span class="p">(</span><span class="nx">Y</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="nx">ae</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="nx">F</span><span class="p">(</span><span class="nx">o</span><span class="p">[</span><span class="nx">af</span><span class="p">].</span><span class="nx">swfVersion</span><span class="p">)</span><span class="o">&amp;&amp;!</span><span class="p">(</span><span class="nx">M</span><span class="p">.</span><span class="nx">wk</span><span class="o">&amp;&amp;</span><span class="nx">M</span><span class="p">.</span><span class="nx">wk</span><span class="o">&lt;</span><span class="mi">312</span><span class="p">)){</span><span class="nx">w</span><span class="p">(</span><span class="nx">Y</span><span class="p">,</span><span class="kc">true</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="nx">ab</span><span class="p">){</span><span class="nx">aa</span><span class="p">.</span><span class="nx">success</span><span class="o">=</span><span class="kc">true</span><span class="p">;</span><span class="nx">aa</span><span class="p">.</span><span class="nx">ref</span><span class="o">=</span><span class="nx">z</span><span class="p">(</span><span class="nx">Y</span><span class="p">);</span><span class="nx">ab</span><span class="p">(</span><span class="nx">aa</span><span class="p">)}}</span><span class="k">else</span><span class="p">{</span><span class="k">if</span><span class="p">(</span><span class="nx">o</span><span class="p">[</span><span class="nx">af</span><span class="p">].</span><span class="nx">expressInstall</span><span class="o">&amp;&amp;</span><span class="nx">A</span><span class="p">()){</span><span class="kd">var</span> <span class="nx">ai</span><span class="o">=</span><span class="p">{};</span><span class="nx">ai</span><span class="p">.</span><span class="nx">data</span><span class="o">=</span><span class="nx">o</span><span class="p">[</span><span class="nx">af</span><span class="p">].</span><span class="nx">expressInstall</span><span class="p">;</span><span class="nx">ai</span><span class="p">.</span><span class="nx">width</span><span class="o">=</span><span class="nx">ae</span><span class="p">.</span><span class="nx">getAttribute</span><span class="p">(</span><span class="s2">&quot;width&quot;</span><span class="p">)</span><span class="o">||</span><span class="s2">&quot;0&quot;</span><span class="p">;</span><span class="nx">ai</span><span class="p">.</span><span class="nx">height</span><span class="o">=</span><span class="nx">ae</span><span class="p">.</span><span class="nx">getAttribute</span><span class="p">(</span><span class="s2">&quot;height&quot;</span><span class="p">)</span><span class="o">||</span><span class="s2">&quot;0&quot;</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="nx">ae</span><span class="p">.</span><span class="nx">getAttribute</span><span class="p">(</span><span class="s2">&quot;class&quot;</span><span class="p">)){</span><span class="nx">ai</span><span class="p">.</span><span class="nx">styleclass</span><span class="o">=</span><span class="nx">ae</span><span class="p">.</span><span class="nx">getAttribute</span><span class="p">(</span><span class="s2">&quot;class&quot;</span><span class="p">)}</span><span class="k">if</span><span class="p">(</span><span class="nx">ae</span><span class="p">.</span><span class="nx">getAttribute</span><span class="p">(</span><span class="s2">&quot;align&quot;</span><span class="p">)){</span><span class="nx">ai</span><span class="p">.</span><span class="nx">align</span><span class="o">=</span><span class="nx">ae</span><span class="p">.</span><span class="nx">getAttribute</span><span class="p">(</span><span class="s2">&quot;align&quot;</span><span class="p">)}</span><span class="kd">var</span> <span class="nx">ah</span><span class="o">=</span><span class="p">{};</span><span class="kd">var</span> <span class="nx">X</span><span class="o">=</span><span class="nx">ae</span><span class="p">.</span><span class="nx">getElementsByTagName</span><span class="p">(</span><span class="s2">&quot;param&quot;</span><span class="p">);</span><span class="kd">var</span> <span class="nx">ac</span><span class="o">=</span><span class="nx">X</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">ad</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span><span class="nx">ad</span><span class="o">&lt;</span><span class="nx">ac</span><span class="p">;</span><span class="nx">ad</span><span class="o">++</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="nx">X</span><span class="p">[</span><span class="nx">ad</span><span class="p">].</span><span class="nx">getAttribute</span><span class="p">(</span><span class="s2">&quot;name&quot;</span><span class="p">).</span><span class="nx">toLowerCase</span><span class="p">()</span><span class="o">!=</span><span class="s2">&quot;movie&quot;</span><span class="p">){</span><span class="nx">ah</span><span class="p">[</span><span class="nx">X</span><span class="p">[</span><span class="nx">ad</span><span class="p">].</span><span class="nx">getAttribute</span><span class="p">(</span><span class="s2">&quot;name&quot;</span><span class="p">)]</span><span class="o">=</span><span class="nx">X</span><span class="p">[</span><span class="nx">ad</span><span class="p">].</span><span class="nx">getAttribute</span><span class="p">(</span><span class="s2">&quot;value&quot;</span><span class="p">)}}</span><span class="nx">P</span><span class="p">(</span><span class="nx">ai</span><span class="p">,</span><span class="nx">ah</span><span class="p">,</span><span class="nx">Y</span><span class="p">,</span><span class="nx">ab</span><span class="p">)}</span><span class="k">else</span><span class="p">{</span><span class="nx">p</span><span class="p">(</span><span class="nx">ae</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="nx">ab</span><span class="p">){</span><span class="nx">ab</span><span class="p">(</span><span class="nx">aa</span><span class="p">)}}}}}</span><span class="k">else</span><span class="p">{</span><span class="nx">w</span><span class="p">(</span><span class="nx">Y</span><span class="p">,</span><span class="kc">true</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="nx">ab</span><span class="p">){</span><span class="kd">var</span> <span class="nx">Z</span><span class="o">=</span><span class="nx">z</span><span class="p">(</span><span class="nx">Y</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="nx">Z</span><span class="o">&amp;&amp;</span><span class="k">typeof</span> <span class="nx">Z</span><span class="p">.</span><span class="nx">SetVariable</span><span class="o">!=</span><span class="nx">D</span><span class="p">){</span><span class="nx">aa</span><span class="p">.</span><span class="nx">success</span><span class="o">=</span><span class="kc">true</span><span class="p">;</span><span class="nx">aa</span><span class="p">.</span><span class="nx">ref</span><span class="o">=</span><span class="nx">Z</span><span class="p">}</span><span class="nx">ab</span><span class="p">(</span><span class="nx">aa</span><span class="p">)}}}}}</span><span class="kd">function</span> <span class="nx">z</span><span class="p">(</span><span class="nx">aa</span><span class="p">){</span><span class="kd">var</span> <span class="nx">X</span><span class="o">=</span><span class="kc">null</span><span class="p">;</span><span class="kd">var</span> <span class="nx">Y</span><span class="o">=</span><span class="nx">c</span><span class="p">(</span><span class="nx">aa</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="nx">Y</span><span class="o">&amp;&amp;</span><span class="nx">Y</span><span class="p">.</span><span class="nx">nodeName</span><span class="o">==</span><span class="s2">&quot;OBJECT&quot;</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">Y</span><span class="p">.</span><span class="nx">SetVariable</span><span class="o">!=</span><span class="nx">D</span><span class="p">){</span><span class="nx">X</span><span class="o">=</span><span class="nx">Y</span><span class="p">}</span><span class="k">else</span><span class="p">{</span><span class="kd">var</span> <span class="nx">Z</span><span class="o">=</span><span class="nx">Y</span><span class="p">.</span><span class="nx">getElementsByTagName</span><span class="p">(</span><span class="nx">r</span><span class="p">)[</span><span class="mi">0</span><span class="p">];</span><span class="k">if</span><span class="p">(</span><span class="nx">Z</span><span class="p">){</span><span class="nx">X</span><span class="o">=</span><span class="nx">Z</span><span class="p">}}}</span><span class="k">return</span> <span class="nx">X</span><span class="p">}</span><span class="kd">function</span> <span class="nx">A</span><span class="p">(){</span><span class="k">return</span> <span class="o">!</span><span class="nx">a</span><span class="o">&amp;&amp;</span><span class="nx">F</span><span class="p">(</span><span class="s2">&quot;6.0.65&quot;</span><span class="p">)</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">M</span><span class="p">.</span><span class="nx">win</span><span class="o">||</span><span class="nx">M</span><span class="p">.</span><span class="nx">mac</span><span class="p">)</span><span class="o">&amp;&amp;!</span><span class="p">(</span><span class="nx">M</span><span class="p">.</span><span class="nx">wk</span><span class="o">&amp;&amp;</span><span class="nx">M</span><span class="p">.</span><span class="nx">wk</span><span class="o">&lt;</span><span class="mi">312</span><span class="p">)}</span><span class="kd">function</span> <span class="nx">P</span><span class="p">(</span><span class="nx">aa</span><span class="p">,</span><span class="nx">ab</span><span class="p">,</span><span class="nx">X</span><span class="p">,</span><span class="nx">Z</span><span class="p">){</span><span class="nx">a</span><span class="o">=</span><span class="kc">true</span><span class="p">;</span><span class="nx">E</span><span class="o">=</span><span class="nx">Z</span><span class="o">||</span><span class="kc">null</span><span class="p">;</span><span class="nx">B</span><span class="o">=</span><span class="p">{</span><span class="nx">success</span><span class="o">:</span><span class="kc">false</span><span class="p">,</span><span class="nx">id</span><span class="o">:</span><span class="nx">X</span><span class="p">};</span><span class="kd">var</span> <span class="nx">ae</span><span class="o">=</span><span class="nx">c</span><span class="p">(</span><span class="nx">X</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="nx">ae</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="nx">ae</span><span class="p">.</span><span class="nx">nodeName</span><span class="o">==</span><span class="s2">&quot;OBJECT&quot;</span><span class="p">){</span><span class="nx">l</span><span class="o">=</span><span class="nx">g</span><span class="p">(</span><span class="nx">ae</span><span class="p">);</span><span class="nx">Q</span><span class="o">=</span><span class="kc">null</span><span class="p">}</span><span class="k">else</span><span class="p">{</span><span class="nx">l</span><span class="o">=</span><span class="nx">ae</span><span class="p">;</span><span class="nx">Q</span><span class="o">=</span><span class="nx">X</span><span class="p">}</span><span class="nx">aa</span><span class="p">.</span><span class="nx">id</span><span class="o">=</span><span class="nx">R</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">aa</span><span class="p">.</span><span class="nx">width</span><span class="o">==</span><span class="nx">D</span><span class="o">||</span><span class="p">(</span><span class="o">!</span><span class="sr">/%$/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">aa</span><span class="p">.</span><span class="nx">width</span><span class="p">)</span><span class="o">&amp;&amp;</span><span class="nb">parseInt</span><span class="p">(</span><span class="nx">aa</span><span class="p">.</span><span class="nx">width</span><span class="p">,</span><span class="mi">10</span><span class="p">)</span><span class="o">&lt;</span><span class="mi">310</span><span class="p">)){</span><span class="nx">aa</span><span class="p">.</span><span class="nx">width</span><span class="o">=</span><span class="s2">&quot;310&quot;</span><span class="p">}</span><span class="k">if</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">aa</span><span class="p">.</span><span class="nx">height</span><span class="o">==</span><span class="nx">D</span><span class="o">||</span><span class="p">(</span><span class="o">!</span><span class="sr">/%$/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">aa</span><span class="p">.</span><span class="nx">height</span><span class="p">)</span><span class="o">&amp;&amp;</span><span class="nb">parseInt</span><span class="p">(</span><span class="nx">aa</span><span class="p">.</span><span class="nx">height</span><span class="p">,</span><span class="mi">10</span><span class="p">)</span><span class="o">&lt;</span><span class="mi">137</span><span class="p">)){</span><span class="nx">aa</span><span class="p">.</span><span class="nx">height</span><span class="o">=</span><span class="s2">&quot;137&quot;</span><span class="p">}</span><span class="nx">j</span><span class="p">.</span><span class="nx">title</span><span class="o">=</span><span class="nx">j</span><span class="p">.</span><span class="nx">title</span><span class="p">.</span><span class="nx">slice</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span><span class="mi">47</span><span class="p">)</span><span class="o">+</span><span class="s2">&quot; - Flash Player Installation&quot;</span><span class="p">;</span><span class="kd">var</span> <span class="nx">ad</span><span class="o">=</span><span class="nx">M</span><span class="p">.</span><span class="nx">ie</span><span class="o">&amp;&amp;</span><span class="nx">M</span><span class="p">.</span><span class="nx">win</span><span class="o">?</span><span class="s2">&quot;ActiveX&quot;</span><span class="o">:</span><span class="s2">&quot;PlugIn&quot;</span><span class="p">,</span><span class="nx">ac</span><span class="o">=</span><span class="s2">&quot;MMredirectURL=&quot;</span><span class="o">+</span><span class="nx">O</span><span class="p">.</span><span class="nx">location</span><span class="p">.</span><span class="nx">toString</span><span class="p">().</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/&amp;/g</span><span class="p">,</span><span class="s2">&quot;%26&quot;</span><span class="p">)</span><span class="o">+</span><span class="s2">&quot;&amp;MMplayerType=&quot;</span><span class="o">+</span><span class="nx">ad</span><span class="o">+</span><span class="s2">&quot;&amp;MMdoctitle=&quot;</span><span class="o">+</span><span class="nx">j</span><span class="p">.</span><span class="nx">title</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">ab</span><span class="p">.</span><span class="nx">flashvars</span><span class="o">!=</span><span class="nx">D</span><span class="p">){</span><span class="nx">ab</span><span class="p">.</span><span class="nx">flashvars</span><span class="o">+=</span><span class="s2">&quot;&amp;&quot;</span><span class="o">+</span><span class="nx">ac</span><span class="p">}</span><span class="k">else</span><span class="p">{</span><span class="nx">ab</span><span class="p">.</span><span class="nx">flashvars</span><span class="o">=</span><span class="nx">ac</span><span class="p">}</span><span class="k">if</span><span class="p">(</span><span class="nx">M</span><span class="p">.</span><span class="nx">ie</span><span class="o">&amp;&amp;</span><span class="nx">M</span><span class="p">.</span><span class="nx">win</span><span class="o">&amp;&amp;</span><span class="nx">ae</span><span class="p">.</span><span class="nx">readyState</span><span class="o">!=</span><span class="mi">4</span><span class="p">){</span><span class="kd">var</span> <span class="nx">Y</span><span class="o">=</span><span class="nx">C</span><span class="p">(</span><span class="s2">&quot;div&quot;</span><span class="p">);</span><span class="nx">X</span><span class="o">+=</span><span class="s2">&quot;SWFObjectNew&quot;</span><span class="p">;</span><span class="nx">Y</span><span class="p">.</span><span class="nx">setAttribute</span><span class="p">(</span><span class="s2">&quot;id&quot;</span><span class="p">,</span><span class="nx">X</span><span class="p">);</span><span class="nx">ae</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">.</span><span class="nx">insertBefore</span><span class="p">(</span><span class="nx">Y</span><span class="p">,</span><span class="nx">ae</span><span class="p">);</span><span class="nx">ae</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">display</span><span class="o">=</span><span class="s2">&quot;none&quot;</span><span class="p">;(</span><span class="kd">function</span><span class="p">(){</span><span class="k">if</span><span class="p">(</span><span class="nx">ae</span><span class="p">.</span><span class="nx">readyState</span><span class="o">==</span><span class="mi">4</span><span class="p">){</span><span class="nx">ae</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">.</span><span class="nx">removeChild</span><span class="p">(</span><span class="nx">ae</span><span class="p">)}</span><span class="k">else</span><span class="p">{</span><span class="nx">setTimeout</span><span class="p">(</span><span class="nx">arguments</span><span class="p">.</span><span class="nx">callee</span><span class="p">,</span><span class="mi">10</span><span class="p">)}})()}</span><span class="nx">u</span><span class="p">(</span><span class="nx">aa</span><span class="p">,</span><span class="nx">ab</span><span class="p">,</span><span class="nx">X</span><span class="p">)}}</span><span class="kd">function</span> <span class="nx">p</span><span class="p">(</span><span class="nx">Y</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="nx">M</span><span class="p">.</span><span class="nx">ie</span><span class="o">&amp;&amp;</span><span class="nx">M</span><span class="p">.</span><span class="nx">win</span><span class="o">&amp;&amp;</span><span class="nx">Y</span><span class="p">.</span><span class="nx">readyState</span><span class="o">!=</span><span class="mi">4</span><span class="p">){</span><span class="kd">var</span> <span class="nx">X</span><span class="o">=</span><span class="nx">C</span><span class="p">(</span><span class="s2">&quot;div&quot;</span><span class="p">);</span><span class="nx">Y</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">.</span><span class="nx">insertBefore</span><span class="p">(</span><span class="nx">X</span><span class="p">,</span><span class="nx">Y</span><span class="p">);</span><span class="nx">X</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">.</span><span class="nx">replaceChild</span><span class="p">(</span><span class="nx">g</span><span class="p">(</span><span class="nx">Y</span><span class="p">),</span><span class="nx">X</span><span class="p">);</span><span class="nx">Y</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">display</span><span class="o">=</span><span class="s2">&quot;none&quot;</span><span class="p">;(</span><span class="kd">function</span><span class="p">(){</span><span class="k">if</span><span class="p">(</span><span class="nx">Y</span><span class="p">.</span><span class="nx">readyState</span><span class="o">==</span><span class="mi">4</span><span class="p">){</span><span class="nx">Y</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">.</span><span class="nx">removeChild</span><span class="p">(</span><span class="nx">Y</span><span class="p">)}</span><span class="k">else</span><span class="p">{</span><span class="nx">setTimeout</span><span class="p">(</span><span class="nx">arguments</span><span class="p">.</span><span class="nx">callee</span><span class="p">,</span><span class="mi">10</span><span class="p">)}})()}</span><span class="k">else</span><span class="p">{</span><span class="nx">Y</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">.</span><span class="nx">replaceChild</span><span class="p">(</span><span class="nx">g</span><span class="p">(</span><span class="nx">Y</span><span class="p">),</span><span class="nx">Y</span><span class="p">)}}</span><span class="kd">function</span> <span class="nx">g</span><span class="p">(</span><span class="nx">ab</span><span class="p">){</span><span class="kd">var</span> <span class="nx">aa</span><span class="o">=</span><span class="nx">C</span><span class="p">(</span><span class="s2">&quot;div&quot;</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="nx">M</span><span class="p">.</span><span class="nx">win</span><span class="o">&amp;&amp;</span><span class="nx">M</span><span class="p">.</span><span class="nx">ie</span><span class="p">){</span><span class="nx">aa</span><span class="p">.</span><span class="nx">innerHTML</span><span class="o">=</span><span class="nx">ab</span><span class="p">.</span><span class="nx">innerHTML</span><span class="p">}</span><span class="k">else</span><span class="p">{</span><span class="kd">var</span> <span class="nx">Y</span><span class="o">=</span><span class="nx">ab</span><span class="p">.</span><span class="nx">getElementsByTagName</span><span class="p">(</span><span class="nx">r</span><span class="p">)[</span><span class="mi">0</span><span class="p">];</span><span class="k">if</span><span class="p">(</span><span class="nx">Y</span><span class="p">){</span><span class="kd">var</span> <span class="nx">ad</span><span class="o">=</span><span class="nx">Y</span><span class="p">.</span><span class="nx">childNodes</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="nx">ad</span><span class="p">){</span><span class="kd">var</span> <span class="nx">X</span><span class="o">=</span><span class="nx">ad</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">Z</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span><span class="nx">Z</span><span class="o">&lt;</span><span class="nx">X</span><span class="p">;</span><span class="nx">Z</span><span class="o">++</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="p">(</span><span class="nx">ad</span><span class="p">[</span><span class="nx">Z</span><span class="p">].</span><span class="nx">nodeType</span><span class="o">==</span><span class="mi">1</span><span class="o">&amp;&amp;</span><span class="nx">ad</span><span class="p">[</span><span class="nx">Z</span><span class="p">].</span><span class="nx">nodeName</span><span class="o">==</span><span class="s2">&quot;PARAM&quot;</span><span class="p">)</span><span class="o">&amp;&amp;!</span><span class="p">(</span><span class="nx">ad</span><span class="p">[</span><span class="nx">Z</span><span class="p">].</span><span class="nx">nodeType</span><span class="o">==</span><span class="mi">8</span><span class="p">)){</span><span class="nx">aa</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span><span class="nx">ad</span><span class="p">[</span><span class="nx">Z</span><span class="p">].</span><span class="nx">cloneNode</span><span class="p">(</span><span class="kc">true</span><span class="p">))}}}}}</span><span class="k">return</span> <span class="nx">aa</span><span class="p">}</span><span class="kd">function</span> <span class="nx">u</span><span class="p">(</span><span class="nx">ai</span><span class="p">,</span><span class="nx">ag</span><span class="p">,</span><span class="nx">Y</span><span class="p">){</span><span class="kd">var</span> <span class="nx">X</span><span class="p">,</span><span class="nx">aa</span><span class="o">=</span><span class="nx">c</span><span class="p">(</span><span class="nx">Y</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="nx">M</span><span class="p">.</span><span class="nx">wk</span><span class="o">&amp;&amp;</span><span class="nx">M</span><span class="p">.</span><span class="nx">wk</span><span class="o">&lt;</span><span class="mi">312</span><span class="p">){</span><span class="k">return</span> <span class="nx">X</span><span class="p">}</span><span class="k">if</span><span class="p">(</span><span class="nx">aa</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">ai</span><span class="p">.</span><span class="nx">id</span><span class="o">==</span><span class="nx">D</span><span class="p">){</span><span class="nx">ai</span><span class="p">.</span><span class="nx">id</span><span class="o">=</span><span class="nx">Y</span><span class="p">}</span><span class="k">if</span><span class="p">(</span><span class="nx">M</span><span class="p">.</span><span class="nx">ie</span><span class="o">&amp;&amp;</span><span class="nx">M</span><span class="p">.</span><span class="nx">win</span><span class="p">){</span><span class="kd">var</span> <span class="nx">ah</span><span class="o">=</span><span class="s2">&quot;&quot;</span><span class="p">;</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">ae</span> <span class="k">in</span> <span class="nx">ai</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="nx">ai</span><span class="p">[</span><span class="nx">ae</span><span class="p">]</span><span class="o">!=</span><span class="nb">Object</span><span class="p">.</span><span class="nx">prototype</span><span class="p">[</span><span class="nx">ae</span><span class="p">]){</span><span class="k">if</span><span class="p">(</span><span class="nx">ae</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">()</span><span class="o">==</span><span class="s2">&quot;data&quot;</span><span class="p">){</span><span class="nx">ag</span><span class="p">.</span><span class="nx">movie</span><span class="o">=</span><span class="nx">ai</span><span class="p">[</span><span class="nx">ae</span><span class="p">]}</span><span class="k">else</span><span class="p">{</span><span class="k">if</span><span class="p">(</span><span class="nx">ae</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">()</span><span class="o">==</span><span class="s2">&quot;styleclass&quot;</span><span class="p">){</span><span class="nx">ah</span><span class="o">+=</span><span class="s1">&#39; class=&quot;&#39;</span><span class="o">+</span><span class="nx">ai</span><span class="p">[</span><span class="nx">ae</span><span class="p">]</span><span class="o">+</span><span class="s1">&#39;&quot;&#39;</span><span class="p">}</span><span class="k">else</span><span class="p">{</span><span class="k">if</span><span class="p">(</span><span class="nx">ae</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">()</span><span class="o">!=</span><span class="s2">&quot;classid&quot;</span><span class="p">){</span><span class="nx">ah</span><span class="o">+=</span><span class="s2">&quot; &quot;</span><span class="o">+</span><span class="nx">ae</span><span class="o">+</span><span class="s1">&#39;=&quot;&#39;</span><span class="o">+</span><span class="nx">ai</span><span class="p">[</span><span class="nx">ae</span><span class="p">]</span><span class="o">+</span><span class="s1">&#39;&quot;&#39;</span><span class="p">}}}}}</span><span class="kd">var</span> <span class="nx">af</span><span class="o">=</span><span class="s2">&quot;&quot;</span><span class="p">;</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">ad</span> <span class="k">in</span> <span class="nx">ag</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="nx">ag</span><span class="p">[</span><span class="nx">ad</span><span class="p">]</span><span class="o">!=</span><span class="nb">Object</span><span class="p">.</span><span class="nx">prototype</span><span class="p">[</span><span class="nx">ad</span><span class="p">]){</span><span class="nx">af</span><span class="o">+=</span><span class="s1">&#39;&lt;param name=&quot;&#39;</span><span class="o">+</span><span class="nx">ad</span><span class="o">+</span><span class="s1">&#39;&quot; value=&quot;&#39;</span><span class="o">+</span><span class="nx">ag</span><span class="p">[</span><span class="nx">ad</span><span class="p">]</span><span class="o">+</span><span class="s1">&#39;&quot; /&gt;&#39;</span><span class="p">}}</span><span class="nx">aa</span><span class="p">.</span><span class="nx">outerHTML</span><span class="o">=</span><span class="s1">&#39;&lt;object classid=&quot;clsid:D27CDB6E-AE6D-11cf-96B8-444553540000&quot;&#39;</span><span class="o">+</span><span class="nx">ah</span><span class="o">+</span><span class="s2">&quot;&gt;&quot;</span><span class="o">+</span><span class="nx">af</span><span class="o">+</span><span class="s2">&quot;&lt;/object&gt;&quot;</span><span class="p">;</span><span class="nx">N</span><span class="p">[</span><span class="nx">N</span><span class="p">.</span><span class="nx">length</span><span class="p">]</span><span class="o">=</span><span class="nx">ai</span><span class="p">.</span><span class="nx">id</span><span class="p">;</span><span class="nx">X</span><span class="o">=</span><span class="nx">c</span><span class="p">(</span><span class="nx">ai</span><span class="p">.</span><span class="nx">id</span><span class="p">)}</span><span class="k">else</span><span class="p">{</span><span class="kd">var</span> <span class="nx">Z</span><span class="o">=</span><span class="nx">C</span><span class="p">(</span><span class="nx">r</span><span class="p">);</span><span class="nx">Z</span><span class="p">.</span><span class="nx">setAttribute</span><span class="p">(</span><span class="s2">&quot;type&quot;</span><span class="p">,</span><span class="nx">q</span><span class="p">);</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">ac</span> <span class="k">in</span> <span class="nx">ai</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="nx">ai</span><span class="p">[</span><span class="nx">ac</span><span class="p">]</span><span class="o">!=</span><span class="nb">Object</span><span class="p">.</span><span class="nx">prototype</span><span class="p">[</span><span class="nx">ac</span><span class="p">]){</span><span class="k">if</span><span class="p">(</span><span class="nx">ac</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">()</span><span class="o">==</span><span class="s2">&quot;styleclass&quot;</span><span class="p">){</span><span class="nx">Z</span><span class="p">.</span><span class="nx">setAttribute</span><span class="p">(</span><span class="s2">&quot;class&quot;</span><span class="p">,</span><span class="nx">ai</span><span class="p">[</span><span class="nx">ac</span><span class="p">])}</span><span class="k">else</span><span class="p">{</span><span class="k">if</span><span class="p">(</span><span class="nx">ac</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">()</span><span class="o">!=</span><span class="s2">&quot;classid&quot;</span><span class="p">){</span><span class="nx">Z</span><span class="p">.</span><span class="nx">setAttribute</span><span class="p">(</span><span class="nx">ac</span><span class="p">,</span><span class="nx">ai</span><span class="p">[</span><span class="nx">ac</span><span class="p">])}}}}</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">ab</span> <span class="k">in</span> <span class="nx">ag</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="nx">ag</span><span class="p">[</span><span class="nx">ab</span><span class="p">]</span><span class="o">!=</span><span class="nb">Object</span><span class="p">.</span><span class="nx">prototype</span><span class="p">[</span><span class="nx">ab</span><span class="p">]</span><span class="o">&amp;&amp;</span><span class="nx">ab</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">()</span><span class="o">!=</span><span class="s2">&quot;movie&quot;</span><span class="p">){</span><span class="nx">e</span><span class="p">(</span><span class="nx">Z</span><span class="p">,</span><span class="nx">ab</span><span class="p">,</span><span class="nx">ag</span><span class="p">[</span><span class="nx">ab</span><span class="p">])}}</span><span class="nx">aa</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">.</span><span class="nx">replaceChild</span><span class="p">(</span><span class="nx">Z</span><span class="p">,</span><span class="nx">aa</span><span class="p">);</span><span class="nx">X</span><span class="o">=</span><span class="nx">Z</span><span class="p">}}</span><span class="k">return</span> <span class="nx">X</span><span class="p">}</span><span class="kd">function</span> <span class="nx">e</span><span class="p">(</span><span class="nx">Z</span><span class="p">,</span><span class="nx">X</span><span class="p">,</span><span class="nx">Y</span><span class="p">){</span><span class="kd">var</span> <span class="nx">aa</span><span class="o">=</span><span class="nx">C</span><span class="p">(</span><span class="s2">&quot;param&quot;</span><span class="p">);</span><span class="nx">aa</span><span class="p">.</span><span class="nx">setAttribute</span><span class="p">(</span><span class="s2">&quot;name&quot;</span><span class="p">,</span><span class="nx">X</span><span class="p">);</span><span class="nx">aa</span><span class="p">.</span><span class="nx">setAttribute</span><span class="p">(</span><span class="s2">&quot;value&quot;</span><span class="p">,</span><span class="nx">Y</span><span class="p">);</span><span class="nx">Z</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span><span class="nx">aa</span><span class="p">)}</span><span class="kd">function</span> <span class="nx">y</span><span class="p">(</span><span class="nx">Y</span><span class="p">){</span><span class="kd">var</span> <span class="nx">X</span><span class="o">=</span><span class="nx">c</span><span class="p">(</span><span class="nx">Y</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="nx">X</span><span class="o">&amp;&amp;</span><span class="nx">X</span><span class="p">.</span><span class="nx">nodeName</span><span class="o">==</span><span class="s2">&quot;OBJECT&quot;</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="nx">M</span><span class="p">.</span><span class="nx">ie</span><span class="o">&amp;&amp;</span><span class="nx">M</span><span class="p">.</span><span class="nx">win</span><span class="p">){</span><span class="nx">X</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">display</span><span class="o">=</span><span class="s2">&quot;none&quot;</span><span class="p">;(</span><span class="kd">function</span><span class="p">(){</span><span class="k">if</span><span class="p">(</span><span class="nx">X</span><span class="p">.</span><span class="nx">readyState</span><span class="o">==</span><span class="mi">4</span><span class="p">){</span><span class="nx">b</span><span class="p">(</span><span class="nx">Y</span><span class="p">)}</span><span class="k">else</span><span class="p">{</span><span class="nx">setTimeout</span><span class="p">(</span><span class="nx">arguments</span><span class="p">.</span><span class="nx">callee</span><span class="p">,</span><span class="mi">10</span><span class="p">)}})()}</span><span class="k">else</span><span class="p">{</span><span class="nx">X</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">.</span><span class="nx">removeChild</span><span class="p">(</span><span class="nx">X</span><span class="p">)}}}</span><span class="kd">function</span> <span class="nx">b</span><span class="p">(</span><span class="nx">Z</span><span class="p">){</span><span class="kd">var</span> <span class="nx">Y</span><span class="o">=</span><span class="nx">c</span><span class="p">(</span><span class="nx">Z</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="nx">Y</span><span class="p">){</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">X</span> <span class="k">in</span> <span class="nx">Y</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">Y</span><span class="p">[</span><span class="nx">X</span><span class="p">]</span><span class="o">==</span><span class="s2">&quot;function&quot;</span><span class="p">){</span><span class="nx">Y</span><span class="p">[</span><span class="nx">X</span><span class="p">]</span><span class="o">=</span><span class="kc">null</span><span class="p">}}</span><span class="nx">Y</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">.</span><span class="nx">removeChild</span><span class="p">(</span><span class="nx">Y</span><span class="p">)}}</span><span class="kd">function</span> <span class="nx">c</span><span class="p">(</span><span class="nx">Z</span><span class="p">){</span><span class="kd">var</span> <span class="nx">X</span><span class="o">=</span><span class="kc">null</span><span class="p">;</span><span class="k">try</span><span class="p">{</span><span class="nx">X</span><span class="o">=</span><span class="nx">j</span><span class="p">.</span><span class="nx">getElementById</span><span class="p">(</span><span class="nx">Z</span><span class="p">)}</span><span class="k">catch</span><span class="p">(</span><span class="nx">Y</span><span class="p">){}</span><span class="k">return</span> <span class="nx">X</span><span class="p">}</span><span class="kd">function</span> <span class="nx">C</span><span class="p">(</span><span class="nx">X</span><span class="p">){</span><span class="k">return</span> <span class="nx">j</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="nx">X</span><span class="p">)}</span><span class="kd">function</span> <span class="nx">i</span><span class="p">(</span><span class="nx">Z</span><span class="p">,</span><span class="nx">X</span><span class="p">,</span><span class="nx">Y</span><span class="p">){</span><span class="nx">Z</span><span class="p">.</span><span class="nx">attachEvent</span><span class="p">(</span><span class="nx">X</span><span class="p">,</span><span class="nx">Y</span><span class="p">);</span><span class="nx">I</span><span class="p">[</span><span class="nx">I</span><span class="p">.</span><span class="nx">length</span><span class="p">]</span><span class="o">=</span><span class="p">[</span><span class="nx">Z</span><span class="p">,</span><span class="nx">X</span><span class="p">,</span><span class="nx">Y</span><span class="p">]}</span><span class="kd">function</span> <span class="nx">F</span><span class="p">(</span><span class="nx">Z</span><span class="p">){</span><span class="kd">var</span> <span class="nx">Y</span><span class="o">=</span><span class="nx">M</span><span class="p">.</span><span class="nx">pv</span><span class="p">,</span><span class="nx">X</span><span class="o">=</span><span class="nx">Z</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot;.&quot;</span><span class="p">);</span><span class="nx">X</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span><span class="o">=</span><span class="nb">parseInt</span><span class="p">(</span><span class="nx">X</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span><span class="mi">10</span><span class="p">);</span><span class="nx">X</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span><span class="o">=</span><span class="nb">parseInt</span><span class="p">(</span><span class="nx">X</span><span class="p">[</span><span class="mi">1</span><span class="p">],</span><span class="mi">10</span><span class="p">)</span><span class="o">||</span><span class="mi">0</span><span class="p">;</span><span class="nx">X</span><span class="p">[</span><span class="mi">2</span><span class="p">]</span><span class="o">=</span><span class="nb">parseInt</span><span class="p">(</span><span class="nx">X</span><span class="p">[</span><span class="mi">2</span><span class="p">],</span><span class="mi">10</span><span class="p">)</span><span class="o">||</span><span class="mi">0</span><span class="p">;</span><span class="k">return</span><span class="p">(</span><span class="nx">Y</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span><span class="o">&gt;</span><span class="nx">X</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span><span class="o">||</span><span class="p">(</span><span class="nx">Y</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span><span class="o">==</span><span class="nx">X</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span><span class="o">&amp;&amp;</span><span class="nx">Y</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span><span class="o">&gt;</span><span class="nx">X</span><span class="p">[</span><span class="mi">1</span><span class="p">])</span><span class="o">||</span><span class="p">(</span><span class="nx">Y</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span><span class="o">==</span><span class="nx">X</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span><span class="o">&amp;&amp;</span><span class="nx">Y</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span><span class="o">==</span><span class="nx">X</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span><span class="o">&amp;&amp;</span><span class="nx">Y</span><span class="p">[</span><span class="mi">2</span><span class="p">]</span><span class="o">&gt;=</span><span class="nx">X</span><span class="p">[</span><span class="mi">2</span><span class="p">]))</span><span class="o">?</span><span class="kc">true</span><span class="o">:</span><span class="kc">false</span><span class="p">}</span><span class="kd">function</span> <span class="nx">v</span><span class="p">(</span><span class="nx">ac</span><span class="p">,</span><span class="nx">Y</span><span class="p">,</span><span class="nx">ad</span><span class="p">,</span><span class="nx">ab</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="nx">M</span><span class="p">.</span><span class="nx">ie</span><span class="o">&amp;&amp;</span><span class="nx">M</span><span class="p">.</span><span class="nx">mac</span><span class="p">){</span><span class="k">return</span><span class="p">}</span><span class="kd">var</span> <span class="nx">aa</span><span class="o">=</span><span class="nx">j</span><span class="p">.</span><span class="nx">getElementsByTagName</span><span class="p">(</span><span class="s2">&quot;head&quot;</span><span class="p">)[</span><span class="mi">0</span><span class="p">];</span><span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">aa</span><span class="p">){</span><span class="k">return</span><span class="p">}</span><span class="kd">var</span> <span class="nx">X</span><span class="o">=</span><span class="p">(</span><span class="nx">ad</span><span class="o">&amp;&amp;</span><span class="k">typeof</span> <span class="nx">ad</span><span class="o">==</span><span class="s2">&quot;string&quot;</span><span class="p">)</span><span class="o">?</span><span class="nx">ad</span><span class="o">:</span><span class="s2">&quot;screen&quot;</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="nx">ab</span><span class="p">){</span><span class="nx">n</span><span class="o">=</span><span class="kc">null</span><span class="p">;</span><span class="nx">G</span><span class="o">=</span><span class="kc">null</span><span class="p">}</span><span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">n</span><span class="o">||</span><span class="nx">G</span><span class="o">!=</span><span class="nx">X</span><span class="p">){</span><span class="kd">var</span> <span class="nx">Z</span><span class="o">=</span><span class="nx">C</span><span class="p">(</span><span class="s2">&quot;style&quot;</span><span class="p">);</span><span class="nx">Z</span><span class="p">.</span><span class="nx">setAttribute</span><span class="p">(</span><span class="s2">&quot;type&quot;</span><span class="p">,</span><span class="s2">&quot;text/css&quot;</span><span class="p">);</span><span class="nx">Z</span><span class="p">.</span><span class="nx">setAttribute</span><span class="p">(</span><span class="s2">&quot;media&quot;</span><span class="p">,</span><span class="nx">X</span><span class="p">);</span><span class="nx">n</span><span class="o">=</span><span class="nx">aa</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span><span class="nx">Z</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="nx">M</span><span class="p">.</span><span class="nx">ie</span><span class="o">&amp;&amp;</span><span class="nx">M</span><span class="p">.</span><span class="nx">win</span><span class="o">&amp;&amp;</span><span class="k">typeof</span> <span class="nx">j</span><span class="p">.</span><span class="nx">styleSheets</span><span class="o">!=</span><span class="nx">D</span><span class="o">&amp;&amp;</span><span class="nx">j</span><span class="p">.</span><span class="nx">styleSheets</span><span class="p">.</span><span class="nx">length</span><span class="o">&gt;</span><span class="mi">0</span><span class="p">){</span><span class="nx">n</span><span class="o">=</span><span class="nx">j</span><span class="p">.</span><span class="nx">styleSheets</span><span class="p">[</span><span class="nx">j</span><span class="p">.</span><span class="nx">styleSheets</span><span class="p">.</span><span class="nx">length</span><span class="o">-</span><span class="mi">1</span><span class="p">]}</span><span class="nx">G</span><span class="o">=</span><span class="nx">X</span><span class="p">}</span><span class="k">if</span><span class="p">(</span><span class="nx">M</span><span class="p">.</span><span class="nx">ie</span><span class="o">&amp;&amp;</span><span class="nx">M</span><span class="p">.</span><span class="nx">win</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="nx">n</span><span class="o">&amp;&amp;</span><span class="k">typeof</span> <span class="nx">n</span><span class="p">.</span><span class="nx">addRule</span><span class="o">==</span><span class="nx">r</span><span class="p">){</span><span class="nx">n</span><span class="p">.</span><span class="nx">addRule</span><span class="p">(</span><span class="nx">ac</span><span class="p">,</span><span class="nx">Y</span><span class="p">)}}</span><span class="k">else</span><span class="p">{</span><span class="k">if</span><span class="p">(</span><span class="nx">n</span><span class="o">&amp;&amp;</span><span class="k">typeof</span> <span class="nx">j</span><span class="p">.</span><span class="nx">createTextNode</span><span class="o">!=</span><span class="nx">D</span><span class="p">){</span><span class="nx">n</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span><span class="nx">j</span><span class="p">.</span><span class="nx">createTextNode</span><span class="p">(</span><span class="nx">ac</span><span class="o">+</span><span class="s2">&quot; {&quot;</span><span class="o">+</span><span class="nx">Y</span><span class="o">+</span><span class="s2">&quot;}&quot;</span><span class="p">))}}}</span><span class="kd">function</span> <span class="nx">w</span><span class="p">(</span><span class="nx">Z</span><span class="p">,</span><span class="nx">X</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">m</span><span class="p">){</span><span class="k">return</span><span class="p">}</span><span class="kd">var</span> <span class="nx">Y</span><span class="o">=</span><span class="nx">X</span><span class="o">?</span><span class="s2">&quot;visible&quot;</span><span class="o">:</span><span class="s2">&quot;hidden&quot;</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="nx">J</span><span class="o">&amp;&amp;</span><span class="nx">c</span><span class="p">(</span><span class="nx">Z</span><span class="p">)){</span><span class="nx">c</span><span class="p">(</span><span class="nx">Z</span><span class="p">).</span><span class="nx">style</span><span class="p">.</span><span class="nx">visibility</span><span class="o">=</span><span class="nx">Y</span><span class="p">}</span><span class="k">else</span><span class="p">{</span><span class="nx">v</span><span class="p">(</span><span class="s2">&quot;#&quot;</span><span class="o">+</span><span class="nx">Z</span><span class="p">,</span><span class="s2">&quot;visibility:&quot;</span><span class="o">+</span><span class="nx">Y</span><span class="p">)}}</span><span class="kd">function</span> <span class="nx">L</span><span class="p">(</span><span class="nx">Y</span><span class="p">){</span><span class="kd">var</span> <span class="nx">Z</span><span class="o">=</span><span class="sr">/[\\\&quot;&lt;&gt;\.;]/</span><span class="p">;</span><span class="kd">var</span> <span class="nx">X</span><span class="o">=</span><span class="nx">Z</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="nx">Y</span><span class="p">)</span><span class="o">!=</span><span class="kc">null</span><span class="p">;</span><span class="k">return</span> <span class="nx">X</span><span class="o">&amp;&amp;</span><span class="k">typeof</span> <span class="nb">encodeURIComponent</span><span class="o">!=</span><span class="nx">D</span><span class="o">?</span><span class="nb">encodeURIComponent</span><span class="p">(</span><span class="nx">Y</span><span class="p">)</span><span class="o">:</span><span class="nx">Y</span><span class="p">}</span><span class="kd">var</span> <span class="nx">d</span><span class="o">=</span><span class="kd">function</span><span class="p">(){</span><span class="k">if</span><span class="p">(</span><span class="nx">M</span><span class="p">.</span><span class="nx">ie</span><span class="o">&amp;&amp;</span><span class="nx">M</span><span class="p">.</span><span class="nx">win</span><span class="p">){</span><span class="nb">window</span><span class="p">.</span><span class="nx">attachEvent</span><span class="p">(</span><span class="s2">&quot;onunload&quot;</span><span class="p">,</span><span class="kd">function</span><span class="p">(){</span><span class="kd">var</span> <span class="nx">ac</span><span class="o">=</span><span class="nx">I</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">ab</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span><span class="nx">ab</span><span class="o">&lt;</span><span class="nx">ac</span><span class="p">;</span><span class="nx">ab</span><span class="o">++</span><span class="p">){</span><span class="nx">I</span><span class="p">[</span><span class="nx">ab</span><span class="p">][</span><span class="mi">0</span><span class="p">].</span><span class="nx">detachEvent</span><span class="p">(</span><span class="nx">I</span><span class="p">[</span><span class="nx">ab</span><span class="p">][</span><span class="mi">1</span><span class="p">],</span><span class="nx">I</span><span class="p">[</span><span class="nx">ab</span><span class="p">][</span><span class="mi">2</span><span class="p">])}</span><span class="kd">var</span> <span class="nx">Z</span><span class="o">=</span><span class="nx">N</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">aa</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span><span class="nx">aa</span><span class="o">&lt;</span><span class="nx">Z</span><span class="p">;</span><span class="nx">aa</span><span class="o">++</span><span class="p">){</span><span class="nx">y</span><span class="p">(</span><span class="nx">N</span><span class="p">[</span><span class="nx">aa</span><span class="p">])}</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">Y</span> <span class="k">in</span> <span class="nx">M</span><span class="p">){</span><span class="nx">M</span><span class="p">[</span><span class="nx">Y</span><span class="p">]</span><span class="o">=</span><span class="kc">null</span><span class="p">}</span><span class="nx">M</span><span class="o">=</span><span class="kc">null</span><span class="p">;</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">X</span> <span class="k">in</span> <span class="nx">swfobject</span><span class="p">){</span><span class="nx">swfobject</span><span class="p">[</span><span class="nx">X</span><span class="p">]</span><span class="o">=</span><span class="kc">null</span><span class="p">}</span><span class="nx">swfobject</span><span class="o">=</span><span class="kc">null</span><span class="p">})}}();</span><span class="k">return</span><span class="p">{</span><span class="nx">registerObject</span><span class="o">:</span><span class="kd">function</span><span class="p">(</span><span class="nx">ab</span><span class="p">,</span><span class="nx">X</span><span class="p">,</span><span class="nx">aa</span><span class="p">,</span><span class="nx">Z</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="nx">M</span><span class="p">.</span><span class="nx">w3</span><span class="o">&amp;&amp;</span><span class="nx">ab</span><span class="o">&amp;&amp;</span><span class="nx">X</span><span class="p">){</span><span class="kd">var</span> <span class="nx">Y</span><span class="o">=</span><span class="p">{};</span><span class="nx">Y</span><span class="p">.</span><span class="nx">id</span><span class="o">=</span><span class="nx">ab</span><span class="p">;</span><span class="nx">Y</span><span class="p">.</span><span class="nx">swfVersion</span><span class="o">=</span><span class="nx">X</span><span class="p">;</span><span class="nx">Y</span><span class="p">.</span><span class="nx">expressInstall</span><span class="o">=</span><span class="nx">aa</span><span class="p">;</span><span class="nx">Y</span><span class="p">.</span><span class="nx">callbackFn</span><span class="o">=</span><span class="nx">Z</span><span class="p">;</span><span class="nx">o</span><span class="p">[</span><span class="nx">o</span><span class="p">.</span><span class="nx">length</span><span class="p">]</span><span class="o">=</span><span class="nx">Y</span><span class="p">;</span><span class="nx">w</span><span class="p">(</span><span class="nx">ab</span><span class="p">,</span><span class="kc">false</span><span class="p">)}</span><span class="k">else</span><span class="p">{</span><span class="k">if</span><span class="p">(</span><span class="nx">Z</span><span class="p">){</span><span class="nx">Z</span><span class="p">({</span><span class="nx">success</span><span class="o">:</span><span class="kc">false</span><span class="p">,</span><span class="nx">id</span><span class="o">:</span><span class="nx">ab</span><span class="p">})}}},</span><span class="nx">getObjectById</span><span class="o">:</span><span class="kd">function</span><span class="p">(</span><span class="nx">X</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="nx">M</span><span class="p">.</span><span class="nx">w3</span><span class="p">){</span><span class="k">return</span> <span class="nx">z</span><span class="p">(</span><span class="nx">X</span><span class="p">)}},</span><span class="nx">embedSWF</span><span class="o">:</span><span class="kd">function</span><span class="p">(</span><span class="nx">ab</span><span class="p">,</span><span class="nx">ah</span><span class="p">,</span><span class="nx">ae</span><span class="p">,</span><span class="nx">ag</span><span class="p">,</span><span class="nx">Y</span><span class="p">,</span><span class="nx">aa</span><span class="p">,</span><span class="nx">Z</span><span class="p">,</span><span class="nx">ad</span><span class="p">,</span><span class="nx">af</span><span class="p">,</span><span class="nx">ac</span><span class="p">){</span><span class="kd">var</span> <span class="nx">X</span><span class="o">=</span><span class="p">{</span><span class="nx">success</span><span class="o">:</span><span class="kc">false</span><span class="p">,</span><span class="nx">id</span><span class="o">:</span><span class="nx">ah</span><span class="p">};</span><span class="k">if</span><span class="p">(</span><span class="nx">M</span><span class="p">.</span><span class="nx">w3</span><span class="o">&amp;&amp;!</span><span class="p">(</span><span class="nx">M</span><span class="p">.</span><span class="nx">wk</span><span class="o">&amp;&amp;</span><span class="nx">M</span><span class="p">.</span><span class="nx">wk</span><span class="o">&lt;</span><span class="mi">312</span><span class="p">)</span><span class="o">&amp;&amp;</span><span class="nx">ab</span><span class="o">&amp;&amp;</span><span class="nx">ah</span><span class="o">&amp;&amp;</span><span class="nx">ae</span><span class="o">&amp;&amp;</span><span class="nx">ag</span><span class="o">&amp;&amp;</span><span class="nx">Y</span><span class="p">){</span><span class="nx">w</span><span class="p">(</span><span class="nx">ah</span><span class="p">,</span><span class="kc">false</span><span class="p">);</span><span class="nx">K</span><span class="p">(</span><span class="kd">function</span><span class="p">(){</span><span class="nx">ae</span><span class="o">+=</span><span class="s2">&quot;&quot;</span><span class="p">;</span><span class="nx">ag</span><span class="o">+=</span><span class="s2">&quot;&quot;</span><span class="p">;</span><span class="kd">var</span> <span class="nx">aj</span><span class="o">=</span><span class="p">{};</span><span class="k">if</span><span class="p">(</span><span class="nx">af</span><span class="o">&amp;&amp;</span><span class="k">typeof</span> <span class="nx">af</span><span class="o">===</span><span class="nx">r</span><span class="p">){</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">al</span> <span class="k">in</span> <span class="nx">af</span><span class="p">){</span><span class="nx">aj</span><span class="p">[</span><span class="nx">al</span><span class="p">]</span><span class="o">=</span><span class="nx">af</span><span class="p">[</span><span class="nx">al</span><span class="p">]}}</span><span class="nx">aj</span><span class="p">.</span><span class="nx">data</span><span class="o">=</span><span class="nx">ab</span><span class="p">;</span><span class="nx">aj</span><span class="p">.</span><span class="nx">width</span><span class="o">=</span><span class="nx">ae</span><span class="p">;</span><span class="nx">aj</span><span class="p">.</span><span class="nx">height</span><span class="o">=</span><span class="nx">ag</span><span class="p">;</span><span class="kd">var</span> <span class="nx">am</span><span class="o">=</span><span class="p">{};</span><span class="k">if</span><span class="p">(</span><span class="nx">ad</span><span class="o">&amp;&amp;</span><span class="k">typeof</span> <span class="nx">ad</span><span class="o">===</span><span class="nx">r</span><span class="p">){</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">ak</span> <span class="k">in</span> <span class="nx">ad</span><span class="p">){</span><span class="nx">am</span><span class="p">[</span><span class="nx">ak</span><span class="p">]</span><span class="o">=</span><span class="nx">ad</span><span class="p">[</span><span class="nx">ak</span><span class="p">]}}</span><span class="k">if</span><span class="p">(</span><span class="nx">Z</span><span class="o">&amp;&amp;</span><span class="k">typeof</span> <span class="nx">Z</span><span class="o">===</span><span class="nx">r</span><span class="p">){</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">ai</span> <span class="k">in</span> <span class="nx">Z</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">am</span><span class="p">.</span><span class="nx">flashvars</span><span class="o">!=</span><span class="nx">D</span><span class="p">){</span><span class="nx">am</span><span class="p">.</span><span class="nx">flashvars</span><span class="o">+=</span><span class="s2">&quot;&amp;&quot;</span><span class="o">+</span><span class="nx">ai</span><span class="o">+</span><span class="s2">&quot;=&quot;</span><span class="o">+</span><span class="nx">Z</span><span class="p">[</span><span class="nx">ai</span><span class="p">]}</span><span class="k">else</span><span class="p">{</span><span class="nx">am</span><span class="p">.</span><span class="nx">flashvars</span><span class="o">=</span><span class="nx">ai</span><span class="o">+</span><span class="s2">&quot;=&quot;</span><span class="o">+</span><span class="nx">Z</span><span class="p">[</span><span class="nx">ai</span><span class="p">]}}}</span><span class="k">if</span><span class="p">(</span><span class="nx">F</span><span class="p">(</span><span class="nx">Y</span><span class="p">)){</span><span class="kd">var</span> <span class="nx">an</span><span class="o">=</span><span class="nx">u</span><span class="p">(</span><span class="nx">aj</span><span class="p">,</span><span class="nx">am</span><span class="p">,</span><span class="nx">ah</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="nx">aj</span><span class="p">.</span><span class="nx">id</span><span class="o">==</span><span class="nx">ah</span><span class="p">){</span><span class="nx">w</span><span class="p">(</span><span class="nx">ah</span><span class="p">,</span><span class="kc">true</span><span class="p">)}</span><span class="nx">X</span><span class="p">.</span><span class="nx">success</span><span class="o">=</span><span class="kc">true</span><span class="p">;</span><span class="nx">X</span><span class="p">.</span><span class="nx">ref</span><span class="o">=</span><span class="nx">an</span><span class="p">}</span><span class="k">else</span><span class="p">{</span><span class="k">if</span><span class="p">(</span><span class="nx">aa</span><span class="o">&amp;&amp;</span><span class="nx">A</span><span class="p">()){</span><span class="nx">aj</span><span class="p">.</span><span class="nx">data</span><span class="o">=</span><span class="nx">aa</span><span class="p">;</span><span class="nx">P</span><span class="p">(</span><span class="nx">aj</span><span class="p">,</span><span class="nx">am</span><span class="p">,</span><span class="nx">ah</span><span class="p">,</span><span class="nx">ac</span><span class="p">);</span><span class="k">return</span><span class="p">}</span><span class="k">else</span><span class="p">{</span><span class="nx">w</span><span class="p">(</span><span class="nx">ah</span><span class="p">,</span><span class="kc">true</span><span class="p">)}}</span><span class="k">if</span><span class="p">(</span><span class="nx">ac</span><span class="p">){</span><span class="nx">ac</span><span class="p">(</span><span class="nx">X</span><span class="p">)}})}</span><span class="k">else</span><span class="p">{</span><span class="k">if</span><span class="p">(</span><span class="nx">ac</span><span class="p">){</span><span class="nx">ac</span><span class="p">(</span><span class="nx">X</span><span class="p">)}}},</span><span class="nx">switchOffAutoHideShow</span><span class="o">:</span><span class="kd">function</span><span class="p">(){</span><span class="nx">m</span><span class="o">=</span><span class="kc">false</span><span class="p">},</span><span class="nx">ua</span><span class="o">:</span><span class="nx">M</span><span class="p">,</span><span class="nx">getFlashPlayerVersion</span><span class="o">:</span><span class="kd">function</span><span class="p">(){</span><span class="k">return</span><span class="p">{</span><span class="nx">major</span><span class="o">:</span><span class="nx">M</span><span class="p">.</span><span class="nx">pv</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span><span class="nx">minor</span><span class="o">:</span><span class="nx">M</span><span class="p">.</span><span class="nx">pv</span><span class="p">[</span><span class="mi">1</span><span class="p">],</span><span class="nx">release</span><span class="o">:</span><span class="nx">M</span><span class="p">.</span><span class="nx">pv</span><span class="p">[</span><span class="mi">2</span><span class="p">]}},</span><span class="nx">hasFlashPlayerVersion</span><span class="o">:</span><span class="nx">F</span><span class="p">,</span><span class="nx">createSWF</span><span class="o">:</span><span class="kd">function</span><span class="p">(</span><span class="nx">Z</span><span class="p">,</span><span class="nx">Y</span><span class="p">,</span><span class="nx">X</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="nx">M</span><span class="p">.</span><span class="nx">w3</span><span class="p">){</span><span class="k">return</span> <span class="nx">u</span><span class="p">(</span><span class="nx">Z</span><span class="p">,</span><span class="nx">Y</span><span class="p">,</span><span class="nx">X</span><span class="p">)}</span><span class="k">else</span><span class="p">{</span><span class="k">return</span> <span class="kc">undefined</span><span class="p">}},</span><span class="nx">showExpressInstall</span><span class="o">:</span><span class="kd">function</span><span class="p">(</span><span class="nx">Z</span><span class="p">,</span><span class="nx">aa</span><span class="p">,</span><span class="nx">X</span><span class="p">,</span><span class="nx">Y</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="nx">M</span><span class="p">.</span><span class="nx">w3</span><span class="o">&amp;&amp;</span><span class="nx">A</span><span class="p">()){</span><span class="nx">P</span><span class="p">(</span><span class="nx">Z</span><span class="p">,</span><span class="nx">aa</span><span class="p">,</span><span class="nx">X</span><span class="p">,</span><span class="nx">Y</span><span class="p">)}},</span><span class="nx">removeSWF</span><span class="o">:</span><span class="kd">function</span><span class="p">(</span><span class="nx">X</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="nx">M</span><span class="p">.</span><span class="nx">w3</span><span class="p">){</span><span class="nx">y</span><span class="p">(</span><span class="nx">X</span><span class="p">)}},</span><span class="nx">createCSS</span><span class="o">:</span><span class="kd">function</span><span class="p">(</span><span class="nx">aa</span><span class="p">,</span><span class="nx">Z</span><span class="p">,</span><span class="nx">Y</span><span class="p">,</span><span class="nx">X</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="nx">M</span><span class="p">.</span><span class="nx">w3</span><span class="p">){</span><span class="nx">v</span><span class="p">(</span><span class="nx">aa</span><span class="p">,</span><span class="nx">Z</span><span class="p">,</span><span class="nx">Y</span><span class="p">,</span><span class="nx">X</span><span class="p">)}},</span><span class="nx">addDomLoadEvent</span><span class="o">:</span><span class="nx">K</span><span class="p">,</span><span class="nx">addLoadEvent</span><span class="o">:</span><span class="nx">s</span><span class="p">,</span><span class="nx">getQueryParamValue</span><span class="o">:</span><span class="kd">function</span><span class="p">(</span><span class="nx">aa</span><span class="p">){</span><span class="kd">var</span> <span class="nx">Z</span><span class="o">=</span><span class="nx">j</span><span class="p">.</span><span class="nx">location</span><span class="p">.</span><span class="nx">search</span><span class="o">||</span><span class="nx">j</span><span class="p">.</span><span class="nx">location</span><span class="p">.</span><span class="nx">hash</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="nx">Z</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="sr">/\?/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">Z</span><span class="p">)){</span><span class="nx">Z</span><span class="o">=</span><span class="nx">Z</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot;?&quot;</span><span class="p">)[</span><span class="mi">1</span><span class="p">]}</span><span class="k">if</span><span class="p">(</span><span class="nx">aa</span><span class="o">==</span><span class="kc">null</span><span class="p">){</span><span class="k">return</span> <span class="nx">L</span><span class="p">(</span><span class="nx">Z</span><span class="p">)}</span><span class="kd">var</span> <span class="nx">Y</span><span class="o">=</span><span class="nx">Z</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot;&amp;&quot;</span><span class="p">);</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">X</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span><span class="nx">X</span><span class="o">&lt;</span><span class="nx">Y</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span><span class="nx">X</span><span class="o">++</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="nx">Y</span><span class="p">[</span><span class="nx">X</span><span class="p">].</span><span class="nx">substring</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span><span class="nx">Y</span><span class="p">[</span><span class="nx">X</span><span class="p">].</span><span class="nx">indexOf</span><span class="p">(</span><span class="s2">&quot;=&quot;</span><span class="p">))</span><span class="o">==</span><span class="nx">aa</span><span class="p">){</span><span class="k">return</span> <span class="nx">L</span><span class="p">(</span><span class="nx">Y</span><span class="p">[</span><span class="nx">X</span><span class="p">].</span><span class="nx">substring</span><span class="p">((</span><span class="nx">Y</span><span class="p">[</span><span class="nx">X</span><span class="p">].</span><span class="nx">indexOf</span><span class="p">(</span><span class="s2">&quot;=&quot;</span><span class="p">)</span><span class="o">+</span><span class="mi">1</span><span class="p">)))}}}</span><span class="k">return</span><span class="s2">&quot;&quot;</span><span class="p">},</span><span class="nx">expressInstallCallback</span><span class="o">:</span><span class="kd">function</span><span class="p">(){</span><span class="k">if</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="kd">var</span> <span class="nx">X</span><span class="o">=</span><span class="nx">c</span><span class="p">(</span><span class="nx">R</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="nx">X</span><span class="o">&amp;&amp;</span><span class="nx">l</span><span class="p">){</span><span class="nx">X</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">.</span><span class="nx">replaceChild</span><span class="p">(</span><span class="nx">l</span><span class="p">,</span><span class="nx">X</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="nx">Q</span><span class="p">){</span><span class="nx">w</span><span class="p">(</span><span class="nx">Q</span><span class="p">,</span><span class="kc">true</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="nx">M</span><span class="p">.</span><span class="nx">ie</span><span class="o">&amp;&amp;</span><span class="nx">M</span><span class="p">.</span><span class="nx">win</span><span class="p">){</span><span class="nx">l</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">display</span><span class="o">=</span><span class="s2">&quot;block&quot;</span><span class="p">}}</span><span class="k">if</span><span class="p">(</span><span class="nx">E</span><span class="p">){</span><span class="nx">E</span><span class="p">(</span><span class="nx">B</span><span class="p">)}}</span><span class="nx">a</span><span class="o">=</span><span class="kc">false</span><span class="p">}}}}();</span></div></pre></div>
          </td>
        </tr>
      </table>
  </div>

          </div>
        </div>
      </div>
    </div>

  </div>

<div class="frame frame-loading large-loading-area" style="display:none;" data-tree-list-url="/gimite/web-socket-js/tree-list/2ee87e910e92f2366d562efebbbec96349924df3" data-blob-url-prefix="/gimite/web-socket-js/blob/2ee87e910e92f2366d562efebbbec96349924df3">
  <img src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-64.gif?1329872005" height="64" width="64">
</div>

        </div>
      </div>
      <div class="context-overlay"></div>
    </div>

      <div id="footer-push"></div><!-- hack for sticky footer -->
    </div><!-- end of wrapper - hack for sticky footer -->

      <!-- footer -->
      <div id="footer" >
        
  <div class="upper_footer">
     <div class="container clearfix">

       <!--[if IE]><h4 id="blacktocat_ie">GitHub Links</h4><![endif]-->
       <![if !IE]><h4 id="blacktocat">GitHub Links</h4><![endif]>

       <ul class="footer_nav">
         <h4>GitHub</h4>
         <li><a href="https://github.com/about">About</a></li>
         <li><a href="https://github.com/blog">Blog</a></li>
         <li><a href="https://github.com/features">Features</a></li>
         <li><a href="https://github.com/contact">Contact &amp; Support</a></li>
         <li><a href="https://github.com/training">Training</a></li>
         <li><a href="http://enterprise.github.com/">GitHub Enterprise</a></li>
         <li><a href="http://status.github.com/">Site Status</a></li>
       </ul>

       <ul class="footer_nav">
         <h4>Clients</h4>
         <li><a href="http://mac.github.com/">GitHub for Mac</a></li>
         <li><a href="http://windows.github.com/">GitHub for Windows</a></li>
         <li><a href="http://eclipse.github.com/">GitHub for Eclipse</a></li>
         <li><a href="http://mobile.github.com/">GitHub Mobile Apps</a></li>
       </ul>

       <ul class="footer_nav">
         <h4>Tools</h4>
         <li><a href="http://get.gaug.es/">Gauges: Web analytics</a></li>
         <li><a href="http://speakerdeck.com">Speaker Deck: Presentations</a></li>
         <li><a href="https://gist.github.com">Gist: Code snippets</a></li>

         <h4 class="second">Extras</h4>
         <li><a href="http://jobs.github.com/">Job Board</a></li>
         <li><a href="http://shop.github.com/">GitHub Shop</a></li>
         <li><a href="http://octodex.github.com/">The Octodex</a></li>
       </ul>

       <ul class="footer_nav">
         <h4>Documentation</h4>
         <li><a href="http://help.github.com/">GitHub Help</a></li>
         <li><a href="http://developer.github.com/">Developer API</a></li>
         <li><a href="http://github.github.com/github-flavored-markdown/">GitHub Flavored Markdown</a></li>
         <li><a href="http://pages.github.com/">GitHub Pages</a></li>
       </ul>

     </div><!-- /.site -->
  </div><!-- /.upper_footer -->

<div class="lower_footer">
  <div class="container clearfix">
    <!--[if IE]><div id="legal_ie"><![endif]-->
    <![if !IE]><div id="legal"><![endif]>
      <ul>
          <li><a href="https://github.com/site/terms">Terms of Service</a></li>
          <li><a href="https://github.com/site/privacy">Privacy</a></li>
          <li><a href="https://github.com/security">Security</a></li>
      </ul>

      <p>&copy; 2012 <span title="0.06186s from fe10.rs.github.com">GitHub</span> Inc. All rights reserved.</p>
    </div><!-- /#legal or /#legal_ie-->

      <div class="sponsor">
        <a href="http://www.rackspace.com" class="logo">
          <img alt="Dedicated Server" height="36" src="https://a248.e.akamai.net/assets.github.com/images/modules/footer/rackspaces_logo.png?1329521039" width="38" />
        </a>
        Powered by the <a href="http://www.rackspace.com ">Dedicated
        Servers</a> and<br/> <a href="http://www.rackspace.com/cloud">Cloud
        Computing</a> of Rackspace Hosting<span>&reg;</span>
      </div>
  </div><!-- /.site -->
</div><!-- /.lower_footer -->

      </div><!-- /#footer -->

    

<div id="keyboard_shortcuts_pane" class="instapaper_ignore readability-extra" style="display:none">
  <h2>Keyboard Shortcuts <small><a href="#" class="js-see-all-keyboard-shortcuts">(see all)</a></small></h2>

  <div class="columns threecols">
    <div class="column first">
      <h3>Site wide shortcuts</h3>
      <dl class="keyboard-mappings">
        <dt>s</dt>
        <dd>Focus site search</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>?</dt>
        <dd>Bring up this help dialog</dd>
      </dl>
    </div><!-- /.column.first -->

    <div class="column middle" style='display:none'>
      <h3>Commit list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selection down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selection up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>c <em>or</em> o <em>or</em> enter</dt>
        <dd>Open commit</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>y</dt>
        <dd>Expand URL to its canonical form</dd>
      </dl>
    </div><!-- /.column.first -->

    <div class="column last js-hidden-pane" style='display:none'>
      <h3>Pull request list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selection down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selection up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>o <em>or</em> enter</dt>
        <dd>Open issue</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> enter</dt>
        <dd>Submit comment</dd>
      </dl>
    </div><!-- /.columns.last -->

  </div><!-- /.columns.equacols -->

  <div class="js-hidden-pane" style='display:none'>
    <div class="rule"></div>

    <h3>Issues</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selection down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selection up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>x</dt>
          <dd>Toggle selection</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open issue</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> enter</dt>
          <dd>Submit comment</dd>
        </dl>
      </div><!-- /.column.first -->
      <div class="column last">
        <dl class="keyboard-mappings">
          <dt>c</dt>
          <dd>Create issue</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>l</dt>
          <dd>Create label</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>i</dt>
          <dd>Back to inbox</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>u</dt>
          <dd>Back to issues</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>/</dt>
          <dd>Focus issues search</dd>
        </dl>
      </div>
    </div>
  </div>

  <div class="js-hidden-pane" style='display:none'>
    <div class="rule"></div>

    <h3>Issues Dashboard</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selection down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selection up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open issue</dd>
        </dl>
      </div><!-- /.column.first -->
    </div>
  </div>

  <div class="js-hidden-pane" style='display:none'>
    <div class="rule"></div>

    <h3>Network Graph</h3>
    <div class="columns equacols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt><span class="badmono">←</span> <em>or</em> h</dt>
          <dd>Scroll left</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">→</span> <em>or</em> l</dt>
          <dd>Scroll right</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">↑</span> <em>or</em> k</dt>
          <dd>Scroll up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">↓</span> <em>or</em> j</dt>
          <dd>Scroll down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>t</dt>
          <dd>Toggle visibility of head labels</dd>
        </dl>
      </div><!-- /.column.first -->
      <div class="column last">
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">←</span> <em>or</em> shift h</dt>
          <dd>Scroll all the way left</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">→</span> <em>or</em> shift l</dt>
          <dd>Scroll all the way right</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">↑</span> <em>or</em> shift k</dt>
          <dd>Scroll all the way up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">↓</span> <em>or</em> shift j</dt>
          <dd>Scroll all the way down</dd>
        </dl>
      </div><!-- /.column.last -->
    </div>
  </div>

  <div class="js-hidden-pane" >
    <div class="rule"></div>
    <div class="columns threecols">
      <div class="column first js-hidden-pane" >
        <h3>Source Code Browsing</h3>
        <dl class="keyboard-mappings">
          <dt>t</dt>
          <dd>Activates the file finder</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>l</dt>
          <dd>Jump to line</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>w</dt>
          <dd>Switch branch/tag</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>y</dt>
          <dd>Expand URL to its canonical form</dd>
        </dl>
      </div>
    </div>
  </div>

  <div class="js-hidden-pane" style='display:none'>
    <div class="rule"></div>
    <div class="columns threecols">
      <div class="column first">
        <h3>Browsing Commits</h3>
        <dl class="keyboard-mappings">
          <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> enter</dt>
          <dd>Submit comment</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>escape</dt>
          <dd>Close form</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>p</dt>
          <dd>Parent commit</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o</dt>
          <dd>Other parent commit</dd>
        </dl>
      </div>
    </div>
  </div>

  <div class="js-hidden-pane" style='display:none'>
    <div class="rule"></div>
    <h3>Notifications</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selection down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selection up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open notification</dd>
        </dl>
      </div><!-- /.column.first -->

      <div class="column second">
        <dl class="keyboard-mappings">
          <dt>e <em>or</em> shift i <em>or</em> y</dt>
          <dd>Mark as read</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift m</dt>
          <dd>Mute thread</dd>
        </dl>
      </div><!-- /.column.first -->
    </div>
  </div>

</div>

    <div id="markdown-help" class="instapaper_ignore readability-extra">
  <h2>Markdown Cheat Sheet</h2>

  <div class="cheatsheet-content">

  <div class="mod">
    <div class="col">
      <h3>Format Text</h3>
      <p>Headers</p>
      <pre>
# This is an &lt;h1&gt; tag
## This is an &lt;h2&gt; tag
###### This is an &lt;h6&gt; tag</pre>
     <p>Text styles</p>
     <pre>
*This text will be italic*
_This will also be italic_
**This text will be bold**
__This will also be bold__

*You **can** combine them*
</pre>
    </div>
    <div class="col">
      <h3>Lists</h3>
      <p>Unordered</p>
      <pre>
* Item 1
* Item 2
  * Item 2a
  * Item 2b</pre>
     <p>Ordered</p>
     <pre>
1. Item 1
2. Item 2
3. Item 3
   * Item 3a
   * Item 3b</pre>
    </div>
    <div class="col">
      <h3>Miscellaneous</h3>
      <p>Images</p>
      <pre>
![GitHub Logo](/images/logo.png)
Format: ![Alt Text](url)
</pre>
     <p>Links</p>
     <pre>
http://github.com - automatic!
[GitHub](http://github.com)</pre>
<p>Blockquotes</p>
     <pre>
As Kanye West said:

> We're living the future so
> the present is our past.
</pre>
    </div>
  </div>
  <div class="rule"></div>

  <h3>Code Examples in Markdown</h3>
  <div class="col">
      <p>Syntax highlighting with <a href="http://github.github.com/github-flavored-markdown/" title="GitHub Flavored Markdown" target="_blank">GFM</a></p>
      <pre>
```javascript
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
```</pre>
    </div>
    <div class="col">
      <p>Or, indent your code 4 spaces</p>
      <pre>
Here is a Python code example
without syntax highlighting:

    def foo:
      if not bar:
        return true</pre>
    </div>
    <div class="col">
      <p>Inline code for comments</p>
      <pre>
I think you should use an
`&lt;addr&gt;` element here instead.</pre>
    </div>
  </div>

  </div>
</div>


    <div id="ajax-error-message">
      <span class="mini-icon mini-icon-exclamation"></span>
      Something went wrong with that request. Please try again.
      <a href="#" class="ajax-error-dismiss">Dismiss</a>
    </div>

    <div id="logo-popup">
      <h2>Looking for the GitHub logo?</h2>
      <ul>
        <li>
          <h4>GitHub Logo</h4>
          <a href="http://github-media-downloads.s3.amazonaws.com/GitHub_Logos.zip"><img alt="Github_logo" src="https://a248.e.akamai.net/assets.github.com/images/modules/about_page/github_logo.png?1315937507" /></a>
          <a href="http://github-media-downloads.s3.amazonaws.com/GitHub_Logos.zip" class="minibutton btn-download download">Download</a>
        </li>
        <li>
          <h4>The Octocat</h4>
          <a href="http://github-media-downloads.s3.amazonaws.com/Octocats.zip"><img alt="Octocat" src="https://a248.e.akamai.net/assets.github.com/images/modules/about_page/octocat.png?1315937507" /></a>
          <a href="http://github-media-downloads.s3.amazonaws.com/Octocats.zip" class="minibutton btn-download download">Download</a>
        </li>
      </ul>
    </div>

    
    <span id='server_response_time' data-time='0.06459' data-host='fe10'></span>
  </body>
</html>

