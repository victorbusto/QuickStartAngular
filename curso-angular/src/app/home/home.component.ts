import { Component } from "@angular/core";
import { RopaService } from "../services/ropa.service";

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    providers: [RopaService]
})
export class HomeComponent {
    public title = "Página Principal";

    public fecha;

    constructor(
        private _ropaService: RopaService
    ) {
        this.fecha = new Date(2014,4,5);
    }

    ngOnInit() {
        console.log(this._ropaService.prueba());
    }
}