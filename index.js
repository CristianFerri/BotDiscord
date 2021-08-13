const Discord = require("discord.js");
const intents = new Discord.Intents(32767);
const client = new Discord.Client({ intents });
hola ferri eri gey

client.on('ready', () => {
    console.log('Bot iniciado en ' + client.user.tag);
});

client.on("messageCreate", async (message) => {

    const prefix = "º";
    //Comandos
    if(message.content.toLocaleLowerCase() === (prefix + "help")){
        message.reply("Mariconnety ara t'envie la llista de comandos va!")
        message.author.send("**A vore animalet de sequia començem:**\n\n ***.help*** \t `L'acabes de gastar aquest comand, aixina que no fa falta que t'ho explique.`")
    }

    //let idAdmin = message.guild.roles.cache.get("875813847947161690");
    if(message.content.toLocaleLowerCase() === (prefix + "clear")){
        if(message.member.roles.cache.has("875813847947161690") || message.member.roles.cache.has("817501311863488572")){
            message.channel.bulkDelete(10)
                .then(messages => console.log('Bulk deleted ' + messages.size + ' messages'))
                .catch(console.error);
            message.channel.send("Chat asnifat")
                .then(msg => {
                    setTimeout(() => msg.delete(), 2000);
                })
        }else{
            message.reply("No eres Moderador");
        }
    }

    //Mariconaes
    const opi = "opin";
    if(message.content.toLocaleLowerCase().match("meivel") && message.content.toLocaleLowerCase().match("mari")){
        message.reply("Maricón seras tu");
    }
    else if(message.content.toLocaleLowerCase().match("meivel") && message.content.toLocaleLowerCase().match("foll")){
        message.reply("Pues me folle a ta mare");
    }
    else if(message.content.toLocaleLowerCase().match("meivel") && message.content.toLocaleLowerCase().match("inut")){
        message.reply("No se si em dius a mi, pero inutil serás tu");
    }
    else if(message.content.toLocaleLowerCase().match("meivel") && (message.content.toLocaleLowerCase().match("vull") || message.content.toLocaleLowerCase().match("vui"))){
        message.reply("Si vols algo en concret, li dius al meu amo que me programe bé")
    }
    else if(message.content.toLocaleLowerCase().match("meivel") && (message.content.toLocaleLowerCase().match("chup") || message.content.toLocaleLowerCase().match("xup"))){
        message.reply("Xuplam el tremendo de jolinbo que tinc entre les cames")
    }
    //Opinions
    else if(message.content.toLocaleLowerCase().match("meivel") && message.content.toLocaleLowerCase().match(opi) && message.content.toLocaleLowerCase().match("rakso")){
        message.reply("La xupla prou bé")
    }
    else if(message.content.toLocaleLowerCase().match("meivel") && message.content.toLocaleLowerCase().match(opi) && message.content.toLocaleLowerCase().match("pekas")){
        message.reply("Que em va agradar prou la ultima pelicula de spiderman que va fer")
    }
    //Cas final
    else if(message.content.toLocaleLowerCase().match("meivel")){
        message.reply("M'has cridat?")
    }

    console.log(message.content);
});



client.login("ODc1MTA0ODMwNjczMjg5MjE2.YRQq4g.6wIoLFAI5u4UP01NrxYxcXXqGKY");