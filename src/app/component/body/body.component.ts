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
  constructor(
    private route:ActivatedRoute,private router:Router
  ) { }
  cat: any;
  ngOnInit(){
  }

}
