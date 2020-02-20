---
layout: post
title:  "Week 6: Interview."
author: CheWei
---
My research topic is to build a program that can automatically extract/locate timestamps of highlights from video game stream recording.
This project is going to help a lot for game streamers on platforms like Twitch, Facebook Live, YouTube Gaming Live and Chinese plafrom like Douyu, and game related video content creators on YouTube or Bilibili.

This week, I and honored to interview with three talented gameplay highlight video Youtube creators. Idle名字可以隨時改, ICKID, LunMeow Com

Below is the compiled version of the result of the interview:


## What is the complete workflow of creating a gameplay highlight video(like: step1.. step2...) ?

**Idle名字可以隨時改**<br>
Download VOD -> extract highlight -> combine together, and add some visual effect -> check the fluency -> subtitle -> check subtitle correctness -> add VFX for subtitle -> upload to Youtube, make poster, Youtube advertisement setting -> sleep

**LunMeow & ICKID**<br>
Watch VOD in 2X speed to extract highlight -> combine hilight -> subtitle -> VFX -> checkout correctness and fluency -> upload.<br>
Also if keeping note about timestamps of highlight while watching live streaming, can save  lots of time.

## What is the most important part for a gameplay highlight video to be popular(ex: post-editing, visual effect, "highness" of highlight) ?

**Idle名字可以隨時改**<br>
If the content of the original streaming is interesting itself, there will be more audience to watch the highlight video of that recording.<br>
If the content of the original streaming is boring like grinding materials, weapons, less people will watch the highlight video of that recording.<br>
So, I would say it depends on the popularity of the original stream content.

**LunMeow & ICKID**<br>
It depends on the type of the content of the original streaming. If the streaming is about advertising a new game, then it will be needed to make the highlight video more interesting by post-editing and VFX.<br>
Generally, for a highlight to be popular, post-editing, VFX, and "highness" of the highlight itself are all important.

## How long does it roughly take to create a gameplay highlight video?

**Idle名字可以隨時改**<br>
&lt;6hrs recording  ->  15 mins of highlight video(without subtitle) takes aobut 4hrs. Subtitle generally takes 1 hour<br>
&gt;7hrs recording  ->  16-20 mins of highlight video(without subtitle) takes aobut 5hrs. Subtitle generally takes >2 hours

**LunMeow & ICKID**<br>
3hrs recording -> 15mins takes about 4-5 hours

## Among the workflow of creating a gameplay highlight video, how much time and percentage does manually detecting & extracting highlight from stream recording take?

**Idle名字可以隨時改**<br>
About 70%, sometimes if the highlight material is enought, I may skip the rest of the recording.

**LunMeow & ICKID**<br>
20% - 30%

## Is there any other part among the workflow that takes more time than manually detecting & extracting highlight from stream recording? How much time and percentage does it take?

**Idle名字可以隨時改**<br>
Some recording may involve highlight that is associated with something that happens in previous recording, finding them out takes lots of time<br>
Translation of recording of foreigh languages also take extra time.

**LunMeow & ICKID**<br>
1. Finding correct music, and adsut the sound track: for fast paced game like Apex legned, I often have to adjust sound track to match  the temple of player's action in the video.<br>
2. Subtile: this takes largest amount of time among the whole video editing workflow. Especially when the streamer plays with other streamers, then a 3hr recording which used to take 4-5 hrs to create highlight video will rise to 6-7hrs to create highlight video.

## Suppose there exist a tool that you input a stream recording and it will automatically produce multiple highlight clips as material for you to use, will this tool save your time? How much percentage?

**Idle名字可以隨時改**<br>
Maybe, but if it negelect  some highlights, that will be annoying<br>
But if it does well, it can definitely save at least 50% of time of the whole workflow.

**LunMeow & ICKID**<br>
Can definitely save lots of time, but even if i get an automatically generated highlight lists, I will still go back to check each of them on the original VOD to make sure.

## Suppose this tool has three following functions, which one will help you the most?
## 1. produce a list of timestamp showing when highlight happens
## 2. produce multiple highlight clips, one highlight per clip
## 3. stick all highlight clips from function 2 and combine them into a long video?

**Idle名字可以隨時改**<br>
Function 1 is super helpful

**LunMeow & ICKID**<br>
I like the function 1+3 combo, this allows me to fast check the "highness" using function 3 and then use function 1 to go back to the original VOD tomake sure

## Suppose this tool allows you to set up some parameters to affect the output(ex: the threshold of "highness" of highlight ). What possible parameters may be useful?

**Idle名字可以隨時改**<br>
Not think of any.

**LunMeow & ICKID**<br>
Text filter of chat.<br>
This allows creators to first use the tool and look at the no-filter generated highlight clips, remember those text in chat that cause outliers and then reuse the tool again with text-filter to filter out those outlier-causing chat text, and in turn generate better quality highlight clips material.

## Suppose this tool capture highlight by analyzing conditions of chat (ex: temporary burst increase in chat amount, text or emoji spam). Is three any kind of highlight that may be neglected? Or any kind of outliers?

**Idle名字可以隨時改 & LunMeow & ICKID**<br>
Possible neglected highlights


## For streamers with much less audience in chat room, will it be difficult for this tool to detect highlight for their stream recording?

**Idle名字可以隨時改**<br>
Yes

**LunMeow & ICKID**<br>
Yes

## I heard that some streaming software support latency function(ex: 30s, 60s). Will this screw up the time line in chat log?

**Idle名字可以隨時改**<br>
Not a big deal, most streamers will try to minimize the latency.

**LunMeow & ICKID**<br>
That will not be an issue because the chat's timeline will still be based on the timeline of the stream video.<br>
It is like both chat and the video are lated together, then they compensate.
The only issue will be when streamers  talik in chat.
