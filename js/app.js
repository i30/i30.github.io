/**
 * App.js
 */
(function(window)
{
    "use strict";

    function setIframeMinHeight(iframe)
    {
        var iframes = window.document.getElementsByName(iframe.name);

        if (iframes.length) {
            iframes.forEach(function(frame, index, frames)
            {
                frame.style.height = (iframe.document.documentElement.scrollHeight + 1) + "px";
            });
        }
    }

    window.onload = function()
    {
        if (window.frames.length) {
            for (var i = 0; i <= window.frames.length; i++) {
                if (window.frames[i] && window.frames[i].toString() === "[object Window]") {
                    setIframeMinHeight(window.frames[i]);
                }
            }
        }
    };
}(window));
