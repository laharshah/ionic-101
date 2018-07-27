import { Component, ViewChild } from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import { JwksValidationHandler, OAuthService } from 'angular-oauth2-oidc';
import * as OktaAuth from '@okta/okta-auth-js';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {
    @ViewChild('email') email: any;
    private username: string;
    private password: string;
    private error = null;
    tabsPage = TabsPage;
    constructor(private oauthService: OAuthService, private navCtrl: NavController) {
        oauthService.redirectUri = window.location.origin;
        oauthService.clientId = '{clientID}';
        oauthService.scope = 'openid profile email';
        oauthService.issuer = '{org-url}/oauth2/defaul';
        oauthService.tokenValidationHandler = new JwksValidationHandler();

        // Load Discovery Document and then try to login the user
        this.oauthService.tryLogin();

    }

    ionViewDidLoad(): void {
        setTimeout(() => {
            this.email.setFocus();
        }, 500);
    }

    login(): void {
        this.oauthService.createAndSaveNonce().then(nonce => {
            const authClient = new OktaAuth({
                clientId: this.oauthService.clientId,
                redirectUri: this.oauthService.redirectUri,
                url: 'https://dev-671921.oktapreview.com.oktapreview.com',
                issuer: 'default'
            });
            return authClient.signIn({
                username: this.username,
                password: this.password
            }).then((response) => {
                if (response.status === 'SUCCESS') {
                    return authClient.token.getWithoutPrompt({
                        nonce: nonce,
                        responseType: ['id_token', 'token'],
                        sessionToken: response.sessionToken,
                        scopes: this.oauthService.scope.split(' ')
                    })
                        .then((tokens) => {
                            const idToken = tokens[0].idToken;
                            const accessToken = tokens[1].accessToken;
                            const keyValuePair = `#id_token=${encodeURIComponent(idToken)}&access_token=${encodeURIComponent(accessToken)}`;
                            this.oauthService.tryLogin({
                                customHashFragment: keyValuePair,
                                disableOAuth2StateCheck: true
                            });
                            this.navCtrl.push(TabsPage);
                        });
                } else {
                    throw new Error('We cannot handle the ' + response.status + ' status');
                }
            }).fail((error) => {
                console.error(error);
                this.error = error.message;
            });
        });
    }

}