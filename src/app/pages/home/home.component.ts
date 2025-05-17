import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  showResumeUnavailablePopUp(): void {
    Swal.fire({
      position: 'center',
      icon: 'warning',
      title:
        'Resume under construction 🚧, Until then, this portfolio gives you a complete look at who I am 👨‍💻',
      showConfirmButton: false,
      timer: 3500,
    });
  }
}
