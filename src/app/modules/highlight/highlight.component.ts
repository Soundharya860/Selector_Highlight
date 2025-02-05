import { Component } from "@angular/core";

@Component({
  selector: '[appHighlight]',
  template: `<p><ng-content></ng-content></p>`,
  styles: [`p { color: #6495ed; font-weight: bold; font-size: 20px;text-align: center; }`],
  standalone: true
})
export class HighlightComponent { }