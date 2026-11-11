---
title: SpiderOSM & the Portland Area Mismatched Name Survery
date: 2015-04-15
location: PSU Cramer Hall 409
image: /images/spider_osm.png
imageAlt: siderOSM logo
draft: false
---
SpiderOSM is an open source python package for matching segments in one path network, e.g., streets and trails, to corresponding segments in another, based on geography and network connectivity. This allows joining together attribute data from separate sources. Importantly authoritative jurisdictional data can be correlated with the rich, crowd-sourced, user editable and extensible, Open Street Maps data. Multifactor match scoring, allows data to be joined only for high confidence matches. 

The initial version of the matcher was coded in early 2014 specifically to combine Open Street Map data with Portland Oregon area jurisdictional data (RLIS) to facilitate pedestrian infrastructure analysis and planning. Since then the code has been refactored into a generally useful python package that installs, via pip, and works on all three major platforms: Mac OSX, Linux and Windows. The code is stable and mature, with version 1.0 is just around the corner.

The developer, Michael Arnold, is now focusing on developing applications, and finding users and collaborators. On going projects where help would be very welcome include:

1. The Portland Area Mismatched Name Survery (looking at name mismatches between OSM and RLIS identified by SpiderOSM.) Some folks at TriMet and others at PDOT have begun this project, but there is ALOT to be done!
2. A QGIS Plug-in for spiderOSM. Ryan Peterson has recently begun this project, and would welcome help.
3. Help getting the word out: publicizing spiderOSM online and at appropriate events. Alternately, advice and encouragement in this process. :)

Another opportunity, not yet begun: looking for someone interested in developing an ESRI Plug-in for spiderOSM.