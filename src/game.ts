import readline from "readline";
import {Player}  from "./player";
import {Bets}  from "./bets";
import {EGuess} from "./types/guess";
import {IGame} from "./types/game";
console.log("Game started!");
export class Game implements IGame {
	private readonly player: Player
	private readonly bet: Bets
	private readonly rl: readline.Interface

	constructor(
		player: Player,
		bet: Bets,
		rl: readline.Interface
	) {
		this.rl = rl
		this.player = player
		this.bet = bet
	}

	 gameLoop(): void {
		this.rl.question("Place your bet: ", (bet: string) => {
			const betAmount = parseFloat(bet);
			if (isNaN(betAmount) || betAmount <= 0) {
				console.log("Invalid bet amount.");
				return this.gameLoop();
			}

			if (!this.player.placeBet(betAmount)) {
				return this.gameLoop();
			}

			this.rl.question(
				"Will the next card be higher or lower? (higher/lower): ",
				(guess) => {
					if (guess !== EGuess.higher && guess !== EGuess.lower) {
						console.log("Invalid choice. Please type 'higher' or 'lower'.");
						return this.gameLoop();
					}

					this.bet.placeBet(this.player, guess, betAmount);
					setTimeout(this.gameLoop.bind(this), 15000);
				}
			);
		});
	}
}

