import {TPlayersHistory} from "./history";

export interface IPlayer {
    getBalance(): number;
    placeBet(bet: number): boolean;
    winBet(bet: number): void;
    loseBet(bet: number): void;
    getHistory(): TPlayersHistory[];
}
