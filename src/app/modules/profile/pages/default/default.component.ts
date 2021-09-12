import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../../core/services/auth.service';

import {Observable} from 'rxjs';
import firebase from 'firebase/compat';

import User = firebase.User;

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  user: Observable<User | null> = new Observable<User | null>();

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.user = this.authService.getUser();
  }
}
