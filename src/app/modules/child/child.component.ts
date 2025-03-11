import { Component,HostListener } from '@angular/core';

@Component({
  standalone:true,
  selector: 'div[container-resizer]', // This makes it an attribute selector
  templateUrl:'child.component.html', // Allows the div content to be preserved
  styles: [`
    :host {
      display: block;
      border: 2px solid black;
      resize: both;
      overflow: auto;
      padding: 10px;
    }
    :host(:hover) {
      border-color: blue;
    }
  `]
})
export class ContainerResizerComponent {
  @HostListener('mouseenter') onMouseEnter() {
    console.log('Mouse entered the resizable container');
  }
      
  @HostListener('mouseleave') onMouseLeave() {
    console.log('Mouse left the resizable container');
  }
}
