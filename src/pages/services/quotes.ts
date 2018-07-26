import {Quote} from "../../data/quote.interface";

export class QuotesService {

    private favoriteQuotes: Quote[] = [];

    addFQ(quote: Quote) {
        this.favoriteQuotes.push(quote);
        console.log(this.favoriteQuotes);
    }

    removeFQ(quote: Quote) {
        const pos = this.favoriteQuotes.findIndex((qe: Quote) => {
            return qe.id === quote.id;
        });
        this.favoriteQuotes.splice(pos, 1);
    }

    getFQ() {
        console.log(this.favoriteQuotes);
        return this.favoriteQuotes.slice();
    }

}