import {Component} from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {Quote} from "../../data/quote.interface";
import {QuotesService} from "../services/quotes";
import {QuotePage} from "../quote/quote";

/**
 * Generated class for the FavoritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-favorites',
    templateUrl: 'favorites.html',
})
export class FavoritesPage {

    quotes: Quote[] = [];

    constructor(public navCtrl: NavController, public navParams: NavParams,
                private qService: QuotesService,
                private modalCtrl: ModalController) {
    }

    ionViewWillEnter() {
        this.fetchQ();
    }

    fetchQ() {
        this.quotes = this.qService.getFQ();
    }

    openQ(quote: Quote) {
        const modal = this.modalCtrl.create(QuotePage, quote);
        modal.present();
        modal.onDidDismiss(remove => {
            if(remove) {
                this.qService.removeFQ(quote);
                this.fetchQ();
            }
        });
    }

}
