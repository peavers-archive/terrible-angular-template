import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../core/services/auth.service';
import {Observable} from 'rxjs';
import firebase from 'firebase/compat';
import User = firebase.User;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  user: Observable<User | null> = new Observable<User | null>();

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
  }

  async ngOnInit() {
    this.user = this.authService.getUser();
  }

  logout() {
    this.authService.logout();
  }
}
