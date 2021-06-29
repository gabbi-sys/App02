import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Início', url: '/home', icon: 'planet' },
    { title: 'Artigos', url: '/albums', icon: 'albums' },
    { title: 'Contatos', url: '/contacts', icon: 'call' },
    { title: 'Sobre', url: '/about', icon: 'checkmark' },
  ];
  constructor() {}
}
