import { Component, output } from '@angular/core';
import { ChildComponent } from "../child/child.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent, FormsModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  value1: number = 0;
  value2: number = 0;

  showSumValues: any ;
}
