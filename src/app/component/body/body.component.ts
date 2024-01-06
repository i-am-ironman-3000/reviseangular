import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../Item';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  @Input() items:Item[]=[];
  items1:Item[]=[];
  size:number=0;
  pageSize:number=2;
  pageNumber:number=0;
  buttonDis:boolean=true;
  constructor(private route:ActivatedRoute) { 
  }
  cat: any;
  paginate(){
    this.items1=this.items.slice(this.pageNumber*this.pageSize,this.pageNumber*this.pageSize+this.pageSize);  
  }
  ngOnInit(){
    this.route.paramMap.subscribe(
      ()=>{
        this.size=this.items.length;
        this.pageNumber=this.route.snapshot.params['page'];
        if(this.pageNumber===undefined) this.pageNumber=0;
        this.paginate();
      }
    );
  }
  add(){
    this.pageNumber+=1;
    this.paginate();
  }
  minus(){
    this.pageNumber-=1;
    this.paginate();
  }

}
