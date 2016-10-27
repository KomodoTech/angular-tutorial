import { Component } from "@angular/core";
import { Meal } from "./meal.model";

@Component({
    selector: "meal-tracker-app",
    template: `
    <div class="container">
        <h1>Meal Tracker:</h1>

        <meal-new
        (mealNewSender)="addNewMeal($event)"
        ></meal-new>

        <meal-list
        [mealList]="testMeals"
        (displayMealSender)="displayMeal($event)"
        ></meal-list>

        <meal-display
        [displayMeal]="displayedMeal"
        (editMealSender)="editMeal($event)"
        (closeDisplaySender)="closeDisplayMeal()"
        ></meal-display>

        <meal-edit
        [editMeal]="editedMeal"
        (closeEditSender)="closeEditMeal()"
        ></meal-edit>
    </div>
    `
})

export class AppComponent {
    constructor(){
        this.initTestMeals();
    }

    public testMeals: Meal[] = [];

    initTestMeals() {
        this.testMeals.push(new Meal("Hamburger", 354, "Didn't get soda or cheese on my burger!"));
        this.testMeals.push(new Meal("Fries", 365, "I only ate half of them."));
        this.testMeals.push(new Meal("Salad", 155));
    }

    displayedMeal: Meal = null;
    displayMeal(mealToDisplay: Meal) {
        this.displayedMeal = mealToDisplay;
        this.closeEditMeal();
    }
    closeDisplayMeal() {
        this.displayedMeal = null;
    }

    editedMeal: Meal = null;
    editMeal(mealToEdit: Meal) {
        this.editedMeal = mealToEdit;
        this.closeDisplayMeal();
    }
    closeEditMeal() {
        this.editedMeal = null;
    }

    addNewMeal(mealToAdd: Meal) {
        this.testMeals.push(mealToAdd);
    }
}
