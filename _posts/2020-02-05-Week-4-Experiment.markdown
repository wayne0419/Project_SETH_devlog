---
layout: post
title:  "Week 4: Experiment."
author: CheWei
---
My research topic is to build a program that can automatically extract/locate timestamps of highlights from video game stream recording.
This project is going to help a lot for game streamers on platforms like Twitch, Facebook Live, YouTube Gaming Live and Chinese plafrom like Douyu, and game related video content creators on YouTube or Bilibili.


This week, I work on an experiment of the method I am going to use in the project.


# Finding highlight of a video game stream recording through chatlog.
The data I am going to need for this project will be the streaming recording vieo, and its timestamped chalog.

By using the tool mentioned in last week's post, I gather the recording of [this stream recording](https://www.twitch.tv/videos/524306459?filter=archives&sort=time) and [its chatlog](../files/week4/524306459.log) as my experiment sample.

I write a python program to calculate the number of chats for every [15s](../files/week4/524306459_15.csv), [30s](../files/week4/524306459_30.csv), [60s](../files/week4/524306459_60.csv), [75s](../files/week4/524306459_75.csv), [90s](../files/week4/524306459_90.csv) period.

Which will be something like this:

![write-out](../images/week4/write-out_30.png "write-out_30.png")

Then, I manually mark down the highlight of this recording from 03:40:00 to 04:40:00.

Finally, I compare the two and try to find out some patterns.

Here is the graph result using period=30s number of chat data.

![result](../images/week4/section-30plot.png "section-30plot.png")

