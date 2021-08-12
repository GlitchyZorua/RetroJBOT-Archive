/*/
function calc(s) {
  //remove all spaces except ones inside ""
  s = s.split(' ').join('');

  var br = 0;

  //loop 1. addition and substraction
  for (var i = 0; i < s.length; i++) {
    if (s[i] == '(' || s[i] == '[') {
      br++;
    } else if (s[i] == ')' || s[i] == ']') {
      br--;
    } else {
      if (br == 0) {
        if (s[i] == '+') {
          return calc(s.slice(0, i)) + calc(s.slice(i + 1));
        }
        if (s[i] == '%') {
          return calc(s.slice(0, i)) % calc(s.slice(i + 1));
        }
        if (s[i] == '-' && i != 0) {
          return calc(s.slice(0, i)) + calc(s.slice(i));
        }
      }
    }
  }

  //loop 2. multiplication and division
  br = 0;

  for (var i = 0; i < s.length; i++) {
    if (s[i] == '(' || s[i] == '[') {
      br++;
    } else if (s[i] == ')' || s[i] == ']') {
      br--;
    } else {
      if (br == 0) {
        if (s[i] == '*') {
          return calc(s.slice(0, i)) * calc(s.slice(i + 1));
        }
        if (s[i] == 'x') {
          return calc(s.slice(0, i)) * calc(s.slice(i + 1));
        }
        if (s[i] == '×') {
          return calc(s.slice(0, i)) * calc(s.slice(i + 1));
        }
        if (s[i] == '/') {
          return calc(s.slice(0, i)) / calc(s.slice(i + 1));
        }
        if (s[i] == '÷') {
          return calc(s.slice(0, i)) / calc(s.slice(i + 1));
        }
      }
    }
  }

  br = 0;

  for (var i = 0; i < s.length; i++) {
    if (s[i] == '(' || s[i] == '[') {
      br++;
    } else if (s[i] == ')' || s[i] == ']') {
      br--;
    } else {
      if (br == 0) {
        if (s[i] == '^') {
          return Math.pow(calc(s.slice(0, i)), calc(s.slice(i + 1)));
        }
        if (s[i] == '√') {
          return Math.pow(calc(s.slice(0, i)), calc(s.slice(i + 1)));
        }
      }
    }
  }



  //Check for functions

  if (s.split('(')[0] in Math) {
    var arg = s.slice(s.split('(')[0].length + 1, s.length - 1) + ',';
    var args = [];
    var ar = '';
    br = 0;
    for (var i = 0; i < arg.length; i++) {
      if (arg[i] == '(') {
        br++;
      }
      if (arg[i] == ')') {
        br--;
      }
      if (arg[i] == ',' && br == 0) {
        args.push(calc(ar));
        ar = '';
      } else {
        ar += arg[i];
      }
    }
    return Math[s.split('(')[0]](...args);
  }

  //Return raw value
  if (s[0] == '(' && s[s.length - 1] == ')') {
    return calc(s.slice(1, s.length - 1));
  } else {
    return Number(s);
  }
  
}
/*/


//var nanieegg = ['NaN', 'NaN', 'NaN', 'NaN', 'NaN', 'NaN', 'NaN', 'NaN', 'NaN', 'NaN', 'NaN', 'NaN', 'NaN', 'NaN', 'NaN', 'NaN', 'NaNi?','NaN','NaN','NaN','Omae wa moe shindu. NaNi?','NaN','NaN','NaN','NaN','NaN','NaN','NaN','NaN','NaN','NaN','NaN','NaN','NaN','NaN','NaN','NaN','NaN']
const { inspect } = require('util');
module.exports = {
    name: 'calc',
    async execute(client, message) {
      // http://xahlee.info/comp/unicode_circled_numbers.html
      String.prototype.filters = function() {
        return this
            .replace('π', 'pi')
            .replace('Π', "pi")
            .replace('П', 'pi')
            .replace("÷", "/")
            .replace("×", "*")
            .replace("x", "*")
            .replace(":infinity:", "Infinity")
            .replace("∞", "Infinity")
            //.replace("rotate 8", "Infinity")
            //.replace("rotate 6", 9)
            //.replace("rotate 9", 6)
            .replace(":heavy_multiplication_x:",  "*")
            .replace(":heavy_division_sign:", "/")
            .replace(":heavy_plus_sign:", '+')
            .replace(":heavy_minus_sign:", '-')
            .replace("the loneliest number", 1)
            .replace("how many horns does a unicorn have", 1)
            .replace("the answer to the ultimate question of life the universe and everything", 42)
            .replace("the answer to life the universe and everything", 42)
            .replace("bakers dozen", 13)
            .replace("baker's dozen", 13)
            .replace("devils number", 666)
            .replace("funny number", 69)
            .replace("weed number", 420)
            .replace("leet number", 1337)
            .replace("⓪", 0)
            .replace("①", 1)
            .replace("②", 2)
            .replace("③", 3)
            .replace("④", 4)
            .replace("⑤", 5)
            .replace("⑥", 6)
            .replace("⑦", 7)
            .replace("⑧", 8)
            .replace("⑨", 9)
            .replace("⑩", 10)
            .replace("⑪", 11)
            .replace("⑫", 12)
      };
      var arg = message.content.slice(7).filters()
    if (arg === ""){
    message.channel.send(":x: Syntax Error! Syntax: j.calc <text>")
    return;
    }
    if (arg === "egg"){
    message.channel.send(":egg:")
    return
    }
    if (arg === "once in a blue moon"){
      message.channel.send("🖩 once in a blue moon = 1.16699016 × 10^−8 hertz")
      return
    }
    /*/
    var nanieeggyes = nanieegg[Math.floor(Math.random() * nanieegg.length)]
    if (!a) return message.channel.send("🖩 " + nanieeggyes)
    /*/
    require('https').get('https://api.mathjs.org/v4/?expr='+encodeURIComponent(arg), function (d) { d.on('data', function (n) { message.channel.send("🖩 " + String(n)) })
  })
  return
    message.channel.send(":x: Discord API failed. Calculation Aborted.");
  }
}