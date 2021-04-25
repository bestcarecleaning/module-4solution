(function(window) {
    var byeSpeaker = new Object();
    var speakWord = "Good Bye";
// i hope this is in the correct spot
    byeSpeaker.speak = function speak(name) {
        console.log(speakWord + " " + name);
    };
// this should not be global correct?
    window.byeSpeaker = byeSpeaker;
})(window);