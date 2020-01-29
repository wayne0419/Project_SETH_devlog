---
layout: post
title:  "Week 3: Stakeholder Interview and Dara Preparation."
author: CheWei
---
My research topic is to build a program that can automatically extract/locate timestamps of highlights from video game stream recording.
This project is going to help a lot for game streamers on platforms like Twitch, Facebook Live, YouTube Gaming Live and Chinese plafrom like Douyu, and game related video content creators on YouTube or Bilibili.


This week, I work on interviewing potential stakeholder of this projects and start preparing test and train data for the project.


# Stakeholder Interview
In previous post, I mentioned that the stakeholder of this project can be video game streamers and gameplay-related video content creators. <br>
Since I am not one of them and know not so much about the field, so I send interview emails to people of the field.<br>
These are the questions I ask about after a short introduction of who I am and what this project is about:

**Question 1. Can a tool of such a function help save your time during your video-editting workflow?**

**Question 2. How much percentage of time does it take to manually detect highlights from stream recording during your video-editting workflow?**

**Question 3. Is there any other aspect that is more time or effort consuming?**

**Question 4.**

**I plan to automate the process of detecting highlights by writing a program that analyzes the chatlog of stream recording. For example, a temporary increase in frequency of chatlines can  be detected as an occurence of highlight; multiple consecutive similar chatlines e.g. emoji spam, text spam(like: LUL, Pog, LMAO, ?, 666, 777...) can be detected as an occurrence of highlight.**

**Is there any kind of highlights that have no or opposite influence on chatlog and can possibly be neglected by this detection method?**
<br>

# Dara Preparation
The data I am going to need for this project will be the streaming recording vieo, and its timestamped chalog.

I start with finding ways to gather data from Twitch. 

To avoid reinventing the wheel, I research around the internet to see if there is any existing tool that can help me gather these two kinds of data.

Below are some of the results(many other good tools are not listed ):

## Twitch Stream Video Gathering
**1. [UnTwitch](https://untwitch.com)**

**2. [Twitch Leecher](https://github.com/Franiac/TwitchLeecher)**

## Twitch Stream ChatLog Gathering
**1. [Twitch Chat Downloader(tcd)](https://github.com/PetterKraabol/Twitch-Chat-Downloader)**

**2. [Twitch Clip Chat!](https://github.com/OgulcanCelik/twitch-clip-chat)**

**3. [Chatty](http://chatty.github.io/#features)**

**4. [twitch-chatlog](https://github.com/freaktechnik/twitch-chatlog)**

**5. [itch](https://github.com/bibby/itch)**

I experiment with [UnTwitch](https://untwitch.com) to download some clips, it is really easy to use.

For downloading Twitch chatlog, I finally decided to use [Twitch Chat Downloader(tcd)](https://github.com/PetterKraabol/Twitch-Chat-Downloader).

To use this tool, the first thing you have to do is to register a Twitch developer client ID.

To do this, you have to go to [https://dev.twitch.tv/console/apps/create](https://dev.twitch.tv/console/apps/create)

Fill in examples:
![Client_ID](../images/clientID "Client_ID")

Then follow the readme instruction of [Twitch Chat Downloader(tcd)](https://github.com/PetterKraabol/Twitch-Chat-Downloader), I successfully download some time-stamped chatlog:
![chatlog1](../images/chatlog1 "chatlog1")