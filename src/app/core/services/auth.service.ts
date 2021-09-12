import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import User = firebase.User;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private angularFireAuth: AngularFireAuth, private router: Router) {
  }

  doGoogleLogin() {
    return new Promise<any>((resolve) => {
      this.angularFireAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(
        (response) => {
          resolve(response);
          this.router.navigate(['/']);
        },
        (error) => {
          console.log('Unable to communicate with Google', error);
        }
      );
    });
  }

  public getUser(): Observable<User | null> {
    return this.angularFireAuth.user;
  }

  public logout() {
    this.angularFireAuth.signOut().then(() => this.router.navigate(['/login']));
  }
}
