import { Tag } from './../../shared/model/tag';
import { Foods } from './../../shared/model/food';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getFoodById(id:number): Foods{
    return this.getAll().find(food => food.id == id)!;
  }

  getAllByTag(tag:string) :Foods[]{
    return tag == 'All'?
    this.getAll() : this.getAll().filter(food => food.tags?.includes(tag));
    // if(tag == 'All')
    // return this.getAll()
    // else
    // return this.getAll().filter(food => food.tags?.includes(tag));

  }
  getAllTag(): Tag[]{
    return [
      { name: 'All', count: 8},
      { name: 'Pakistani', count: 1},
      { name: 'Thai', count: 2},
      { name: 'Chines', count: 2},
      { name: 'Italyian', count: 2},
      { name: 'Franch', count: 1},
    ];
  }

  getAll():Foods[]{
    return[
     {
      id:1,
      name:'Italyian Burgur',
      price:5,
      fav:false,
      star:4.3,
      tags:['Italyian',"burger"],
      imageUrl: '../assets/1.png',
      cooktime:"10-20",
      origins:["Italy"],
     },
     {
      id:2,
      name:'Meet Burgur',
      price:7,
      fav:false,
      star:4.3,
      tags:['Pakistani',"burger"],
      imageUrl: '../assets/2.png',
      cooktime:"10-20",
      origins:["Pakistan"],
     },
     {
      id:3,
      name:'Vegi Burgur',
      price:5,
      fav:false,
      star:4.1,
      tags:['Thai',"burger"],
      imageUrl: '../assets/3.png',
      cooktime:"10-20",
      origins:["Thai"],
     },
     {
      id:4,
      name:'Double deal Burgur',
      price:9,
      fav:false,
      star:4.4,
      tags:['Thai',"burger"],
      imageUrl: '../assets/4.png',
      cooktime:"20-30",
      origins:["Thai"],
     },
     {
      id:5,
      name:'Crusty Pizza',
      price:9,
      fav:false,
      star:4.3,
      tags:['Italyian',"Pizza"],
      imageUrl: '../assets/5.png',
      cooktime:"10-20",
      origins:["Italy"],
     },
     {
      id:6,
      name:'Chizzz Piza',
      price:10,
      fav:false,
      star:4.1,
      tags:['Franch',"Pizza"],
      imageUrl: '../assets/6.png',
      cooktime:"10-20",
      origins:["Franch"],
     },

     {
      id:7,
      name:'Loaded Noodles',
      price:4,
      fav:true,
      star:3.3,
      tags:['Chines',"noodles"],
      imageUrl: '../assets/7.png',
      cooktime:"10-20",
      origins:["chines"],
     },
     {
      id:8,
      name:'Loaded vegi Noodles',
      price:3,
      fav:false,
      star:3.3,
      tags:['Chines',"noodles"],
      imageUrl: '../assets/8.png',
      cooktime:"10-20",
      origins:["chines"],
     },
    ]
  }
}
