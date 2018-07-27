import {Component, ViewChild} from '@angular/core';
import {MenuController, NavController, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {TabsPage} from "../pages/tabs/tabs";
import {SettingsPage} from "../pages/settings/settings";
import {LibraryPage} from "../pages/library/library";
import {LoginPage} from "../pages/login/login";
import {OAuthService} from "angular-oauth2-oidc";

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    tabsPage:any = TabsPage;
    settingsPage = SettingsPage;
    libraryPage = LibraryPage;

    @ViewChild('nav') nav: NavController;

    constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private menuCtrl: MenuController,
                oauthService: OAuthService) {
        platform.ready().then(() => {

            if (oauthService.hasValidIdToken()) {
                this.tabsPage = TabsPage;
            } else {
                this.tabsPage = LoginPage;
            }

            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }

    onLoad(page: any) {
        this.nav.setRoot(page);
        this.menuCtrl.close();

    }


}

