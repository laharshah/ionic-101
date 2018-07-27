import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';
import {FavoritesPage} from "../pages/favorites/favorites";
import {LibraryPage} from "../pages/library/library";
import {QuotesPage} from "../pages/quotes/quotes";
import {QuotePage} from "../pages/quote/quote";
import {SettingsPage} from "../pages/settings/settings";
import {TabsPage} from "../pages/tabs/tabs";
import {QuotesService} from "../pages/services/quotes";
import {SettingsService} from "../pages/services/settings";
import {LoginPage} from "../pages/login/login";

@NgModule({
    declarations: [
        MyApp,
        FavoritesPage,
        LibraryPage,
        QuotesPage,
        QuotePage,
        SettingsPage,
        TabsPage,
        LoginPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        FavoritesPage,
        LibraryPage,
        QuotesPage,
        QuotePage,
        SettingsPage,
        TabsPage,
        LoginPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        QuotesService,
        SettingsService
    ]
})
export class AppModule {
}
