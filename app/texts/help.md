#The charts app
##Usage
In this app you can visualize different JSON API data and store results of your work in your browser.
In future versions you'll also can save your chart suites in cloud storage and load them from it. 
Now you can load only one predefined sample suite. You also can start new suite from scratch.

**To add new chart to suite** click 'Add new chart' button and describe your chart's detail in 
appeared pop-up window. Then hit 'ok'. 

**To edit suite title** just double-click the title. 

**To edit already existing chart's details** go to full-scale page (by clicking the chart thumbnail)
and double-click the chart. 

**To save suite** click 'save' in suite section on left pane. 

**To load sample suite click** 'load' button on the same left pane and enter default suite URL 
which is `data/sample-suite.json`. 

**To load data source** hit 'set' button in data source section on top of left pane and enter
desired URL in opened popup. For sample suite use URL of GitHub public API, for example one 
of the following:

  * https://api.github.com/orgs/visionmedia/repos
  * https://api.github.com/orgs/bocoup/repos
  * https://api.github.com/orgs/zeromq/repos
  * https://api.github.com/users/zeromq/repos

##"Release" and author's notes

I created this app as something that can illustrate approaches of dealing with things that
can possible grow to a really big one. That's why I mostly focused on data operations then
on visualisations (I mostly used just default Highcarts settings). Then I tried to keep in mind
(or actually imagine) that I (and even more - not only I) will maintain this app for next few years.
That's why, for example, this readme written in markdown, not in HTML. Or that's why I tried to keep 
all files below 100 sloc and max complexity below 6. 

###Known bugs
  * Ooops, you can create chart but cannot to delete it. `=)` Only now I noticed it...

###Test task limitations.
1. There are a lot of things that I initially intended to implement but didn't have enough time:
  * multiple suites support
  * CSS3 animations
  * notifications (of wrong data format, for example, or of successful saving)
  * there still a lot of TODOs in the code... 
2. If you are really working on something that going to became big thing, then you have to write
tests but in this app there is no one (again, because of time limitation mostly)
3. I didn't even tried to run build scripts.
4. Responsiveness is not full because I used my own small 'grid system' instead of Bootstrap's 
or Foundation's (as far as I understand you hate it for some reason?)


**P.S.** I actually tried to figure out what I have to create in Friday's evening and then go to
sleep and this app came to me in dream. So I used my dream as a product requirements document. `=)` 
That's why it may looks little bit overhead for test task...

**P.P.S** It was actually my first experience with Backbone (I used our company's own 
frameworks before or Angular [an now I'm pretty sure that Backbone is better!]), Layout Manager and
Highcharts (I prefer D3 even though Highcharts is better for prototyping). So maybe I misunderstood
some conceptions. 









