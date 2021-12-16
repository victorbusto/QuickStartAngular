import { Component } from '@angular/core';
import { Car } from './car';
import { SkillMatrixService } from '../services/skill-matrix.service';

@Component({
    selector: 'car',
    templateUrl: 'car.component.html',
    providers: [SkillMatrixService]
})
export class CarComponent {
    public car: Car;
    public cars:Array<Car>;

    constructor(
        private _skillMatrixService: SkillMatrixService
    ) {
        console.log(_skillMatrixService);
        this.car = new Car("",0,"");
        this.cars = [
            new Car("Seat Panda", 40, "Crema"),
            new Car("Peugeot 307", 136, "Gris")
        ];
     }

     onSubmit(){
         this.cars.push(this.car);
     }
}