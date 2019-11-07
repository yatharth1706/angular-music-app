import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.newReleases();
    $(window).scroll(function() {
      if ($(this).scrollTop() > 50 ) {
          $('.scrolltop:hidden').stop(true, true).fadeIn();
      } else {
          $('.scrolltop').stop(true, true).fadeOut();
      }
  });
  
  $(function(){$(".scroll").click(function(){$("html,body").animate({scrollTop:$(".thetop").offset().top},"1000");return false})}) 
  
  $("a").click(function(){
    var pageId = $(this).attr("data-page");
    $("html, body").animate({ scrollTop: $("#"+pageId).offset().top },2500);
  });
  

}

  results: any;
  items: any[] = [];
  artist = '';
  indexes: any[] = [];

  albums: any[]=[]
  firstAlbums: any[]=[]
  secondAlbums: any[]=[]
  name= 'Believe'

  newReleases(){
      this.auth.newReleases().subscribe((data)=>{
      this.albums=data['albums']['items'];
      console.log(this.albums);

      for(var i=0;i<4;i++){
        this.firstAlbums.push(this.albums[i]);
      }
      for(var i=4;i<8;i++){
        this.secondAlbums.push(this.albums[i]);
      }

      console.log(this.albums[0]['external_urls']['spotify']);
    
    })
  }

  searchArtist(artist){
    this.auth.showArtists(artist).subscribe((data) => {
      this.indexes = [];
      this.items = data['artists']['items'];
    
      for(let i=0;i<this.items.length;i++){
        if(this.items[i]['images'].length>0){
          this.indexes.push(i);
        }
      }
      console.log(this.indexes);
    });
  }
  
  }

