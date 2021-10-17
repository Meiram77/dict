import { Component } from '@angular/core';
import {Region} from "./region/region.interface";
import {Department} from "./departament/departament.interface";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  departments: Array<Department> = [];
  regions: Array<Region> = [];
  // 4) вызывается когда происходит событие
  regionAdded (region: any){
    this.regions.push(region)
  };

  departmentAdded(department: any){
      this.departments.push(department)
  }

  title = 'dict';
}
