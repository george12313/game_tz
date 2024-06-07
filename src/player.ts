import {EGameResult, TPlayersHistory} from "./types/history";
import {IPlayer} from "./types/player";

export class Player implements IPlayer {
	private balance: number;
	protected history: TPlayersHistory[];
	constructor(balance: number) {
		this.balance = balance;
		this.history = [];
	}
	getBalance() {
		return this.balance
	}
	placeBet(bet: number): boolean {
		if (bet > this.balance) {
			console.log("Insufficient balance for this bet.");
			return false;
		}
		this.balance -= bet;
		return true;
	}

	winBet(bet: number): void {
		const winnings = bet * 1.7;
		this.balance += winnings;
		this.history.push({
			bet,
			result: EGameResult.win,
			count: winnings,
		});
	}

	loseBet(bet: number): void {
		this.history.push({
			bet,
			result: EGameResult.lose,
			count: bet,
		});
	}

	getHistory(): TPlayersHistory[] {
		return this.history
	}
}
