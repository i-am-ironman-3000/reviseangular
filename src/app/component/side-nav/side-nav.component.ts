import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  links: string[] =["Electronics","Books","Clothing","Home Decor","Toys"];
  activeLink="Electronics"
  constructor() { }

  ngOnInit(): void {
  }

}
