export type TCard = { suit: string, value: string }

export interface ICards {
    createDeck(): TCard[];
    shuffleDeck(): void;
    drawCard(): TCard;
    compareCards(card1: TCard, card2: TCard): number;
}
