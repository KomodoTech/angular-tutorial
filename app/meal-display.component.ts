import { Component, Input, Output, EventEmitter} from "@angular/core";
import { Meal } from "./meal.model";

@Component({
    selector: "meal-display",
    template: `
    <div *ngIf="displayMeal">
        <h1>Meal Display:</h1>
        <h2>{{ displayMeal.name }}</h2>
        <div *ngIf="displayMeal.details">
            <h3>{{ displayMeal.details }}</h3>
        </div>
        <h1>Calories: {{ displayMeal.calories }}</h1>
        <button class="btn btn-warning" (click)="editMeal()">Edit</button>
        <button class="btn btn-danger" (click)="closeDisplay()">Close</button>
    </div>
    `
})

export class MealDisplayComponent {
    @Input() displayMeal: Meal;

    @Output() closeDisplaySender = new EventEmitter();
    closeDisplay() {
        this.closeDisplaySender.emit();
    }

    @Output() editMealSender = new EventEmitter();
    editMeal() {
        this.editMealSender.emit(this.displayMeal);
    }
}
