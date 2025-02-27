import { AfterViewInit, Component, ElementRef, OnInit, output, ViewChild } from '@angular/core';
import { ControlComponent } from '../../../shared/control/control.component';
import { ButtonComponent } from '../../../shared/button/button.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ControlComponent, ButtonComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent implements OnInit, AfterViewInit{
  @ViewChild('myForm') myFormVar?: ElementRef<HTMLFormElement>;
  // non-signal properties
  enteredTitle = '';
  enteredText = '';

  // Modern way of emitting events
  add = output<{title: string; request: string}>();

  onSubmit() {
    this.add.emit({title: this.enteredTitle, request: this.enteredText});
    // this.myFormVar?.nativeElement.reset();
    this.enteredTitle = '';
    this.enteredText = '';
  }

  ngOnInit(): void {
    console.log("ON INIT - this.myFormVar?.nativeElement");
    console.log(this.myFormVar?.nativeElement); // The element is not available here yet.
  }
  ngAfterViewInit(): void {
    console.log("AFTER VIEW INIT - this.myFormVar?.nativeElement");
    console.log(this.myFormVar?.nativeElement);
  }
}
