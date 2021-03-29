module.exports = {
    name: 'verify',
    description: "verify command",
    execute(message, args){

        if(message.member.roles.cache.has('804759456419676169')){
            message.channel.send('Du er nu verificeret!');
            message.member.roles.add('804759288039211059');
            message.member.roles.remove('804759456419676169')


        }
    }
}