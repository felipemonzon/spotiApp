import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {}

  getPath(path: string) {
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQAMGQgSeR2k3e8PqNmQ2u2JcSYA53k2-yoInLQcYH3mUx-lqvAZnmOqGnY7ijKdxZbEaRqdhvxXDaaxo5k',
    });

    return this.http.get('https://api.spotify.com/v1/' + path, {
      headers,
    });
  }

  getNewReleases() {
    return this.getPath('browse/new-releases?limit=20').pipe(
      map((data) => {
        return data['albums'].items;
      })
    );
  }

  getArtists(artist: string) {
    return this.getPath(`search?q=${artist}&type=artist`).pipe(
      map((data) => {
        return data['artists'].items;
      })
    );
  }

  getArtistById(id: string) {
    return this.getPath(`artists/${id}`);
  }

  getToptracks(idArtist: string){
    return this.getPath(`artists/${idArtist}/top-tracks?market=es`).pipe(
      map((data) => {
        return data['tracks'];
      })
    );
  }
}
