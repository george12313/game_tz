import {TCard} from "../cards";
import {EGuess} from "./guess";

export enum EGameResult {
    win= "win",
    lose = "lose"
}

export type TPlayersHistory = {
    bet: number,
    result: EGameResult,
    count: number,
}
export type TBetsHistory = {
    playerCard: TCard,
    nextCard: TCard,
    guess: EGuess,
    outcome: string,
}
