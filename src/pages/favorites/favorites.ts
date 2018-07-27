import {Component} from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {Quote} from "../../data/quote.interface";
import {QuotesService} from "../services/quotes";
import {QuotePage} from "../quote/quote";
import {SettingsService} from "../services/settings";
import {OAuthService} from 'angular-oauth2-oidc';

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
                private settingsService: SettingsService,
                private oauthService: OAuthService) {
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

        console.log(this.claims);
        console.log(this.givenName);
    }

    removeFromFav(quote: Quote) {
        this.qService.removeFQ(quote);
        this.fetchQ();
    }

    getClaims() {
        return this.claims;
    }

    get givenName() {
        const claims: any = this.oauthService.getIdentityClaims();
        if (!claims) {
            return null;
        }
        return claims.name;
    }

    get claims() {
        return this.oauthService.getIdentityClaims();
    }
}
