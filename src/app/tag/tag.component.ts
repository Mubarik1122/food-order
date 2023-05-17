import { Component, Input } from '@angular/core';
import { Tag } from '../shared/model/tag';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent {
  @Input()
 foodPagetags?:string[];
 justifyContent?:string = 'left'
tags: Tag[] = [];
constructor(private foodservce:FoodService){}
ngOnInit(): void{
  if(!this.foodPagetags)
  this.tags = this.foodservce.getAllTag();
}

}
