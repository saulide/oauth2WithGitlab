import {Component} from '@angular/core';
import {AuthConfig, OAuthService} from 'angular-oauth2-oidc';

const authConfig: AuthConfig = {
  issuer: 'https://gitlab.com',
  clientId: 'bd488d42573ef10f465e96f18df01b6895046721bb6c3cb5be86d5817fd2f2b5',
  redirectUri: window.location.origin,
  responseType: 'code',
  scope: 'profile email api read_repository',
  showDebugInformation: true
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'openid';

  constructor(private oauthService: OAuthService) {
    this.oauthService.configure(authConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  onLogin = () => {
    this.oauthService.initCodeFlow();
  }
}
