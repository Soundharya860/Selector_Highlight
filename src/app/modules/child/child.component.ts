import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnChanges {
  @Output() sumNumberValue: EventEmitter<number> = new EventEmitter();
  @Input() value1: number = 0;
  @Input() value2: number = 0;

ngOnChanges(Simplechanges:SimpleChanges) {
  if(Simplechanges['value1']?.currentValue || Simplechanges['value2']?.currentValue) {
    this.addValue();
  }
}
  addValue() {
    let value = this.value1 + this.value2;
    this.sumNumberValue.emit(value);
  }
}
