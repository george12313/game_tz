import {suits, values} from "./constants";
import {ICards} from "./types/cards";

export type TCard = { suit: string, value: string }

export class Cards implements ICards {
    private readonly deck: TCard[];
    constructor() {
        this.deck = this.createDeck();
        this.shuffleDeck();
    }

    createDeck(): TCard[] {
        const deck: TCard[] = [];
        for (let i = 0; i < 6; i++) {
            for (let suit of suits) {
                for (let value of values) {
                    deck.push({ suit, value });
                }
            }
        }

        return deck;
    }

    shuffleDeck(): void {
        for (let i = this.deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
        }
    }

    drawCard(): TCard {
        const card = this.deck.pop();
        if (!card) {
            throw new Error('is empty')
        }

        return card
    }

    compareCards(card1: TCard, card2: TCard): number {
        const valueOrder = values;
        return valueOrder.indexOf(card1.value) - valueOrder.indexOf(card2.value);
    }
}
