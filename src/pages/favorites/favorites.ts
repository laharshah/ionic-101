import {Component} from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {Quote} from "../../data/quote.interface";
import {QuotesService} from "../services/quotes";
import {QuotePage} from "../quote/quote";
import {SettingsService} from "../services/settings";

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
                private modalCtrl: ModalController,
                private settingsService: SettingsService) {
    }

    ionViewWillEnter() {
        this.fetchQ();
    }

    fetchQ() {
        this.quotes = this.qService.getFQ();
    }

    isAltBg() {
        return this.settingsService.isAlt();
    }

    openQ(quote: Quote) {
        const modal = this.modalCtrl.create(QuotePage, quote);
        modal.present();
        modal.onDidDismiss(remove => {
            if(remove) {
                this.removeFromFav(quote);
                this.fetchQ();
            }
        });
    }

    removeFromFav(quote: Quote) {
        this.qService.removeFQ(quote);
        this.fetchQ();
    }
}
