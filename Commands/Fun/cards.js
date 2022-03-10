const Discord = require('discord.js')
const cards = [':diamonds:  Ace of Diamonds',':diamonds:  2 Diamonds',':diamonds:  3 Diamonds',':diamonds:  4 Diamonds',':diamonds:  5 Diamonds',':diamonds:  6 Diamonds',':diamonds:  7 Diamonds',':diamonds:  8 Diamonds',':diamonds:  9 Diamonds',':diamonds:  10 Diamonds',':diamonds:  King Diamonds',':diamonds:  Queen Diamonds',':diamonds:  Jack Diamonds',':black_joker: A joker',':hearts: King heart',':hearts: Queen heart',':hearts: Jack heart',':spades: Ace of spades',':spades: 2 spades',':spades: 3 spades',':spades: 4 spades',':spades: 5 spades',':spades: 6 spades',':spades: 7 spades',':spades: 8 spades',':spades: 9 spades',':spades: 10 spades',':spades: King spades',':spades: Queen spades',':spades: Jack spades']
module.exports = {
    name: 'cards',
    async execute() {
        // again not doing this
        return cards[Math.floor(Math.random() * cards.length)];
    }
}

//':star: Ace of stars',':star: 2 Stars',':star: 3 Stars',':star: 4 Stars',':star: 5 Stars',':star: 6 Stars',':star: 7 Stars',':star: 8 Stars',':star: 9 Stars',':star: 10 Stars',':star: King Stars',':star: Queen Stars',':star: Jack Stars'':hearts: Ace of heart',':hearts: 2 heart',':hearts: 3 heart',':hearts: 4 heart',':hearts: 5 heart',':hearts: 6 heart',':hearts: 7 heart',':hearts: 8 heart',':hearts: 9 heart',':hearts: 10 heart',

//':four_leaf_clover: Ace of Clovers', ':four_leaf_clover: 2 Clovers', ':four_leaf_clover: 3 Clovers',':four_leaf_clover: 4 Clovers',':four_leaf_clover: 5 Clovers',':four_leaf_clover: 6 Clovers',':four_leaf_clover: 7 Clovers',':four_leaf_clover: 8 Clovers',':four_leaf_clover: 9 Clovers',':four_leaf_clover: 10 Clovers',':four_leaf_clover: King Clovers', ':four_leaf_clover: Queen Clovers',':four_leaf_clover: Jack Clover',