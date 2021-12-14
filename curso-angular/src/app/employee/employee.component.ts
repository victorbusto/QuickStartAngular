import { Component } from "@angular/core";
import { Employee } from "./employee";

@Component({
    selector: "employee",
    templateUrl: './employee.component.html'
})
export class EmployeeComponent{
    public component_name = 'Componente Empleado';
    public employee:Employee;
    public workers:Array<Employee>;
    public external_worker:boolean;
    public color:string;
    public selected_color:string;

    constructor(){
        this.employee = new Employee('Victor Busto', 23, 'Software Engineer', true);
        this.workers = [
            new Employee('Manolo Perez', 22, 'Financer', false),
            new Employee('Jesus Moreno', 62, 'Chef', true),
            new Employee('Diego Busto', 31, 'Officer', false)
        ]
        this.external_worker = false;
        this.color = 'red';
        this.selected_color = '#ccc';
    }

    ngOnInit() {
        console.log(this.employee);
        console.log(this.workers);
    }

    changeExternal(value:any) {
        this.external_worker = value;
    }
    selectColorLog() {
        alert(this.selected_color);
    }
}