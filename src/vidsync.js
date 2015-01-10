/*jslint browser:true */

window.VidSync = (function () {
    "use strict";

    function VidSync(selector, bpm, beatsPerLoop) {
        this.bpm = bpm || 140;
        this.beatsPerLoop = beatsPerLoop || 4;
        this.selector = selector;
        this.tiles = [];
        this.timer = null;
        this.attachVideos(this.selector, beatsPerLoop);
    }

    function VidSyncTile(video, beatsPerLoop) {
        this.beatsPerLoop = beatsPerLoop;
        this.video = video;

        this.video.defaultMuted = true;
        this.video.loop = true;
    }

    VidSync.prototype.attachVideos = function (selector, beatsPerLoop) {
        var i, videos;
        videos = document.querySelectorAll(selector);

        for (i = 0; i < videos.length; i += 1) {
            this.attachVideo(videos[i], beatsPerLoop);
        }
    };

    VidSync.prototype.attachVideo = function (video, beatsPerLoop) {
        this.tiles.push(new VidSyncTile(video, beatsPerLoop));
    };

    VidSync.prototype.updateVideos = function () {
        var i, secondsPerBeat, tile, newVidDuration, scaleFactor;
        secondsPerBeat = 60 / this.bpm;

        for (i = 0; i < this.tiles.length; i += 1) {
            tile = this.tiles[i];
            newVidDuration = this.beatsPerLoop * secondsPerBeat;
            scaleFactor = tile.video.duration / newVidDuration;
            tile.video.playbackRate = scaleFactor;
        }
    };

    VidSync.prototype.run = function () {
        var i;
        this.updateVideos();

        for (i = 0; i < this.tiles.length; i += 1) {
            this.tiles[i].video.play();
        }
    };

    return VidSync;
}());
