import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent implements OnInit {
  name = 'Victor Crest';
  age = 26;
  city = 'London';
  followers = '80K';
  likes = '803K';
  photos = '1.4K';

  constructor() {
  }

  ngOnInit(): void {
  }

}
