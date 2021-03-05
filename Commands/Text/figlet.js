module.exports = {
    name: 'vaporwave',
    async execute(client, message) {
      message.channel.send('<a:Loading_Color:759914061696860202> *loading...*').then(msg => {
        let thingtosend = message.content.slice(9).removepings() //https://artii.herokuapp.com/make?text=ASCII+art&font=graffiti
        require('https').get('https://artii.herokuapp.com/make?text='+encodeURIComponent(thingtosend)+'&font=graffiti', function (d) { d.on('data', function (n) { message.channel.send('```'+String(n)+'```') }) })
        msg.delete();
        return
        });
    }
}