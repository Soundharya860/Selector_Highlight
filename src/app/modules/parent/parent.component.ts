import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Required for standalone components



@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [CommonModule, FormsModule], // Import ContainerResizerComponent
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  increaseValue() {   
    this.count.update(value => value + 1);
  }
  count = signal(10);
  count1 = computed(() => this.count() + 1);
  count2 = computed(() => this.count() + 2);
}
