var quoteList = [
  "you can eat without posting it on instagram"
  ,"you've lost every game of tetris you played"
  ,"you don't need to type www"
  ,"the reason you think all memes are over used is because you spend too much time on your computer"
  ,"that soylent green is made up of people"
  ,"my glasses aren't held up by my ears"
  ,"i'm brain fucked spining all the time"
  ,"i don't get a single fuck of the letters behind me"
  ,"i do collect laserdiscs"
  ,"chuck norris is a ginger"
  ,"cats have their own internet\nfull of pictures of us"
  ,"i take my selfies with an invisible camera"
  ,"winners don't use drugs"
  ,"i don't have facebook"
  ,"that i never say 'what if i told you' in any of the matrix movies"
  ,"that i've run out of things to tell you"
  ,"you can do your things without posting it on facebook"
  ,"the blue pill will give you an erection lasting up to four hours?"
  ,"that this meme should end in a question mark and everyone forgot?"
  ,"that you can play your facebook games without inviting me"
  ,"that stupid people exist because nothing in the food chain eats them anymore"
  ,"you don't get a prize for being the 1000th visitor"
  ,"nothing"
  ,"potatoe"
  ,"what if i told you"
  ,"that you're reading this in my voice"
  ,"you don't have to eat a whole bag of chips in one sitting"
  ,"windows 93 is a commercial for a movie that doesn't exist"
];

module.exports = {
    name: 'whatif',
    async execute(client, message, args) {
      return "What if I told you...\n" + quoteList[Math.floor(Math.random() * quoteList.length)];
    }
}