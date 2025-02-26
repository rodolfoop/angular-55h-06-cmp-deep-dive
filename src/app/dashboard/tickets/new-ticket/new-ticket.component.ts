import { Component } from '@angular/core';
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

  onSubmit(title: string, ticketText: string, myForm: HTMLFormElement) {
    console.log('New ticket submitted');
    console.log('Title:', title);
    console.log('Text:', ticketText);
    myForm.reset();
  }

}
