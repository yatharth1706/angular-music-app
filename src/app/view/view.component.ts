import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  id = '';
  results: any;
  realData: any[] = [];
  

  constructor(public activatedRoute: ActivatedRoute, private auth: AuthService) {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.showAlbums(this.id);
   }

  ngOnInit() {
  }

  showAlbums(id){
    
    this.auth.showAlbums(id).subscribe((data)=>{
      this.results = data;
      console.log(this.results);
      this.realData= this.results['tracks'];
      console.log(this.realData);
    })
    
  }
}
