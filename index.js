var Discord = require("discord.js");

var mybot = new Discord.Client();


    
mybot.on("message", function(message) {
    mybot.setPlayingGame("ya mum")
    if(message.content === "+-ping") {
        mybot.reply(message, "pong");
    }
	if(message.content === "+-gnip") {
        mybot.reply(message, "gnop");
    }
    if(message.content === "+-help") {
        mybot.reply(message, "Ok buddy, I'll help you out. Check your PM's for a list of commands and what they do.")
        mybot.sendmessage(message.id, "DEM COMMANDS:\nRemember, +- prefixes my commands, just in case you have any other supperior bots on your server ;)\n+-help -- Well, you know what that does.\n+-ping -- Makes me say pong to you.\n+-gnip -- Makes me say gnop to you.\nAnd dat's it.")
    }
});

mybot.loginWithToken("MTgzMDE2MjA5ODc5NDAwNDQ4.CngN_g.iY8ZPx3DuBUXjfHnbSfV7KgeEjU");
// If you still need to login with email and password, use mybot.login("email", "password");