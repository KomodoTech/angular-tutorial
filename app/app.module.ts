import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { MealListComponent } from "./meal-list.component";
import { MealDisplayComponent } from "./meal-display.component";
import { MealEditComponent } from "./meal-edit.component";
import { MealNewComponent } from "./meal-new.component";
import { CaloriesPipe } from "./calories.pipe";

@NgModule({
    imports:        [BrowserModule,
                    FormsModule],

    declarations:   [AppComponent,
                    MealListComponent,
                    MealDisplayComponent,
                    MealEditComponent,
                    MealNewComponent,
                    CaloriesPipe],

    bootstrap:      [AppComponent]
})

export class AppModule {
}
