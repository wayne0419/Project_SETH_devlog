---
layout: post
title:  "Week 7-9: Build Web Application."
author: CheWei
---
My research topic is to build a program that can automatically extract/locate timestamps of highlights from video game stream recording.
This project is going to help a lot for game streamers on platforms like Twitch, Facebook Live, YouTube Gaming Live and Chinese plafrom like Douyu, and game related video content creators on YouTube or Bilibili.

This week, I lean and use python flask + ngnix + gunicorn + AWS ec2 to build a web application of this project.

This is the link to the web application:
[http://ec2-3-16-91-218.us-east-2.compute.amazonaws.com/](http://ec2-3-16-91-218.us-east-2.compute.amazonaws.com/)

# Learn, build and debug
After some research, I decided to use python flask as the backend of the application because of its easy to learn and use.

To learn how to use python flask to receive input from users, I learn from these three tutorials:

[https://www.freecodecamp.org/news/how-to-build-a-web-application-using-flask-and-deploy-it-to-the-cloud-3551c985e492/](https://www.freecodecamp.org/news/how-to-build-a-web-application-using-flask-and-deploy-it-to-the-cloud-3551c985e492/)

[https://opentechschool.github.io/python-flask/core/form-submission.html](https://opentechschool.github.io/python-flask/core/form-submission.html)

[https://pythonspot.com/flask-web-forms/](https://pythonspot.com/flask-web-forms/)

Then I start coding my flask application code. After finishing my code, I want to deploy it onto AWS ec2 instance. This is the first tutorial I followed:

[https://www.datasciencebytes.com/bytes/2015/02/24/running-a-flask-app-on-aws-ec2/](https://www.datasciencebytes.com/bytes/2015/02/24/running-a-flask-app-on-aws-ec2/)

When I followed to step 1.2 and tried to connect to my AWS ec2 instance, I meet a "Permission denied(publickey)" problem.
![Problem0.png](../images/week-7-9/Problem0.png "Problem0.png")

And after some googling, I find this post helpful and solve my problem: 

[https://stackoverflow.com/questions/18551556/permission-denied-publickey-when-ssh-access-to-amazon-ec2-instance](https://stackoverflow.com/questions/18551556/permission-denied-publickey-when-ssh-access-to-amazon-ec2-instance)


This tutorial uses python flask + apache as its deploy options, but I find the tutorial becomes blurry and difficult to catch up after step 3.3.

So I switched to another tutorial, which uses python flask + ngnix + gunicorn.

[https://chrisdtran.com/2017/deploy-flask-on-ec2/](https://chrisdtran.com/2017/deploy-flask-on-ec2/)

Then, after connecting to my ec2 instance, at step "Create Simple Flask App", I want to setup my python environment, and when I tried to "pip install" some python modules, I faced "locale error: unsupported locale setting"

![Problem1.png](../images/week-7-9/Problem1.png "Problem1.png")

Then I go back to google again. I first find this post: 

[https://stackoverflow.com/a/36257050](https://stackoverflow.com/a/36257050)

but it did not work.

Then I found this post, which solved my problem:

[https://stackoverflow.com/questions/36394101/pip-install-locale-error-unsupported-locale-setting](https://stackoverflow.com/questions/36394101/pip-install-locale-error-unsupported-locale-setting)

Among all the python modules I installed onto my ec2 instance, a module called "tcd" fail to be installed.

After another several googling, I found out that module is only supported by python3.7 and above but ec2 instance's python version is 3.5.

I believed that it was the cause. So I followed this [tutorial](https://websiteforstudents.com/installing-the-latest-python-3-7-on-ubuntu-16-04-18-04/) to install python3.7 onto my ec2 instance. And my guess was right, the problem got solved.

Then, I uploaded my web application code to my ec2 instance and tried to run it, but get a "UnicodeDecodeError: 'ascii' codec can't decode byte 0xe9 in position 12: ordinal not in range(128)" error instead.

![Problem3.png](../images/week-7-9/Problem3.png "Problem3.png")

Again, another googling time, and found this post:

[https://github.com/Diaoul/subliminal/issues/186#issuecomment-14306170](https://github.com/Diaoul/subliminal/issues/186#issuecomment-14306170)

After following what he said, I got another error: AttributeError: 'module' object has no attribute 'setdefaultencoding'

After another resaerching, I found out that setdefaultencoding was deprecated after python3, so that means I have to find another solution.

Then another series of googling, I found this post helpful and solved my problem:

[https://stackoverflow.com/a/844443](https://stackoverflow.com/a/844443)

Now, my application is successfully setup. So, it is time for testing....

I tried a 4 hour long Twitch VOD and then, then got either a "502 Bad Gateway" or "504 Gateway Time-out"
![Problem4.png](../images/week-7-9/Problem4.png "Problem4.png")
![Problem4-0.png](../images/week-7-9/Problem4-0.png "Problem4-0.png")
![Problem4-01.png](../images/week-7-9/Problem4-01.png "Problem4-01.png")

After some research, I knew that this was caused my gunicorn, and ngnix's default timeout setting.

So I googled some ways to fix this, and I found this post interesting:
[https://serverfault.com/a/627746](https://serverfault.com/a/627746)

But I made a mistake here, I mistake "/etc/nginx/sites-available/example.com" as the configuration file of ngnix while "/etc/nginx/nginx.conf" is the correct one, which I found out long later at this post:
[https://serverfault.com/questions/777749/how-to-disable-timeout-for-nginx/777753](https://serverfault.com/questions/777749/how-to-disable-timeout-for-nginx/777753)

After I found out that I edit the wrong configuration file. I tried to edit the correct ngnix config file, and then "sudo service nginx reload".

Then I goet error: "Nginx: Job for nginx.service failed because the control process exited"

Then I found two posts about how  to solve this and followed what they said:

[https://www.digitalocean.com/community/questions/can-t-start-nginx-job-for-nginx-service-failed](https://www.digitalocean.com/community/questions/can-t-start-nginx-job-for-nginx-service-failed)

[https://stackoverflow.com/questions/35868976/nginx-job-for-nginx-service-failed-because-the-control-process-exited](https://stackoverflow.com/questions/35868976/nginx-job-for-nginx-service-failed-because-the-control-process-exited)

So I type to command line:

{% highlight ruby %}
sudo fuser -k 80/tcp

sudo fuser -k 443/tcp
{% endhighlight %}

Then my ec2 instance never response to anything................

So I terminated it and redo everything again.....correctly

This time it works.

So now I have a web application that can generate highlight-timestamp, how about generating hilight-clip?

So I researched on some tools that I can use to download twitch VOD through command line, most of them no longer works:

[https://github.com/ihabunek/twitch-dl](https://github.com/ihabunek/twitch-dl)
[https://github.com/UgurKap/Twitch-Video-Downloader](https://github.com/UgurKap/Twitch-Video-Downloader)
[https://github.com/amiechen/twitch-batch-loader](https://github.com/amiechen/twitch-batch-loader)

So I also looked at twitch's API and tried some of them, but still  confused and stuck.
For example:
[https://dev.twitch.tv/docs/v5/reference/videos#get-video](https://dev.twitch.tv/docs/v5/reference/videos#get-video)
[https://dev.twitch.tv/docs/api/reference#get-videos](https://dev.twitch.tv/docs/api/reference#get-videos)
[https://api.twitch.tv/api/vods/553392894/access_token](https://api.twitch.tv/api/vods/553392894/access_token)
[https://api.twitch.tv/kraken/videos/553392894](https://api.twitch.tv/kraken/videos/553392894)
[https://vod-secure.twitch.tv/d2nvs31859zcd8/chunked/3-muted.ts](https://vod-secure.twitch.tv/d2nvs31859zcd8/chunked/3-muted.ts)

After some struggle, I found this work:
[https://youtube-dl.org/]https://youtube-dl.org/

Then I edit my code and the web application can now generate both timestamps and highlight-clips.

