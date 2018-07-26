import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {Quote} from "../../data/quote.interface";

/**
 * Generated class for the QuotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-quote',
    templateUrl: 'quote.html',
})
export class QuotePage {

    q: Quote;
    constructor(public navCtrl: NavController, public navParams: NavParams,
                private viewCtrl: ViewController) {
    }

    onClose(remove = false) {
        this.viewCtrl.dismiss(remove);
    }


    ionViewDidLoad() {
        this.q = this.navParams.data;
    }
}
