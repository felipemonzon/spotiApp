import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styles: [],
})
export class CardsComponent implements OnInit {
  @Input() items: any[] = [];
  constructor(private router: Router) {}

  ngOnInit(): void {}

  seeArtist(data: any) {
    console.log(data);
    let id;
    if (data.type === 'artist') {
      id = data.id;
    } else {
      id = data.artists[0].id;
    }
    this.router.navigate(['artist/', id]);
  }
}
