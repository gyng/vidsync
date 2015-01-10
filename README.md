# vidsync

Tiny JavaScript library to synchronize `<video>` elements to a common BPM.

# Usage

1. Include `src/vidsync.js` in your HTML page.
2. Add this to your JavaScript:

    ```javascript
    var vidsync = new VidSync(".video-element-selector", bpm, beatsPerBar);
    vidsync.run();
    ```
3. All videos with the class `.video-element-selector` will be synchronized to the desired BPM.
4. For an example application, check out `examples/tiles/index.html`.
