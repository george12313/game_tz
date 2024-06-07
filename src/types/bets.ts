import {Player} from "../player";
import {EGuess} from "./guess";

export interface IBets {
    placeBet(player: Player, guess: EGuess, betAmount: number): void;
}
