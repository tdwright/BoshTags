// ==UserScript==
// @name          BoshTags!
// @namespace     https://github.com/tdwright/BoshTags
// @description   Detects boshtags and links them on Twitter
// @version       1.4
// @updateURL     https://raw.github.com/tdwright/BoshTags/master/boshtags.user.js
// @include       https://twitter.com/*
// ==/UserScript==

// a function that loads scripts from given sources and calls a callback function when finished loading the last
// attr: from http://stackoverflow.com/questions/2246901/how-can-i-use-jquery-in-greasemonkey-scripts-in-google-chrome
// which in turn is from http://erikvold.com/blog/index.cfm/2010/6/14/using-jquery-with-a-user-script
function addScripts (sources, callback) {
  for (var i = 0; i < sources.length; i++) {
    var script = document.createElement("script");
    script.setAttribute("src", sources[i]);
    if (i == sources.length - 1 && callback != null) {
      script.addEventListener('load', function() {
        var script = document.createElement("script");
        script.textContent = "(" + callback.toString() + ")();";
        document.body.appendChild(script);
      }, false);
    }
    document.body.appendChild(script);
  }
}

function prepareToBosh () {
  jQuery(document).ready(function() {  
    function linkBoshtags (jNode) {
      if (jNode.attr('boshed')=='true') return;
      var newContent = jNode.html().replace(/(\W|^)(\u273A(\w+))(?=\W|$)/g,"$1<a class='boshtag' href='https://twitter.com/#!/search/$2'>$2</a>");
      jNode.html(newContent);
      jNode.attr('boshed', 'true');
    } 
    // For the stream
    waitForKeyElements ("div.stream-container div.stream div.tweet p.js-tweet-text", linkBoshtags, false);
    // For single tweet pages
    waitForKeyElements ("div.permalink-tweet p.js-tweet-text", linkBoshtags, false);
  });
}

addScripts(
  [
    //"https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js", 
    "https://gist.github.com/raw/2625891/waitForKeyElements.js"
  ],
  prepareToBosh);