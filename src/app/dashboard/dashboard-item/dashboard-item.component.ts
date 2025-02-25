import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css'
  // host: {
  //   class: 'dashboard-item'
  // }
})
export class DashboardItemComponent {
  @Input({required: true}) image!: {source: string, alt: string};
  // @Input({required: true}) title!: string;
  
  // Alternative declaration using signals
  // image = input.required<{source: string, alt: string}>();
  title = input.required<string>();

}
