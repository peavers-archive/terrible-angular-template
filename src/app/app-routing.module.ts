import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import { AngularFireAuthGuard, hasCustomClaim, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/compat/auth-guard';

import {LoginComponent} from './layout/login/login.component';
import {CONTENT_ROUTES} from './shared';
import {ContentLayoutComponent} from './layout/content-layout/content-layout.component';

const redirectLoggedInToHome = () => redirectLoggedInTo(['']);
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [
  {
    path: '',
    children: CONTENT_ROUTES,
    canActivate: [AngularFireAuthGuard],
    component: ContentLayoutComponent,
    data: {authGuardPipe: redirectUnauthorizedToLogin}
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AngularFireAuthGuard],
    data: {authGuardPipe: redirectLoggedInToHome}
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    useHash: false,
    onSameUrlNavigation: 'reload',
    relativeLinkResolution: 'legacy'
})
  ],
  exports: [RouterModule],
  providers: [AngularFireAuthGuard]
})
export class AppRoutingModule {
}
