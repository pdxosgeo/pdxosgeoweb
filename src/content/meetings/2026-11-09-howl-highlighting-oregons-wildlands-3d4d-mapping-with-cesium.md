---
title: "HOWL: Highlighting Oregon's WildLands - 3D/4D mapping with Cesium"
date: 2017-09-20
location: Ecotrust Alder room
image: /images/HOWL_screenshot.png
imageAlt: Screenshot from the HOWL Cesium mapping tool, showing an oblique view of Oregon
draft: false
---
Special guest Ricardo Morin will talk about "Highlighting Oregon’s WildLands" (HOWL), a recap of his presentation in Boston. More information at Ricardo's blog here: [http://blog.rikitraki.com/FOSS4G-update/](http://blog.rikitraki.com/FOSS4G-update/) and in the full abstract below.

++++++++++++++

HOWL: 3D/4D mapping and visualization of Oregon’s wildlands

The HOWL (Highlighting Oregon's WildLands) project aims to create an interactive 3D/4D mapping and visualization tool for presenting spatio-temporal information relevant to the preservation of wilderness and wildlife protection in Oregon. HOWL will be available to conservation advocates (e.g., Oregon Wild) and the general public, to improve dissemination, understanding and interpretation of multiple publicly available data sources. Candidate data sets include boundaries of current and proposed wilderness areas, wild and scenic river areas, national forests and other public lands, wildfire events, wildlife migrations, deforestation history, and satellite imagery, to name a few.

HOWL is a web application being built using CesiumJS, a powerful open source 3D mapping and visualization library, which enables incorporating not only realistic terrain modeling, but also volumetric symbols to build interactive 3D thematic maps. In addition, HOWL will leverage the temporal visualization capabilities of CesiumJS to add the 4th dimension, thus enabling dynamic playback of related past and/or predicted events. Visualizations examples include wildfire history in old growth forest areas, wildlife migration records, and deforestation chronicles.

This presentation dives into details of building HOWL by leveraging open source front-end components (e.g., CesiumJS, jQuery, Bootstrap), back-end tools (e.g., MapShaper, toGeoJson, TopoJSON, node.js) and workflows for data acquisition, transformation, and integration. The presentation addresses key design decisions, technical challenges and future developments.