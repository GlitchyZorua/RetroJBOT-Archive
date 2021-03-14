var services_stopped = 0;
var counter = 0;
var adminlist = fs.readJSONSync('./admins.txt')
var ssbans = fs.readJSONSync('ssbans.txt')
var version = "13.0.0C RetroJBOT Canary Orange Edition Again...";
const animals = require('random-animals-api');
var ProgressBar = require('progress');
var bar = new ProgressBar(':bar :current/:total', { total: 100 });
console.log("########  ######## ######## ########   #######        ## ########   #######  ########")
console.log("##     ## ##          ##    ##     ## ##     ##       ## ##     ## ##     ##    ## ")
console.log("##     ## ##          ##    ##     ## ##     ##       ## ##     ## ##     ##    ## ")
console.log("########  ######      ##    ########  ##     ##       ## ########  ##     ##    ## ")
console.log("##   ##   ##          ##    ##   ##   ##     ## ##    ## ##     ## ##     ##    ##  ")
console.log('##     ## ########    ##    ##     ##  #######   ######  ########   #######     ##    ')
console.log("                                          Canary")
console.log('                            ╭─────────────────────────────╮')
console.log('                            │ Connecting to discord.js... │')
console.log('                            ╰─────────────────────────────╯')
console.log('                    v'+version)
const Discord = require('discord.js')
const fs = require('fs')
const path = require('path')
const chalk = require('chalk')


String.prototype.removepings = function() {
    return this
        .replace(/(@(?:everyone|here))/gi, 'no') //@everyone/here ping
        .replace(/<@&(\d+)>/gi, "no") //role ping
        .replace(/<@!?(\d+)>/gi, "no") //user ping
        .replace("nigger", "no")
        .replace("Nigger", "no")
};
String.prototype.rpremovepings = function() {
    return this
        .replace(/(@(?:everyone|here))/gi, 'no')
        .replace(/<@&(\d+)>/gi, "no")
        .replace("nigger", "no")
        .replace("Nigger", "no")
};
String.prototype.aremovepings = function() {
  return this
      .replace('`', '\'')
      .replace(/<@&(\d+)>/gi, "no")
      .replace(/(@(?:everyone|here))/gi, 'no')
      .replace(/<@&(\d+)>/gi, "no")
      .replace("nigger", "no")
      .replace("Nigger", "no")
};
String.prototype.aremovepingsh = function() {
  return this
      .replace('`', '\'')
      .replace(/<@&(\d+)>/gi, "(a)")
      .replace(/(@(?:everyone|here))/gi, '(a)')
      .replace(/<@&(\d+)>/gi, "no")
      .replace("nigger", "no")
      .replace("Nigger", "no")
};

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


const client = new Discord.Client()
require('dotenv').config()
client.login(process.env.TOKEN)
client.commands = new Discord.Collection()


let errors = []

console.log("╭───────────────────────────────────╮")
console.log("│ Connected to discord. Now finding │")
console.log("| javascript files.                 │")
console.log("╰───────────────────────────────────╯")
const modules = fs
    .readdirSync('Commands')
    .filter(file => fs.statSync(path.join('Commands', file)).isDirectory())

modules.forEach(module => {
    console.log(chalk.green(`Loading Module: ${module}`))

    const CMDFiles = fs
        .readdirSync(path.resolve(`Commands/${module}`))
        .filter(file => !fs.statSync(path.resolve('Commands', module, file)).isDirectory())
        .filter(file => { return file.endsWith('.js')})
    // console.log(chalk.blueBright(`╭────────────────────┬──╮`))
    CMDFiles.forEach(CMD => {
        try {
            const command = require(`./Commands/${module}/${CMD}`)
            const FittedCMDName = `${command.name}`.padEnd(20)
            //console.log(chalk.blueBright(`│${FittedCMDName}│✅│\n├────────────────────┼──┤`))
            command.module = module
            client.commands.set(command.name, command)
            bar.tick()
        } catch (error) {
            const FittedCMDName = `${CMD}`.padEnd(20)
            //console.log(chalk.blueBright(`│${FittedCMDName}│❌│\n├────────────────────┼──┤`))
            errors.push(error)
        }
    })
   // console.log(chalk.blueBright(`╰────────────────────┴──╯`))
})
if (errors.length > 0) {
    console.log(errors)
    errors.forEach(err => {
        console.log(chalk.red(err))
    })
}

fs.readdir('./Events', (err, files) => {
    if (err) return console.log(chalk.red(err))
    console.log(chalk.green("Events Handler"))
 //   console.log(chalk.blueBright(`╭────────────────────┬──╮`))
    files.forEach(file => {
        if (!file.endsWith('.js')) return
        const evt = require(`./Events/${file}`)
        let evtName = file.split('.')[0]
        const FittedEVTName = `${evtName}`.padEnd(20)
        //  console.log(chalk.blueBright(`│${FittedEVTName}│✅│`))
        client.on(evtName, evt.bind(null, client))
    })
   // console.log(chalk.blueBright(`╰────────────────────┴──╯`))
})

