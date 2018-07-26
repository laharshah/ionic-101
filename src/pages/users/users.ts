import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {UserPage} from "./user/user";

/**
 * Generated class for the UsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-users',
    templateUrl: 'users.html',
})
export class UsersPage {

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewCanEnter(): boolean | Promise<boolean> {
        console.log('ionViewCanEnter');
        const rnd = Math.random();
        return rnd > 0.5;
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad UsersPage');
    }

    ionViewDidEnter() {
        console.log('ionViewDidEnter')
    }

    ionViewCanLeave(): boolean | Promise<{}> {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, 1000);
        });

        return promise;
    }

    goToUser(userName: string) {
        this.navCtrl.push(UserPage, {userName: userName});
    }
}
