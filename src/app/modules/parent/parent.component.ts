import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Required for standalone components
import { ContainerResizerComponent } from '../child/child.component';


@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [CommonModule, FormsModule, ContainerResizerComponent], // Import ContainerResizerComponent
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {}
