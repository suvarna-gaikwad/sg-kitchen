import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipeList : Recipe[] = [
    new Recipe('Puranpoli','sweet indian bread','https://upload.wikimedia.org/wikipedia/commons/7/71/Obbattu.jpg'),
    new Recipe('Paneer Springroll','fried roll stuffed with paneer','https://cdn.pixabay.com/photo/2017/07/25/00/23/spring-rolls-2536526_1280.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
