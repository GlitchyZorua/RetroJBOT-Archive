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
      }
    }
  }

  if (s[0] == '-') {
    return -calc(s.slice(1));
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
var nanieegg = ['NaN', 'NaN', 'NaN', 'NaN', 'NaN', 'NaN', 'NaN', 'NaN', 'NaN', 'NaN', 'NaN', 'NaN', 'NaN', 'NaN', 'NaN', 'NaN', 'NaNi?','NaN','NaN','NaN','Omae wa moe shindu. NaNi?','NaN','NaN','NaN','NaN','NaN','NaN','NaN','NaN','NaN','NaN','NaN','NaN','NaN','NaN','NaN','NaN','NaN']
module.exports = {
    name: 'calc',
    async execute(client, message) {
      message.content = message.content.slice(7)
    var nanieeggyes = nanieegg[Math.floor(Math.random() * nanieegg.length)]
    if (!message.content) return message.channel.send("🖩 " + nanieeggyes)
    message.channel.send('🖩 ' + calc(message.content))
    console.log('🖩 ' + calc(message.content))
    }
}