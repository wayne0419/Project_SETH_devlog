---
layout: post
title:  "Week 5: Analysis On Last Experiment."
author: CheWei
---
My research topic is to build a program that can automatically extract/locate timestamps of highlights from video game stream recording.
This project is going to help a lot for game streamers on platforms like Twitch, Facebook Live, YouTube Gaming Live and Chinese plafrom like Douyu, and game related video content creators on YouTube or Bilibili.

This week, I first automate the whole plotting process shown last week so that I can analyze deeper into the experiment result.
Then work do some analysis on my experiment result in the last week.


# Finding threshold for highlight.
I experiment on different section length and try to find a good threshold of a highlight.

First I tried different section length from length = 15s, 30s and 45s.

Then I compute out the different percentile and average line to help decide which will be a good threshold.

Which will be something like this:

![plot](../images/week5/524306459_15_3:40:0-4:40:0.png "plot_15.png")
![plot](../images/week5/524306459_30_3:40:0-4:40:0.png "plot_30.png")
![plot](../images/week5/524306459_45_3:40:0-4:40:0.png "plot_45.png")

Acording to the section length = 15s version, I find out that:

13 highlights are above 95 percentile

24 extra highlights are above 85 percentile

26 extra highlights are above 75 percentile

Then I researched on the [Moviepu](https://zulko.github.io/moviepy/) library to try to make some automative highligh cuts.

This is a result that I use the section length = 15s and threshold = 95%, and for those chatlog peak that pass the threshold, I extract -15s ~ +15s.


<iframe width="640" height="360" src="https://www.youtube.com/embed/0jnpJvH5jFw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

