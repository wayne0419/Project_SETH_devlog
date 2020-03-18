---
layout: post
title:  "Week 10: Adjustment."
author: CheWei
---
My research topic is to build a program that can automatically extract/locate timestamps of highlights from video game stream recording.
This project is going to help a lot for game streamers on platforms like Twitch, Facebook Live, YouTube Gaming Live and Chinese plafrom like Douyu, and game related video content creators on YouTube or Bilibili.

This week, after last finish building a functional prototype web application of this project, I want to temporarily put away remaining web development tasks(ex: frontend) and come back to sharpen the core of the project, the highlight extractor itself.

Right now, there are some directions of adjustment that I plan to work on based on the performance of our highlight extractor from week 4's example

# 1. Highlight segment cut adjustment

From the week 4 experiment sample, it is easy to find out that some highlight segments' cut time is messy. They either start too late or end too early, and this largely affect the content.

So the first adjustment I made is to adjust the cutting time of each highlight segment.

After trying different combination, ex: (-15s ~ +15s), (-30s ~ +15s), (-30s ~ +10s)...etc

I decided to go with (-30s ~ +15s).

# 2. Transition frames between highligh segments

From the week 4 experiment sample, it is also easy to notice that there is no transition frame between each high segments, which make it difficult for users to know that highlight segment has switched. 

So I implemment some functions to automatically insert transition frames between highlight segments.

During my adjusement process, I faced with a problem.

After I concaatenate the whole highlight clips with transition frames inserted in between, I got this when try to open the highlight video:

![week10problem1.png](../images/week10/week10problem1.png "week10problem1.png")

After some googling, I find out this post

[https://stackoverflow.com/questions/46675809/moviepy-output-video-not-playable](https://stackoverflow.com/questions/46675809/moviepy-output-video-not-playable)

and thought that this may be caused by the resolution of my transition frame clips and the resolution of the highlight clips are different and not compatible.

So I adjust my code to allow clip concatenation fo different size video clips and instead get this issue:

!["week10problem1.gif"](../images/week10/week10issue.gif "week10issue.gif")


This is still caused by the different resolution between transition frame clips cand highlight clips.

So I decided to downsize my transition frame clip to be consistent with highlight clips:

{% highlight ruby %}
transition_clip.resize(original_video.size)
{% endhighlight %}

and it works as I want it to.

# 3. Dealing with highlight overlap problem
Also it is easy to notice that some highlights in the sample from week 4 experiment are duplicate, and this is caused by having multiple chat peak close together(maybe because that single highlight is really high).

So I write some code to deal with it.


# Result

After the three adjustments mentioned above, let's take a look at the comparison:

**VOD id: 563284208**

VOD length: 04:37:26

Highlight extraction period: 00:00:00 ~ 04:00:00

Highlight Timestamp: [download](../images/week-7-9/563284208_15_0:0:0-4:0:0_p95)
<br>

**Before adjustment**

<iframe width="560" height="315" src="https://www.youtube.com/embed/7lGzH82fbss" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br>
**After adjustment**

<iframe width="560" height="315" src="https://www.youtube.com/embed/L5DsrY1bIzI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>