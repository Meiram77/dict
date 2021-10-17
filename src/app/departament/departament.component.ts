import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Department} from "./departament.interface";


@Component({
  selector: 'app-departament',
  templateUrl: './departament.component.html',
  styleUrls: ['./departament.component.css']
})
export class DepartamentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  name: string
  //1) we are creating field which define Event
  @Output() onAddedDepartment: EventEmitter<Department> = new EventEmitter<Department>();


  addDepartment(event:any){
    const department: Department = {
      name: this.name
    }
    //2) we are calling event
    this.onAddedDepartment.emit(department)
  }

}
