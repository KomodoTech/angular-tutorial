import { Pipe, PipeTransform } from "@angular/core";
import { Meal } from "./meal.model";

@Pipe({
  name: "calories",
  pure: false
})

export class CaloriesPipe implements PipeTransform {
  transform(input: Meal[], caloriesOption) {
    var cutoff = 500;
    var output: Meal[] = [];
    if(caloriesOption === "high") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories >= cutoff) {
          output.push(input[i]);
        }
      }
      return output;
  } else if (caloriesOption === "low") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories < cutoff) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
