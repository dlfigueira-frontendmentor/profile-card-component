import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'profile-card-component';
  name = 'Victor Crest';
  age = 26;
  city = 'London';
  followers = '80K';
  likes = '803K';
  photos = '1.4K';
}
