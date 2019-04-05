<!-- 





 **DO NOT EDIT THIS FILE.** Make changes to `_readme.md`, and that will be used to create this file -->





# UserScripts
Userscripts for automating / improving browser experience


## Instalation instructions
https://tampermonkey.net/faq.php#Q100
or
https://greasyfork.org/en

Many of the scripts depend on the All Pages script, it injects some global functions that might be used by other scripts, it needs to be installed first so it runs before the other ones

Quick Preview:

<!-- Preview table will be appended at the end of the document) -->

| Name / File | Description / Match |
|---|---|
| **Airbnb**<br>[airbnb.user.js](../master/airbnb.user.js "Airbnb") | Moves the calendar to the top of the page to be able to see availability easily<br>If you add &loadCals=1 to the url, it will load all the links in the 'rooms' array,<br>and clone their calendars into the main page to have them all in one<br>Also highlights todays date on all of them, showing green for available<br>and red for unavailable<br>_Match:_<br>``https://www.airbnb.com/rooms/*``
| **All Pages**<br>[all_pages.user.js](../master/all_pages.user.js "All Pages") | adds global functions/variables, other scripts depend on these<br>_Match:_<br>``http://*/*``<br>``https://*/*``
| **Code Signals**<br>[code_signals.user.js](../master/code_signals.user.js "Code Signals") | Run code when F5 is pressed, prevent reload, and handle how output is displayed<br>Uses waitFor function from All Pages script<br>_Match:_<br>``https://app.codesignal.com/*``
| **Ebay**<br>[ebay.user.js](../master/ebay.user.js "Ebay") | Modifications to pages in ebay, filtering out results, loading delivery dates for items in results page, etc<br>_Match:_<br>``https://www.ebay.com/sch/*``<br>``https://www.ebay.com/itm/*``<br>``https://pay.ebay.com/*``
| **Gmail Reload Lost Page**<br>[gmail_reload_lost_page.user.js](../master/gmail_reload_lost_page.user.js "Gmail Reload Lost Page") | Reloads tabs that were opened from another gmail window and lost reference to it and now display nothing\.<br>Redirects them to a new url that works, matching the email ID<br>This could be used as a bookmarklet instead as well, just using the redirection without checking for when to run it and doing it manually as needed<br>This uses a lot of ram, since each tab reloads a whole new Gmail page instead of all referencing to one \(as expected, but keep it in mind\)<br>_Match:_<br>``https://mail.google.com/?ui=2&view=btop*``
| **Google Doc Mirror**<br>[google_doc_mirror.user.js](../master/google_doc_mirror.user.js "Google Doc Mirror") | Mirrors the content of the google doc in a new window\. If the window is clicked the whole content is selected so it can be copied easily<br>_Match:_<br>``https://docs.google.com/document/d/*``
| **Google Keep**<br>[google_keep.user.js](../master/google_keep.user.js "Google Keep") | Additional functionality and UI changes for Google Keep<br>_Match:_<br>``https://keep.google.com/*``
| **Google Keep Backup**<br>[google_keep_backup.user.js](../master/google_keep_backup.user.js "Google Keep Backup") | Deselects all products and selects Google Keep to back it up<br>_Match:_<br>``https://takeout.google.com/settings/takeout``<br>``https://takeout.google.com/settings/takeout/``<br>``https://bitly.com/a/warning?hash=2QQtLmu*``
| **Google Sheets Scroll**<br>[google_sheets_scroll.user.js](../master/google_sheets_scroll.user.js "Google Sheets Scroll") | Scroll to certain position when google sheet loads<br>_Match:_<br>``https://docs.google.com/spreadsheets/d/1vctvEcsYrLRACOhMfd9ThbRTbVTmZGwD9p5qIcQNBwQ/*``
| **HackerRank/FireIO**<br>[hackerrank_firecode.user.js](../master/hackerrank_firecode.user.js "HackerRank/FireIO") | Run code when F5 is pressed, prevent reload, and handle how output is displayed<br>Uses waitFor function from All Pages script<br>_Match:_<br>``https://www.hackerrank.com/*``<br>``https://www.firecode.io/problems/index``
| **Instant Login**<br>[instant_login.user.js](../master/instant_login.user.js "Instant Login") | Automates login forms to log in automatically to pages\.<br>I use it in conjunction with a password manager \(LastPass\),<br>and it clicks log in buttons after LastPass fills up the required fields<br>Uses WaitFor function defined in All Pages script<br>_Match:_<br>``http://*/*``<br>``https://*/*``
| **Keep Session Alive**<br>[keep_session_alive.user.js](../master/keep_session_alive.user.js "Keep Session Alive") | Prevents session ending<br>_Match:_<br>``https://www.53.com/fifththird/html/session-timeout-warning-update.html``<br>``https://www.53.com/fifththird/html/session-timeout-warning.html``<br>``https://*.chase.com/*``<br>``https://*.discover.com/*``<br>``https://online.americanexpress.com/*``<br>``https://creditwise.capitalone.com/*``<br>``https://my.lendingtree.com/*``<br>``https://wwws.mint.com/*``<br>``https://online.penfed.org/PenFedOnline/*``<br>``https://www.quizzle.com/*``<br>``https://tcfbank.com/*``<br>``https://digitalbanking.tcfbank.com/*``<br>``https://secure.creditsesame.com/*``<br>``https://services1.capitalone.com/*``<br>``https://services2.capitalone.com/*``<br>``https://secure.bankofamerica.com/*``<br>``https://myaccounts.capitalone.com/*``
| **Life Countdown**<br>[life_countdown.user.js](../master/life_countdown.user.js "Life Countdown") | adds a simple countdown to the bottom corner of every page, that counts down how many years, months, days, hours, minutes, seconds until a specified date<br>_Match:_<br>``http://*/*``<br>``https://*/*``
| **OneTab**<br>[onetab.user.js](../master/onetab.user.js "OneTab") | additions to the OneTab 'share as website' page<br>_Match:_<br>``https://www.one-tab.com/page/*``
| **Pomodoro**<br>[pomodoro.user.js](../master/pomodoro.user.js "Pomodoro") | At every 25, or 55 minutes in each hour, it will add a black modal with a 5 minute timer to cover all webpages<br>If the modal is clicked, it will dissapear briefly, it will also open a google keep TO\-DO list<br>_Match:_<br>``http://*/*``<br>``https://*/*``
| **Sprint reload until chat**<br>[sprint_reload_until_chat.user.js](../master/sprint_reload_until_chat.user.js "Sprint reload until chat") | \-<br>_Match:_<br>``https://www.sprint.com/*``
| **Stackoverflow**<br>[stackoverflow.user.js](../master/stackoverflow.user.js "Stackoverflow") | Remove language / topic from title so it won't be cluttered<br>_Match:_<br>``https://stackoverflow.com/questions*``
| **Temp Scripts**<br>[temp.user.js](../master/temp.user.js "Temp Scripts") | Short/temporary scripts that having a separate page for each seems overkill<br>_Match:_<br>``http://*/*``<br>``https://*/*``
| **Youtube**<br>[youtube.user.js](../master/youtube.user.js "Youtube") | \-<br>_Match:_<br>``http://www.youtube.com/watch*``<br>``https://www.youtube.com/watch*``<br>``https://www.youtube.com/*``<br>``http://www.youtube.com/embed*``<br>``https://www.youtube.com/embed*``<br>``https://ycapi.org/*``
| **Youtube Continuous Play**<br>[youtube_continuous_play.user.js](../master/youtube_continuous_play.user.js "Youtube Continuous Play") | When playing in the background for a long time, youtube will eventually stop the video and<br>ask if we want to contininue playing\. This will click yes automatically when the dialog shows up\.<br>_Match:_<br>``https://www.youtube.com/watch*``

