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
            .replace('π', 'pi')
            .replace('Π', "pi")
            .replace('П', 'pi')
            .replace("÷", "/")
            .replace("×", "*")
            .replace("x", "*")
            .replace(":infinity:", "Infinity")
            .replace("∞", "Infinity")
            .replace(":heavy_multiplication_x:",  "*")
            .replace(":heavy_division_sign:", "/")
            .replace(":heavy_plus_sign:", '+')
            .replace(":heavy_minus_sign:", '-')
            //                                                                        Phrases
            .replace("the loneliest number", 1) // When putting numbers, javascript allows you to put them in without quotation marks, which makes things alot easier.
            .replace("how many horns does a unicorn have", 1)
            .replace("the answer to the ultimate question of life the universe and everything", 42)
            .replace("the answer to life the universe and everything", 42)
            .replace("bakers dozen", 13)
            .replace("baker's dozen", 13)
            .replace("devils number", 666)
            .replace("funny number", 69)
            .replace("weed number", 420)
            .replace("leet number", 1337)
            //.replace("rotate 8", "Infinity")
            //.replace("rotate 6", 9)
            //.replace("rotate 9", 6)
            //                                                                  Fancy text.
            //                                                              Circled Digit Symbol
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
            .replace("⑬", 13)
            .replace("⑭", 14)
            .replace("⑮", 15)
            .replace("⑯", 16)
            .replace("⑰", 17)
            .replace("⑱", 18)
            .replace("⑲", 19)
            .replace("⑳", 20)
            .replace("㉑", 21)
            .replace("㉒", 22)
            .replace("㉓", 23)
            .replace("㉔", 24)
            .replace("㉕", 25)
            .replace("㉖", 26)
            .replace("㉗", 27)
            .replace("㉘", 28)
            .replace("㉙", 29)
            .replace("㉚", 30)
            .replace("㉛", 31)
            .replace("㉜", 32)
            .replace("㉝", 33)
            .replace("㉞", 34)
            .replace("㉟", 35)
            .replace("㊱", 36)
            .replace("㊲", 37)
            .replace("㊳", 38)
            .replace("㊴", 39)
            .replace("㊵", 40)
            .replace("㊶", 41)
            .replace("㊷", 42)
            .replace("㊸", 43)
            .replace("㊹", 44)
            .replace("㊺", 45)
            .replace("㊻" ,46)
            .replace("㊼", 47)
            .replace("㊽", 48)
            .replace("㊾", 49)
            .replace("㊿", 50)
            // Phew, thats whole lot. Now we can do the other things
            //                                                           Circled Digit Symbol - 2
            .replace("⓵", 1)
            .replace("⓶", 2)
            .replace("⓷", 3)
            .replace("⓸", 4)
            .replace("⓹" ,5)
            .replace("⓺", 6)
            .replace('⓻', 7)
            .replace("⓼", 8)
            .replace("⓽", 9)
            .replace("⓾", 10)
            //                                      Negative Circled Digit Number Symbol / Black Circle Number      
            .replace('⓿', 0)
            .replace('❶', 1)    
            .replace('❷', 2)
            .replace('❸', 3)
            .replace('❹', 4)
            .replace("❺", 5)
            .replace("❻", 6)
            .replace("❼", 7)
            .replace("❽", 8)
            .replace('❾', 9)
            .replace('❿', 10)
            .replace('⓫', 11)
            .replace('⓬', 12)
            .replace('⓭', 13)
            .replace('⓮', 14)
            .replace('⓯', 15)
            .replace('⓰', 16)
            .replace('⓱', 17)
            .replace('⓲', 18)
            .replace('⓳', 19) 
            .replace('⓴', 20) // I need a break from all of this coding. Damn, Fancy text is taking a pretty long time to add all of this.
            // Link to the Symbols here so I can remember it: https://www.copyandpastesymbols.net/number-symbols.html
          };
          String.prototype.removepings = function() {
            return this
                .replace(/<@&(\d+)>/gi, "no")
                .replace(/(@(?:everyone|here))/gi, 'no')
                .replace(/<@&(\d+)>/gi, "no")
                .replace("nigger", "no")
                .replace("Nigger", "no")
          };
          var arg = message.content.slice(7).filters().removepings()
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