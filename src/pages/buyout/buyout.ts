import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the BuyoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-buyout',
    templateUrl: 'buyout.html',
})
export class BuyoutPage implements OnInit {

    productData: {
        name: string;
        qty: number;
    } = null;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad BuyoutPage');
    }

    ngOnInit() {
        this.productData = this.navParams.data;
        console.log(this.productData);
    }

    buyItem() {
        this.navCtrl.popToRoot();
    }

}
