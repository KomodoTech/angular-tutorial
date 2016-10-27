import { Component, Output, EventEmitter } from "@angular/core";
import { Meal } from "./meal.model";

@Component({
    selector: "meal-new",
    template: `
    <h1>Meal New:</h1>
    <div>
        <label>Enter Meal Name:</label>
        <input #newName>
    </div>
    <div>
        <label>Enter Meal Calories:</label>
        <input #newCalories>
    </div>
    <div>
        <label>Enter Optional Details:</label>
        <input #newDetails>

        <button (click)="
        makeNewMeal(newName.value, newCalories.value, newDetails.value);
        newName.value='';
        newCalories.value='';
        newDetails.value='';
        ">Add</button>
    </div>
    `
})

export class MealNewComponent {
    @Output() mealNewSender = new EventEmitter();
    makeNewMeal(name: string, calories: number, details: string) {
        if (details) {
            var newMeal: Meal = new Meal(name, calories, details);
        }
        else {
            var newMeal: Meal = new Meal(name, calories);
        }
        this.mealNewSender.emit(newMeal);
  }
}
