import {Component, OnInit} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {Quote} from "../../data/quote.interface";
import {QuotesService} from "../services/quotes";

/**
 * Generated class for the QuotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-quotes',
    templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {

    quoteGroup: { category: string, quotes: Quote[], icon: string };

    constructor(public navCtrl: NavController, public navParams: NavParams,
                private alertCtrl: AlertController,
                private qService: QuotesService) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad QuotesPage');
    }

    ngOnInit() {
        this.quoteGroup = this.navParams.data;
    }

    isFav(q: Quote) {
        return this.qService.isFav(q);
    }

    onAddToFavorite(quote: Quote) {
        console.log(quote);
        const alert = this.alertCtrl.create({
            title: 'Add to favorite.',
            subTitle: 'Are you sure?',
            message: 'Favorite this quote.',
            buttons: [
                {
                    text: 'Yes, go ahead',
                    handler: () => {
                        console.log('ok');
                        this.qService.addFQ(quote);
                    }
                },
                {
                    text: 'No, I changed my mind!',
                    role: 'cancel',
                    handler: () => {
                        console.log('No');
                    }
                }
            ]
        });
        alert.present();
    }

    unfav(quote: Quote) {
        const alert = this.alertCtrl.create({
            title: 'Remove from Favorite?',
            subTitle: 'Are you sure?',
            message: 'Unfavorite this quote.',
            buttons: [
                {
                    text: 'Yes, go ahead',
                    handler: () => {
                        console.log('ok');
                        this.qService.removeFQ(quote);
                    }
                },
                {
                    text: 'No, I changed my mind!',
                    role: 'cancel',
                    handler: () => {
                        console.log('No');
                    }
                }
            ]
        });
        alert.present();
    }

}
