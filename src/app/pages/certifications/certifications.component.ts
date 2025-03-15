import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css'],
})
export class CertificationsComponent {
  certifications = [
    {
      title: 'SQL',
      organization: 'HackerRank',
      image: 'assets/certifications/images/sql_basic_certificate.png',
      pdf: 'assets/certifications/pdf/sql_basic_certificate.pdf',
    },
    {
      title: 'Java',
      organization: 'HackerRank',
      image: 'assets/certifications/images/java_basic_certificate.png',
      pdf: 'assets/certifications/pdf/java_basic_certificate.pdf',
    },
    {
      title: 'JavaScript',
      organization: 'HackerRank',
      image: 'assets/certifications/images/javascript_basic_certificate.png',
      pdf: 'assets/certifications/pdf/javascript_basic_certificate.pdf',
    },
    {
      title: 'Software Intern',
      organization: 'HackerRank',
      image: 'assets/certifications/images/software_intern_certificate.png',
      pdf: 'assets/certifications/pdf/software_intern_certificate.pdf',
    },
    {
      title: 'HTML & CSS',
      organization: 'Udemy',
      image: 'assets/certifications/images/html_css_udemy_certificate.png',
      pdf: 'assets/certifications/pdf/html_css_udemy_certificate.pdf',
    },
    {
      title: 'JavaScript',
      organization: 'Udemy',
      image: 'assets/certifications/images/javascript_udemy_certificate.jpg',
      pdf: 'assets/certifications/pdf/javascript_udemy_certificate.pdf',
    },
  ];

  // Get unique organizations (Issuing Bodies)
  getUniqueOrganizations(): string[] {
    return [...new Set(this.certifications.map((cert) => cert.organization))];
  }

  // Get certifications by organization
  getCertificationsByOrg(organization: string) {
    return this.certifications.filter(
      (cert) => cert.organization === organization
    );
  }

  // Get the middle index to split organizations into two columns
  get halfLength(): number {
    return Math.ceil(this.getUniqueOrganizations().length / 2);
  }

  click(): void {
    console.log('ads');
  }
}
