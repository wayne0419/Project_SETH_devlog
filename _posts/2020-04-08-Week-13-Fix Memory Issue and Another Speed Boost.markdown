---
layout: post
title:  "Week 13: Fix Memory Issue & Another Speed Boost"
author: CheWei
---
My research topic is to build a program that can automatically extract/locate timestamps of highlights from video game stream recording.
This project is going to help a lot for game streamers on platforms like Twitch, Facebook Live, YouTube Gaming Live and Chinese plafrom like Douyu, and game related video content creators on YouTube or Bilibili.

At the begiinning of this week, I found out a serious backend bug in my web application so that I have to temporarily stop front end work to fix it.

# 1. Memory Issue

While I was testing some twitch recording video(above 5 hrs long), it will leads to my 1-GB-memory ec2 server running out of memory, and getting errors like:

{% highlight shell %}
TracebackError: Cannot allocate memory.
{% endhighlight %}

After some researching, I found this post:

[https://zulko.github.io/moviepy/getting_started/efficient_moviepy.html](https://zulko.github.io/moviepy/getting_started/efficient_moviepy.html)

And knew that this memory issue was caused by the large overhead memory usage of the [MoviePy](https://zulko.github.io/moviepy/index.html) library when dealing with long video files.

So after some reasearch, I found that I have to give up [MoviePy](https://zulko.github.io/moviepy/index.html) and use another lower-level media editing library, which is [FFmpeg](https://www.ffmpeg.org/).

So the first thing of this week is to replace [MoviePy](https://zulko.github.io/moviepy/index.html) with [FFmpeg](https://www.ffmpeg.org/).

And since [FFmpeg](https://www.ffmpeg.org/) is more low-level and give lots of freedom of media editting, it also means that lots of settings of  my video clips have to be taken care carefully.

The most time-consuming example will be concatenation of multiple video clips...

Before  concatenation, all the video clips have to match in these settings(I knew this after taking some of the pain):

1. framerate(fps)

2. resolution(width x height)

3. codec, how they get encoded, ex: libx264

4. tbn, time base

5. same things about audio, so that means I also have to bind blank audio stream to my transition clip

If one of them does not match, the concatenated output will go weired, ex: no audio, slow-motion, weired fps... etc

After figure out and dealing with all these stuff, the web application finally will not run out of its 1-GB memory:

Here is a memory-usage snapshot at its peak usage:

![week13try1-4.png](../images/week13/week13try1-4.png "week13try1-4.png")

However, another problem arise, now the speed of the web application drops.

Last week, I mentioned that the web application can extracts 1080p highlight clip from a 4-hrs-long recording using about only 15 mins.

But now, it takes 42 minutes to generate a 720p one from same recording.


# 2. Another Speed up of the Highlight Extractor

To again speed up the extractor, over the week, I took three measures:


## 1. Move to a better ec2 server, t2.micro(1 CPU, 1 GB memory) => t2.medium(2 CPU, 4 GB memory)

[micro server](http://ec2-3-16-91-218.us-east-2.compute.amazonaws.com)

Takes 42 minutes to generate 720p highlight clips from 5-hrs-long recording.

[medium server](http://ec2-3-15-195-168.us-east-2.compute.amazonaws.com)

Takes 22 minutes to generate 720p highlight clips from 5-hrs-long recording.

The speed get boosted by two times, looks good...

## 2. Multi-threading/multi-processing

After switch to a server that gets two CPUs.

I use two process to concatenate first-half and second-half of the video-clips simultaneously and then join together to build the final one.

But the effectivity is low.

It even takes more time.


## 3. Redesign the whole video concatenation algorithm to avoid as much video re-encoding as possible

After some researching about concatenating video with ffmpeg, I found this post:

[https://stackoverflow.com/questions/7333232/how-to-concatenate-two-mp4-files-using-ffmpeg](https://stackoverflow.com/questions/7333232/how-to-concatenate-two-mp4-files-using-ffmpeg)

And figured out that most time-consuming tasks of concatenation is re-encoding videos.

So if I can avoid encoding videos, then it might speed up my application.

Before I thought about this I used the first method of the above post to concatenate, which basically encode every video clips.

After I re-desigin my algorithm, my program only re-encode transition clips to fit with downloaded highlight clips and then use the second method of the post to concatenate.

The result is that right now, it is superrrrrrrrrrrr fastttttttttttttttttt.

[micro server](http://ec2-3-16-91-218.us-east-2.compute.amazonaws.com)

Takes 5 minutes to generate 720p highlight clips from 5-hrs-long recording.

[medium server](http://ec2-3-15-195-168.us-east-2.compute.amazonaws.com)

Takes 4 minutes to generate 720p highlight clips from 5-hrs-long recording.

The only issue with the micro-server is that if the generate highlight-clip is too large, the server does not have enough memory to read it and aloow user to download, so I finally still decide to move to medium server... say goodbye to micro server :(.


# 3. Next Step

Next week, I will base on the jQuerry and AJAX knowledge I learn to finish the frontend of loading page and download page.