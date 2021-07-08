import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-e404',
  templateUrl: './e404.page.html',
  styleUrls: ['./e404.page.scss'],
})
export class E404Page implements OnInit {

  constructor(public auth: AngularFireAuth) { }

  ngOnInit() { }

}
