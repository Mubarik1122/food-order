import { Component } from '@angular/core';
import { Foods } from '../shared/model/food';
import { FoodService } from '../services/food/food.service';
import { StarRatingModule } from 'angular-star-rating';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  foods: Foods[] = [];

  constructor(private foodService: FoodService, private router:ActivatedRoute) {}

  ngOnInit(): void {
    this.router.params.subscribe(params =>{
      if(params['searchItem'])
      this.foods = this.foodService.getAll().filter(food => food.name.toLowerCase().includes(params['searchItem'].toLowerCase()))
      else if(params['tag'])
      this.foods = this.foodService.getAllByTag(params['tag'])
      else
      this.foods = this.foodService.getAll();
    })
  }

}
