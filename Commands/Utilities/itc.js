module.exports = {
    name: 'itc',
    async execute(client, message) {
        imp = message.content.slice(6)
    if (imp.includes('\'')) {
      bothU = imp.split('\'')
      feet = bothU[0]
      feet = Number(feet)
      inch = bothU[1]
      inch = inch.replace(/\"/g, '')
      inch = Number(inch)
    } else {
      feet = 0
      inch = imp
      inch = imp.replace(/\"/g, '')
      inch = Number(inch)
    }
    ftinchfinal = (feet * 30.48) + (inch * 2.54)
    message.channel.send(':straight_ruler: ' + ftinchfinal + 'cm')
    return
    }
}