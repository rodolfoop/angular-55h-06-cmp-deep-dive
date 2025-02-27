import { Component, input, output, signal } from '@angular/core';
import { NewTicketComponent } from "../new-ticket/new-ticket.component";
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [NewTicketComponent],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  data = input.required<Ticket>();
  closeEvent = output();
  detailsVisible = signal(false);

  onToggleDetails() {
    // option 1:
    // this.detailsVisible.set(!this.detailsVisible);

    // option 2:
    this.detailsVisible.update((wasVisible) => !wasVisible);
  }

  onMarkAsCompleted() {
    this.closeEvent.emit();
  }
}
