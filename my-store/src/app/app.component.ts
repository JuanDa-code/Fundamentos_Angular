import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  btnDisabled = true;
  person = {
    name: 'Juan',
    age: 19,
    avatar: 'https://source.unsplash.com/random',
  }
}
