---
layout: post
title:  "Academic Research."
author: CheWei
---
My research topic is to build a program that can automatically extract/locate timestamps of highlights from video game stream recording.
This post is a list of the academic papers I think is relevant to my project.
# Most related papers

**1. Analysis and presentation of soccer highlights from digital video**
[source](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.50.24&rep=rep1&type=pdf)<br><br>
Extract highlight from soccer game recording through analysis of the video content. The analysis includes e recognition of prominent features of the game, tracking of ball, camera movement compensation for effective recognition, and construction of the panoramic views.

**2. EpicPlay: Crowd-sourcing Sports Video Highlights**
[source](https://dl.acm.org/doi/pdf/10.1145/2207676.2208622?casa_token=kq_cfE-kCgcAAAAA:XfKv81gD53ewTjb1ewFKNDArdm_krNMYFXYibQFpz5qBizeKGHAMWGlLTcEIG0Oqqkj7xi9xUnq7sg)<br><br>
Extract highlight of a sport game not by analyzing the content of the recorded video of it directly. Instead, take the time-stamped video of that sport game along with the time-stamped tweets during the game that have related hashtag (ex: #&lt;hometeam_name&gt;, #&lt;awayteam_name&gt;), and then find the timestamp of peak of these tweets and use these timestamps as identification of the highlight the video of that game.

**3. Semantic annotation of soccer videos: automatic highlights identification**
[source](https://s3.amazonaws.com/academia.edu.documents/30937904/10.1.1.100.4425.pdf?response-content-disposition=inline%3B%20filename%3DSemantic_annotation_of_soccer_videos_aut.pdf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWOWYYGZ2Y53UL3A%2F20200122%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20200122T153719Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=93d68865f1852cd3327c9d0976107680391794b6119460f5d34ad1d02403468c)<br><br>
Extract highlight of a soccer game video through a finite state machine model where state transition are triggered by the visual cues of ball’s movement, framed playfield zone, player’s position and uniform color.

**4. Adaptive Extraction of Highlights From a Sport Video Based on Excitement Modeling**
[source](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.468.8002&rep=rep1&type=pdf)<br><br>
A generic way to extract highlight from any kind of games. The model can be generic to all kinds of games because it does not rely on capturing and analyzing events in a game’s video, which varies with genre of games, and instead, it captures the segment where a human’s excitement is expected to increase according to Psychophysiology, which is on the other hand, generic to most human. For example, according to Psychophysiology, fast paced visual motion and intense audio often lead to expected increase in excitement.

**5. Automatic Extraction of Soccer Video Highlights Using a Combination of Motion and Audio Features**
[source](https://www.spiedigitallibrary.org/conference-proceedings-of-spie/5021/0000/Automatic-extraction-of-soccer-video-highlights-using-a-combination-of/10.1117/12.476291.short?SSO=1)<br><br>
Use audio peak analysis and motion intensity analysis to extract highlights from soccer game video.

**6. EXTRACT HIGHLIGHTS FROM BASEBALL GAME VIDEO WITH HIDDEN MARKOV MODELS**
[source](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=1038097)<br><br>
Extract highlight from baseball game video by capturing specific combos of scene shots that are mostly used when certain highlight event(ex: a catch, a homerun,…etc.) happens on the baseball field. These screen shot types are limited enough to be categorized as following: 1) pitch view, 2) catch overview, 3) catch closeup, 4) running overview. 5) running closeup. 6) audience view and 7) touch-base closeup. One example of extracting a homerun event is that typically a homerun can be composed of a pitch view followed by an audience view and then a running closeup view, so when this screen shot combo is captured by the model, the model knows that a homerun is likely to have happened.

# Other related papers

**7. System and method for automated creation of video game highlights**
[source](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=1038097)<br><br>

**8. DETECTION OF SLOW-MOTION REPLAY SEGMENTS IN SPORTS VIDEO FOR HIGHLIGHTS GENERATION**
[source](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.32.9470&rep=rep1&type=pdf)<br><br>

**9. MoVi: Mobile Phone based Video Highlightsvia Collaborative Sensing**
[source](https://dl.acm.org/doi/pdf/10.1145/1814433.1814468?casa_token=gYtuqDZ9ARwAAAAA:fnWA16zFdbU5-b6w51qt2HioRku-SxnvUDka_naFgpCy8AbJRB7JUXmIjQti1nsj3PYZBUYGKbzt-w)<br><br>

**10. Video highligh identification based on environmental sensing**
[source](https://patentimages.storage.googleapis.com/32/79/d8/7ed86c3f302c10/US20120324491A1.pdf)<br><br>

**11. Live Sports Event Detection Based on Broadcast Video and Web-casting Text**
[source](https://dl.acm.org/doi/pdf/10.1145/1180639.1180699?casa_token=aEOM_U7afc8AAAAA:w3ybbaxj1oaLP4EaqcVJyh-k_erFqVc9r8FOJpn-awa5cJbvm-z2z6j_5w6mLAN68A27sVBkGLFryQ)<br><br>

**12. Keyframe-based video summarization using Delaunay clustering**
[source](https://link.springer.com/content/pdf/10.1007/s00799-005-0129-9.pdf)<br><br>

**13. STRUCTURE ANALYSIS OF SOCCER VIDEO WITH HIDDEN MARKOV MODELS**
[source](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.70.9951&rep=rep1&type=pdf)<br><br>

**14. Generation of Sports Highlights Using a Combination of Supervised & Unsupervised Learning in Audio Domain**
[source](https://merl.com/publications/docs/TR2003-144.pdf)<br><br>

**15. Generation of Sports Highlights Using Motion Activity in Combination with a Common Audio Feature Extraction Framework**
[source](https://merl.com/publications/docs/TR2003-118.pdf)<br><br>

**16. Integrating Highlights for More Complete Sports Video Summarization**
[source](http://dro.deakin.edu.au/eserv/DU:30002374/chen-integratinghighlightsformore-2004.pdf)<br><br>

**17. Highlight Detection with Pairwise Deep Ranking for First-Person Video Summarization**
[source](http://openaccess.thecvf.com/content_cvpr_2016/papers/Yao_Highlight_Detection_With_CVPR_2016_paper.pdf)<br><br>

**18. Ranking Domain-Specific Highlights by Analyzing Edited Videos**
[source](https://projet.liris.cnrs.fr/imagine/pub/proceedings/ECCV-2014/papers/8689/86890787.pdf)<br><br>

**19. Unsupervised Extraction of Video Highlights Via Robust Recurrent Auto-encoders**
[source](http://openaccess.thecvf.com/content_iccv_2015/papers/Yang_Unsupervised_Extraction_of_ICCV_2015_paper.pdf)<br><br>