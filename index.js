var Discord = require("discord.js");

var mybot = new Discord.Client();

mybot.on("message", function(message) {
    if(message.content === "!ping") {
        mybot.reply(message, "pong");
    }
	 if(message.content === "!gnip") {
        mybot.reply(message, "gnop");
    }
});

mybot.loginWithToken("MTgzMDE2MjA5ODc5NDAwNDQ4.CngN_g.iY8ZPx3DuBUXjfHnbSfV7KgeEjU");
// If you still need to login with email and password, use mybot.login("email", "password");