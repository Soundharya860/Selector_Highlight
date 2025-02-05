import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HighlightComponent } from "./modules/highlight/highlight.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HighlightComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Selector_Highlight';
}
