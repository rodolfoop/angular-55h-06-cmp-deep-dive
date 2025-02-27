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
  // private myFormVar = viewChild.required<ElementRef<HTMLFormElement>>('myForm');
  // @Output() add = new EventEmmitter();

  // Modern way of emitting events
  add = output<{title: string; text: string}>();

  onSubmit(title: string, ticketText: string) {
    this.add.emit({title, text: ticketText});
    this.myFormVar?.nativeElement.reset();
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
