import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgIf],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: '',
  };
  loading = false;

  email = 'saruarul154@gmail.com';

  onSubmit(): void {
    this.loading = true;

    const serviceID = 'service_c7neqo1';
    const templateID = 'template_dbpjekm';
    const publicKey = 'PybH4OD4pFvsK9pGb';

    const templateParams = {
      from_name: this.formData.name,
      from_email: this.formData.email,
      message: this.formData.message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        this.loading = false;
        this.formData = { name: '', email: '', message: '' };
        Swal.fire({
          icon: 'success',
          title: `Hey ${this.formData.name}! 👋`,
          text: 'I’ve got your message — I’ll get back to you shortly!',
          confirmButtonColor: '#2563eb',
          confirmButtonText: 'Okay, got it!',
        });
      })
      .catch((err) => {
        this.loading = false;
        Swal.fire({
          icon: 'error',
          title: 'Oops! ❌',
          text: 'Well, that’s awkward 😅 Something failed. Please retry.',
          confirmButtonColor: '#ef4444', // Tailwind red-500
          confirmButtonText: 'Okay, got it!',
          footer:
            '<a href="https://www.linkedin.com/in/arulmozhi-k/" target="_blank" style="color: #3b82f6; font-weight: bold; text-decoration: underline; text-bold">Connect with me on LinkedIn...</a>',
        });
      });
  }
}
