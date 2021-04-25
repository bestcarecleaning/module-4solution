(function() {
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    for (var i = 0; i < names.length; i++)   {
        var firstLetter = names[i].charAt(0). toLowerCase();
        if (firstLetter === 'j') {
        	// goodbye to all names starting with J
            byeSpeaker.speak(names[i]);
            // hello to all other names
        } else   {
            helloSpeaker.speak(names[i]);
        }

    }
})();