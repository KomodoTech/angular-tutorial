import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Meal } from "./meal.model";

@Component({
    selector: "meal-edit",
    template: `
    <div *ngIf="editMeal">
        <h1>Meal Edit:</h1>
        <div>
            <label>Enter Meal Name:</label>
            <input [(ngModel)]="editMeal.name">
        </div>
        <div>
            <label>Enter Meal Details:</label>
            <input [(ngModel)]="editMeal.details">
        </div>
        <div>
            <label>Enter Meal Calories:</label>
            <input [(ngModel)]="editMeal.calories">
        </div>
        <button class="btn btn-danger" (click)="closeEdit()">Done</button>
    </div>
    `
})

export class MealEditComponent {
    @Input() editMeal: Meal;

    @Output() closeEditSender = new EventEmitter();
    closeEdit() {
        this.closeEditSender.emit();
    }
}
