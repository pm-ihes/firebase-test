import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firebase-test';

  @HostListener('window:beforeunload', ['$event'])
  unloadHandler(event: Event): void {
    localStorage.clear();
  }
}
