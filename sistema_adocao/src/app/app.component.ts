import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  host: { ngSkipHydration: 'true' },
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  template: `
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'sistema_adocao';


}
