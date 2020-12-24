---
layout: post
title:  "Week 12: Boosting Extractor Speed + FrontEnd Part2 Preparation"
author: CheWei
---
My research topic is to build a program that can automatically extract/locate timestamps of highlights from video game stream recording.
This project is going to help a lot for game streamers on platforms like Twitch, Facebook Live, YouTube Gaming Live and Chinese plafrom like Douyu, and game related video content creators on YouTube or Bilibili.

This week, I work on two things

# 1. Learn jQuery

After connecting last week's front end progress with backend. I start working on second part of frontend: loading page and download page.

To implemment a sophisticated loading screen that not only have a spinning circle but also can tell users the progress of a highlight extraction process, 

I decided to learn how to use jQuery and especially the AJAX(asynchronous javascript and xml) stuff.

This is the main links where I learn Bootstrap from:

[https://www.tutorialrepublic.com/jquery-tutorial/](https://www.tutorialrepublic.com/jquery-tutorial/)


# 2. Speed up the highlight extractor

After some research and redesign, I adjust my extractor's algorithm to let it download only highlight sections from the original video.

This change highly speed up the extractor.

Right now, an 1080p highlight clip from a 4.5 hrs long stream recording will take only about 15 minutes to extract and build clips

Here is the result:

[http://ec2-3-16-91-218.us-east-2.compute.amazonaws.com/](http://ec2-3-16-91-218.us-east-2.compute.amazonaws.com/)

# 3. Next Step

Next week, I will base on the jQuerry and AJAX knowledge I learn to finish the frontend of loading page and download page.