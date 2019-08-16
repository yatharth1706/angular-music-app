import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token = 'BQAtXxJ5Fe2Kgk0zJaTDunwaUl9HXlvplD8OVJ06Qj0QThOQjVXqAt938cO4Gk9mtupnyOb_eFPv6KqSlm4vsquwtbyxDych6YaRwrYhAQZxrjA5AHAGYIEajMrFNmilgArAkuo48cz0EMV5byTLCc5CHxGh9TGp4Q';
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
