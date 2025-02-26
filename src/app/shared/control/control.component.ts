import {
  Component,
  ContentChild,
  contentChild,
  ElementRef,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',
  },
})
export class ControlComponent {
  label = input.required();
  private el = inject(ElementRef);
  // @ContentChild('myInput') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;
  private control = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('myInput');

  onClick() {
    console.log('Control clicked');
    console.log(this.el);
    // console.log(this.control); // For @ContentChild
    console.log(this.control());  // For contentChild
  }
}
