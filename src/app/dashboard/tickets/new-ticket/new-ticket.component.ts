import { Component, ElementRef, ViewChild } from '@angular/core';
import { ControlComponent } from "../../../shared/control/control.component";
import { ButtonComponent } from "../../../shared/button/button.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ControlComponent, ButtonComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {
  @ViewChild('myForm') myFormVar?: ElementRef<HTMLFormElement>;


  onSubmit(title: string, ticketText: string) {
    console.log('New ticket submitted');
    console.log('Title:', title);
    console.log('Text:', ticketText);


    this.myFormVar?.nativeElement.reset();
  }

}
