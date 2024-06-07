import {Game} from "./game";
import {Bets} from "./bets";
import {Cards} from "./cards";
import {Player} from "./player";
import readline from "readline";

function bootstrap() {
    const card = new Cards()
    const bet = new Bets(card)
    const player = new Player(100);

    const startGame = new Game(player, bet, readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    }))

    startGame.gameLoop()
}

bootstrap()



