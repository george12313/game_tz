import {Cards} from "./cards";
import {EGuess} from "./types/guess";
import {Player} from "./player";
import {EGameResult, TBetsHistory} from "./types/history";
import {IBets} from "./types/bets";

export class Bets implements IBets {
   private readonly history: TBetsHistory[]
   private readonly cards: Cards
    constructor(
        cards: Cards
    ) {
        this.cards = cards
        this.history = [];
    }

    placeBet(player: Player, guess: EGuess, betAmount: number): void {
        console.log("player", guess)
        if (this.cards.createDeck().length < 2) {
            console.log("Not enough cards to continue the game.");
            return;
        }

        const playerCard = this.cards.drawCard();
        const nextCard = this.cards.drawCard();

        console.log(`Current card: ${playerCard.value} of ${playerCard.suit}`);

        const result = this.cards.compareCards(playerCard, nextCard);
        console.log(`Next card: ${nextCard.value} of ${nextCard.suit}`);

        let outcome;
        if (
            (guess === EGuess.higher && result < 0) ||
            (guess === EGuess.lower && result > 0)
        ) {
            player.winBet(betAmount);
            outcome = EGameResult.win;
        } else {
            player.loseBet(betAmount);
            outcome = EGameResult.lose;
        }

        this.history.push({
            playerCard,
            nextCard,
            guess,
            outcome,
        });

        console.log(`Player ${outcome} history ${JSON.stringify(player.getHistory())}! New balance: ${player.getBalance()} history ${JSON.stringify(this.history)}`);
    }
}
