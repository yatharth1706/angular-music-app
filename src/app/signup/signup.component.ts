import { Component, OnInit, OnChanges} from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  results: any;
  items: any[] = [];
  artist = '';
  indexes: any[] = [];
  

  constructor(private auth: AuthService) { }
  
  ngOnInit() {
  }

  searchArtist(artist) {

    this.auth.showArtists(artist).subscribe((data) => {
      this.indexes = [];
      this.items = data['artists']['items'];
      console.log(this.items);
      console.log(data);
      for(let i=0;i<this.items.length;i++){
        if(this.items[i]['images'].length>0){
          this.indexes.push(i);
        }
      }
      console.log(this.indexes);
    });
    console.log(artist);
  }
  

  }
