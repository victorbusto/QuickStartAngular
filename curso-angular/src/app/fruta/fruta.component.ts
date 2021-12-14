import { Component } from "@angular/core";

@Component({
    selector: 'fruta',
    templateUrl: './fruta.component.html'
})
export class FrutaComponent{
    public component_name = 'Componente de fruta';
    public fruits_list = 'Naranja, Manzana, Pera y Sandia';
    
    public name:string;
    public age:number;
    public legalAge:boolean;
    public jobs:Array<any> = ['Musico', 2, 'Software Engineer'];
    public joker:any = 'Cualquier tipo de dato';

    constructor() {
        this.name = "Victor";
        this.age = 23;
        this.legalAge = true;

        // mala practica llamar metodos dentro constructor -> utilizar ngOnInit
        // this.changeAge();
        // alert(this.name);
    }

    ngOnInit() {
        this.changeAge();

        // Variables y alcance
        var uno = 8;
        var dos = 15;

        if (uno === 8) {
            let uno = 3;
            var dos = 88;

            console.log("DRNTOR DEL IF: " +uno+" "+dos);
        }

        console.log("FUERA DEL IF: " +uno+" "+dos);
    }

    changeAge() {
        this.age = 22;
    }
}