/*jslint browser:true */

(function () {
    "use strict";

    window.onload = function () {
        var audioBaseBpm = 174,
            audio = document.querySelector("#loop"),
            vidsync = new VidSync(".video-tile", audioBaseBpm, 8),
            bpmDisplay = document.querySelector("#bpm-display"),
            bpmRange = document.querySelector("#bpm");

        bpmRange.value = vidsync.bpm;

        bpmRange.onchange = function (e) {
            vidsync.bpm = e.srcElement.value;
            audio.playbackRate = (vidsync.bpm * 2) / audioBaseBpm;
            bpmDisplay.innerHTML = vidsync.bpm + " bpm";
            vidsync.updateVideos();
        };

        audio.play();
        vidsync.run();
    };
}());
