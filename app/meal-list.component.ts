import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Meal } from "./meal.model";

@Component({
    selector: "meal-list",
    template: `
    <h1>Meal List:</h1>
    <select (change)="onChange($event.target.value)">
        <option value="all" selected="selected">Show All</option>
        <option value="high">More Than 500 Cal</option>
        <option value="low">Less Than 500 Cal</option>
    </select>
    <div *ngFor="let currentMeal of mealList | calories:caloriesOption ">
        <a (click)="displayMeal(currentMeal)">{{ currentMeal.name }}</a>
    </div>
    `
})

export class MealListComponent {
    @Input() mealList: Meal[];

    @Output() displayMealSender = new EventEmitter();
    displayMeal(mealToDisplay: Meal) {
        this.displayMealSender.emit(mealToDisplay);
    }

    public caloriesOption: string = "all";
    onChange(selectedOption) {
        this.caloriesOption = selectedOption;
    }
}
