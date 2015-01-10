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
            console.log(e.target.value)
            vidsync.bpm = e.target.value;
            audio.playbackRate = (vidsync.bpm) / audioBaseBpm;
            bpmDisplay.innerHTML = vidsync.bpm + " bpm";
            vidsync.updateVideos();
        };

        audio.play();
        vidsync.run();
    };
}());
