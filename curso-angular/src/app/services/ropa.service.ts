import { Injectable } from "@angular/core";

@Injectable()
export class RopaService {
    public nombre_prenda = 'Pantalanoes vauqeros'

    prueba() {
        return this.nombre_prenda;
    }
}