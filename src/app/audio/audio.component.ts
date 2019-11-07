import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css']
})

export class AudioComponent implements OnInit {
  url: any;
  imageUrl:any;
  name: any;
  myUrl: any;
  idx: any;

  constructor(public activatedRoute: ActivatedRoute,public auth: AuthService) {
    this.url=this.auth.realData['preview_url']
    this.imageUrl=this.auth.realData['album']['images'][0]['url'];
    this.name=this.auth.realData['name'];
    this.findURL(this.name);
  }  

  ngOnInit(){
    $(window).scroll(function() {
      if ($(this).scrollTop() > 250 ) {
          $('.scrolltop:hidden').stop(true, true).fadeIn();
      } else {
          $('.scrolltop').stop(true, true).fadeOut();
      }
  });
  
  $(function(){$(".scroll").click(function(){$("html,body").animate({scrollTop:$(".thetop").offset().top},"1000");return false})})
   }
  

  findURL(name){
    this.auth.findVideo(name).subscribe((data)=>{
      console.log(data);
      this.idx=data['items'][0]['id']['videoId'];
      console.log(this.idx);
      this.myUrl= 'https://www.youtube.com/embed/'+ this.idx;
  });
}

}
