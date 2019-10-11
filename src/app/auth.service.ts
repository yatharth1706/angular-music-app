import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token = 'BQBb48RFjPdzd-fXAqDxAFq5gt24_jb5hFjhb0gXMh4V9fQ3e-dCBhmirzNgULfSdptEzkpdes3XvxHfG1X-8wMOqvGi6muu_gCQjb9ZfEskwlW-Wu-9sKAUufCrbhREzk4CCNeCAhRQM4Zak2ySUuYnMKxZzoFpEw';
  baseUrl = 'https://api.spotify.com/v1';

  httpOptions = {
    headers: new HttpHeaders({
      Accept: 'application/json',
      'Content-Type':  'application/json',
      Authorization : 'Bearer ' + this.token
    })
  };


  constructor(private http: HttpClient) { }
  
  showArtists(artist){
    return this.http.get(this.baseUrl + '/search?q=' + artist + '&type=artist', this.httpOptions);
  }

  showAlbums(id){
    return this.http.get(this.baseUrl + '/artists/' + id + '/top-tracks?country=US', this.httpOptions);
  }
}
