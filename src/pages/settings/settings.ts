import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, Toggle} from 'ionic-angular';
import {SettingsService} from "../services/settings";

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-settings',
    templateUrl: 'settings.html',
})
export class SettingsPage {

    constructor(public navCtrl: NavController, public navParams: NavParams,
                private settingsService: SettingsService) {
    }

    isAltBg() {
        return this.settingsService.isAlt();
    }


    toggleBg(toggle: Toggle) {
        this.settingsService.changeAltBg(toggle.checked);

    }
}
