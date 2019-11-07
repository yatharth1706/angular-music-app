import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
// import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  id = '';
  id2 : any[]=[];
  results: any;
  realData: any[] = [];
  see: boolean[]= [];
  myUrl = '';

  constructor(public activatedRoute: ActivatedRoute, private auth: AuthService) {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.showAlbums(this.id);
    for(let i=0;i<100;i++){
      this.see.push(false);
    }
   }


  ngOnInit() {
  }
  
  
  showAlbums(id){
    // change the text of play button
    
    this.auth.showAlbums(id).subscribe((data)=>{
      this.results = data;
      console.log(this.results);
      this.realData= this.results['tracks'];
      console.log(this.realData);
    })
    
  }

  show(index,play){
    
    if(play.innerHTML==="Play Preview"){
      play.innerHTML="Close Preview";
    }else{
      play.innerHTML="Play Preview";
    }
    if(this.see[index]==false){
      this.see[index]=true;
    }else{
      this.see[index]=false;
    }
  }

  findVideos(name,idx){
    this.auth.findVideo(name).subscribe((data)=>{
      console.log(data);
      this.id2[idx]=data['items'][0]['id']['videoId'];
      this.auth.ytURL=this.id2[idx];
      console.log(this.id2[idx]);
      this.myUrl= 'https://www.youtube.com/embed/'+ this.id2[idx];
    });
  }

  fn(index){
    if(this.id2[index]===false){
      this.id2[index]=true;
    }else{
      this.id2[index]=false
    }
  }

  fn1(index,name,idx){
    this.auth.findVideo(name).subscribe((data)=>{
      console.log(data);
      this.id2[idx]=data['items'][0]['id']['videoId'];
      this.auth.ytURL=this.id2[idx];
      console.log(this.id2[idx]);
      this.myUrl= 'https://www.youtube.com/embed/'+ this.id2[idx];
    });
    
    this.auth.realData=this.realData[index];
  }
}
