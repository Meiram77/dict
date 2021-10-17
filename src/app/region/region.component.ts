import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Region} from "./region.interface";


@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name: string
  // 1)  мы создаем поле ктоорое определяет событие
  @Output() onAddedRegion:EventEmitter<Region> = new EventEmitter<Region>();

  addRegion(event: any){
    const region: Region = {
      name: this.name
    }
// 2) вызываем событие
    this.onAddedRegion.emit(region)
  }

}
