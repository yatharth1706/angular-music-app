import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  token = 'BQDlkrhdX8Cc4gZneCgGQ11i-_CxALRZnvhJKS783_CSNVuwhsWosmIB8A69YpMoUdV2X6wNs6g3h_JT6ySXknt_1w9dgP4pHNWjzXiLxbLOrxXyyNnI728NnYYWvg6SmikdblOUT9tU2dR_Dufdk_Brp5lQOL6VqA';
  baseUrl = 'https://api.spotify.com/v1';
  youtubeToken = 'AIzaSyAcuJLt2KeF0BFFr4SrPnAXlZcnGnfd8aY';
  youtubeUrl = 'https://www.googleapis.com/youtube/v3/search?q=';
  realData: any;
  ytURL: any;

  httpOptions1 = {
    headers: new HttpHeaders({
      Accept: 'application/json',
      'Content-Type':  'application/json',
      Authorization : 'Bearer ' + this.token
    })
  };
  
  
  constructor(private http: HttpClient) { }
  
  showArtists(artist){
    return this.http.get(this.baseUrl + '/search?q=' + artist + '&type=artist', this.httpOptions1);
  }

  showAlbums(id){
    return this.http.get(this.baseUrl + '/artists/' + id + '/top-tracks?country=US', this.httpOptions1);
  }

  newReleases(){
    return this.http.get(this.baseUrl + '/browse/new-releases?country=IN', this.httpOptions1);
  }

  findVideo(name){
    return this.http.get(this.youtubeUrl + name + '&part=snippet&maxResults=25&key=AIzaSyAcuJLt2KeF0BFFr4SrPnAXlZcnGnfd8aY');
  }
}
