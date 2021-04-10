import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [],
})
export class SearchComponent implements OnInit {
  artists: any[] = [];

  constructor(private sportifyService: SpotifyService) {}

  ngOnInit(): void {}

  searchArtist(search: string) {
    if (search.length > 3) {
      this.sportifyService.getArtists(search).subscribe((data: any) => {
        this.artists = data; 
      });
    }
  }
}
