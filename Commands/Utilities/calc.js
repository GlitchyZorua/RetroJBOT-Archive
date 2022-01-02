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
module.exports = {
    name: 'calc',
    async execute(client, message) {
      // http://xahlee.info/comp/unicode_circled_numbers.html
      String.prototype.filters = function() {
        return this
            //                                                                Symbols and emojis
            .replace(/π/i, 'pi')
            .replace(/Π/i, "pi")
            .replace(/П/i, 'pi')
            .replace(/÷/i, "/")
            .replace(/×/i, "*")
            .replace(/x/i, "*")
            .replace(/:infinity:/i, "Infinity")
            .replace(/∞/i, "Infinity")
            .replace(/:heavy_multiplication_x:/i,  "*")
            .replace(/:heavy_division_sign:/i, "/")
            .replace(/:heavy_plus_sign:/i, '+')
            .replace(/:heavy_minus_sign:/i, '-')
            //                                                                        Phrases
            .replace(/the loneliest number/i, 1) // When putting numbers, javascript allows you to put them in without quotation marks, which makes things alot easier.
            .replace(/how many horns does a unicorn have/i, 1)
            .replace(/the answer to the ultimate question of life the universe and everything/i, 42)
            .replace(/the answer to life the universe and everything/i, 42)
            .replace(/bakers dozen/i, 13)
            .replace(/baker's dozen/i, 13)
            .replace(/devils number/i, 666)
            .replace(/funny number/i, 69)
            .replace(/weed number/i, 420)
            .replace(/leet number/i, 1337)
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
//fuck it, for now, just put this a side



/*/
            //.replace("rotate 8", "Infinity")
            //.replace("rotate 6", 9)
            //.replace("rotate 9", 6)
            //                                                                  Fancy text.
            //                                                              Circled Digit Symbol
            .replace(/⓪/i, 0)
            .replace(/①/i, 1)
            .replace(/②/i, 2)
            .replace(/③/i, 3)
            .replace(/④/i, 4)
            .replace(/⑤/i, 5)
            .replace(/⑥/i, 6)
            .replace(/⑦/i, 7)
            .replace(/⑧/i, 8)
            .replace(/⑨/i, 9)
            .replace(/⑩/i, 10)
            .replace(/⑪/i, 11)
            .replace(/⑫/i, 12)
            .replace(/⑬/i, 13)
            .replace(/⑭/i, 14)
            .replace(/⑮/i, 15)
            .replace(/⑯/i, 16)
            .replace(/⑰/i, 17)
            .replace(/⑱/i, 18)
            .replace(/⑲/i, 19)
            .replace(/⑳/i, 20)
            .replace(/㉑/i, 21)
            .replace(/㉒/i, 22)
            .replace(/㉓/i, 23)
            .replace(/㉔/i, 24)
            .replace(/㉕/i, 25)
            .replace(/㉖/i, 26)
            .replace(/㉗/i, 27)
            .replace(/㉘/i, 28)
            .replace(/㉙/i, 29)
            .replace(/㉚/i, 30)
            .replace(/㉛/i, 31)
            .replace(/㉜/i, 32)
            .replace(/㉝/i, 33)
            .replace(/㉞/i, 34)
            .replace(/㉟/i, 35)
            .replace(/㊱/i, 36)
            .replace(/㊲/i, 37)
            .replace(/㊳/i, 38)
            .replace(/㊴/i, 39)
            .replace(/㊵/i, 40)
            .replace(/㊶/i, 41)
            .replace(/㊷/i, 42)
            .replace(/㊸/i, 43)
            .replace(/㊹/i, 44)
            .replace(/㊺/i, 45)
            .replace(/㊻/i, 46)
            .replace(/㊼/i ,47)
            .replace(/㊽/i ,48)
            .replace(/㊾/i ,49)
            .replace(/㊿/i ,50)
            // Phew, thats whole lot. Now we can do the other things
            //                                                           Circled Digit Symbol - 2
            .replace(/⓵/i, 1)
            .replace(/⓶/i, 2)
            .replace(/⓷/i, 3)
            .replace(/⓸/i ,4)
            .replace(/⓹/i ,5)
            .replace(/⓺/i, 6)
            .replace(/⓻/i, 7)
            .replace(/⓼/i, 8)
            .replace(/⓽/i, 9)
            .replace(/⓾/i, 10)
            //                                      Negative Circled Digit Number Symbol / Black Circle Number      
            .replace(/⓿/i, 0)
            .replace(/❶/i, 1)    
            .replace(/❷/i, 2)
            .replace(/❸/i, 3)
            .replace(/❹/i, 4)
            .replace(/❺/i, 5)
            .replace(/❻/i, 6)
            .replace(/❼/i, 7)
            .replace(/❽/i, 8)
            .replace(/❾/i, 9)
            .replace(/❿/i, 10)
            .replace(/⓫/i, 11)
            .replace(/⓬/i, 12)
            .replace(/⓭/i, 13)
            .replace(/⓮/i, 14)
            .replace(/⓯/i, 15)
            .replace(/⓰/i, 16)
            .replace(/⓱/i, 17)
            .replace(/⓲/i, 18)
            .replace(/⓳/i, 19) 
            .replace(/⓴/i, 20) 
            .replace(/㉈/i, 10)
            // I need a break from all of this coding. Damn, Fancy text is taking a pretty long time to add all of this.
            // Link to the Symbols here so I can remember it: https://www.copyandpastesymbols.net/number-symbols.html

            // fuck i need to fix the numbers not replacing the second number gijopfdjgklfdjgkfldghfdj
            // this code is aleady getting messy
            /*/