import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../Item';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute) { }
  items: Item[] = [
    { category: "Electronics", name: "Laptop", imageUrl: "https://source.unsplash.com/2MxT7Yj4T9I/600x400" },
    { category: "Electronics", name: "Smartphone", imageUrl: "https://source.unsplash.com/9Z1KRIfpBTM/600x400" },
    { category: "Electronics", name: "Headphones", imageUrl: "https://source.unsplash.com/Y1yR2H3Jb3Q/600x400" },
    { category: "Electronics", name: "Camera", imageUrl: "https://source.unsplash.com/aZjw7xI3QAA/600x400" },
  
    { category: "Clothing", name: "T-Shirt", imageUrl: "https://source.unsplash.com/PY9Rfo5g8lQ/600x400" },
    { category: "Clothing", name: "Jeans", imageUrl: "https://source.unsplash.com/eB6tOjby2P4/600x400" },
    { category: "Clothing", name: "Sneakers", imageUrl: "https://source.unsplash.com/Wt3jj2EH4DQ/600x400" },
    { category: "Clothing", name: "Jacket", imageUrl: "https://source.unsplash.com/hqH-lAYXhxQ/600x400" },
  
    { category: "Home Decor", name: "Table Lamp", imageUrl: "https://source.unsplash.com/3CZvjJkA0XY/600x400" },
    { category: "Home Decor", name: "Throw Pillow", imageUrl: "https://source.unsplash.com/fwhc7Vl-zQk/600x400" },
    { category: "Home Decor", name: "Wall Clock", imageUrl: "https://source.unsplash.com/MQvPql5PiP0/600x400" },
    { category: "Home Decor", name: "Candle Holder", imageUrl: "https://source.unsplash.com/WOoBRSbRC1I/600x400" },
  
    { category: "Books", name: "Fiction Novel", imageUrl: "https://source.unsplash.com/5fNmWej4tAA/600x400" },
    { category: "Books", name: "Self-Help Book", imageUrl: "https://source.unsplash.com/A-f2-biixH0/600x400" },
    { category: "Books", name: "Cookbook", imageUrl: "https://source.unsplash.com/NX0KC3fITcs/600x400" },
    { category: "Books", name: "Science Textbook", imageUrl: "https://source.unsplash.com/SYTO3xs06fU/600x400" },
  
    { category: "Toys", name: "Teddy Bear", imageUrl: "https://source.unsplash.com/Rl-M-KOAG4Y/600x400" },
    { category: "Toys", name: "Building Blocks", imageUrl: "https://source.unsplash.com/0Wbsmyh6v74/600x400" },
    { category: "Toys", name: "Doll", imageUrl: "https://source.unsplash.com/GVUzpwBmmhQ/600x400" },
    { category: "Toys", name: "Remote Control Car", imageUrl: "https://source.unsplash.com/skJrJgLeCk4/600x400" },
  
    // Add more items as needed...
  ];
  cat:any;
  data='';
  item2:Item[]=[];
  ngOnInit(): void {
    this.route.paramMap.subscribe(
      ()=>{
        this.item2=[];
        if(!this.router.url.includes("/search/")){
          this.cat=this.route.snapshot.params['link'];
          for(let item of this.items){
            if(this.cat===item.category) this.item2.push(item)
          }
          console.log(this.cat);
        }else{
          this.data=this.route.snapshot.params['data'];
          for(let item of this.items){
            if(item.name.includes(this.data)) this.item2.push(item)
          }
        }
      }
    );
        //this.router.navigateByUrl("/")
  }
}
