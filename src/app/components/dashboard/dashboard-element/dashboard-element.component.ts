import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-element',
  templateUrl: './dashboard-element.component.html',
  styleUrls: ['./dashboard-element.component.css']
})
export class DashboardElementComponent {

  @Input()
  iconName: string = '';

  @Input()
  title: string = '';

  @Input()
  routeL: string = '';


}
