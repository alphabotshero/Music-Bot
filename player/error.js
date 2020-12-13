module.exports = (client, error, message) => {
    switch (error) {
        case 'NotPlaying':
            message.channel.send({
                embed: {
                    color: '#FA1D2F',
                    description: 'There are no tracks in the **Queue** to play'
                }
            })

            break;
        case 'NotConnected':
            message.channel.send({
                embed: {
                    color: '#FA1D2F',
                    description: 'you should be in a voice channel to use this command.'
                }
            })
            break;
        case 'UnableToJoin':
            message.channel.send({
                embed: {
                    color: '#FA1D2F',
                    description: 'I do not have permissions to **view** your voice channel!'
                }
            })
            break;
        default:
            message.channel.send({
                embed: {
                    color: '#ff0000',
                    author: { name: `Error: ${error}` },
                    description: 'Some thing went wrong :confused: join my server to report the issuse. [Link to my server](https://discord.gg/VcEDyuh)'
                }
            })

    };
};
