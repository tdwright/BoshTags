// ==UserScript==
// @name          BoshTags!
// @namespace     https://github.com/tdwright/BoshTags
// @description	  Detects boshtags and links them on Twitter
// @version		  1.0
// @include       https://twitter.com/*
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @require https://gist.github.com/raw/2625891/waitForKeyElements.js
// ==/UserScript==

function linkBoshtags (jNode) {
	if (jNode.attr('boshed')=='true') return;
	var newContent = jNode.html().replace(/(\W)(\u273A(\w+))(\W)/g,"$1<a class='boshtag' href='https://twitter.com/#!/search/$2'>$2</a>$4");
	jNode.html(newContent);
	jNode.attr('boshed', 'true');
}

waitForKeyElements ("div.stream-container div.stream div.tweet p.js-tweet-text", linkBoshtags, false);