import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  post = '';
  parentPosts: any[]=[];
  constructor() { }
  
  ngOnInit() {
  }

  AddPost(post){
    console.log(post);
    this.parentPosts.push(post);
  }
  
  childEvent(data){
    alert(data);
  }
}
