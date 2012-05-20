Boshtags
===
Hashtags are weak. Boshtags are strong.

Install [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/), then [boshtags.user.js](https://raw.github.com/tdwright/BoshTags/master/boshtags.user.js), then bosh.

&#10042;bosh &#10042;win &#10042;betterthanhashtags

BoshKeys
---
I've also written an AutoHotKey HotString. This makes it really quick to bosh things.
* The simplest way to get it is to [download my executable](http://tdwright.co.uk/boshkeys.exe).
* Or, if you have AHK_L installed you can find [the script](https://raw.github.com/tdwright/BoshTags/master/boshkeys.ahk) in this repo. (It has to be [AHK_L](http://l.autohotkey.net/) because the boshmark is a unicode symbol.)
Once you've got it running, just type !b to insert a boshmark.

Todo
---
* ~~Currently only works in streams. Should add support for single-tweet pages.~~ Done as of v1.3
* ~~Doesn't pick up boshtags at the beginning or end of a tweet.~~ Done as of v1.2
* ~~Greedy regex is stopping subsequent (single space separated) boshtags.~~ Done as of v1.1