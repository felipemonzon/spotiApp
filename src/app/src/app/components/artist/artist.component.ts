import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: [],
})
export class ArtistComponent implements OnInit {
  artist: any = {};
  topTracks: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private spotifyService: SpotifyService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.getArtist(params['id']);
      this.getTopTracks(params['id']);
    });
  }

  getArtist(id: string) {
    this.spotifyService.getArtistById(id).subscribe((data: any) => {
      this.artist = data;
    });
  }

  getTopTracks(idArtist: string) {
    this.spotifyService.getToptracks(idArtist).subscribe((data) => {
      console.log(data);
      this.topTracks = data;
    });
  }
}
