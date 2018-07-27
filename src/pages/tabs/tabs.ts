import {Component} from "@angular/core";
import {FavoritesPage} from "../favorites/favorites";
import {LibraryPage} from "../library/library";
import {SettingsPage} from "../settings/settings";

@Component({
    selector: 'page-tabs',
    templateUrl: 'tabs.html'
})
export class TabsPage {
    favoritesPage = FavoritesPage;
    library = LibraryPage;
    settingsPage = SettingsPage;

    constructor() {}
}