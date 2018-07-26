import {Component, OnInit} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the UsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
    selector: 'page-user',
    templateUrl: 'user.html',
})
export class UserPage implements OnInit {

    name= '';

    constructor(public navCtrl: NavController, public navParams: NavParams) {}

    ngOnInit() {
        this.name = this.navParams.get('userName');
    }

    onGoBack() {
        // this.navCtrl.pop();
        this.navCtrl.popToRoot();
    }

}
