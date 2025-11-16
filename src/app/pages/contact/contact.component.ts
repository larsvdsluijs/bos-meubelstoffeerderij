import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  onSubmit(form: NgForm) {
    // Placeholder submit handling
    console.log('Contact form submitted', form.value);
    alert('Bedankt! We nemen zo snel mogelijk contact met u op.');
    form.resetForm();
  }
}


