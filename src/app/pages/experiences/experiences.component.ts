import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.css',
})
export class ExperiencesComponent {
  // Tracks the currently selected role (default is the first one)
  selectedIndex = 0;

  // Array containing experience details
  experiences = [
    {
      title: 'Full Stack Developer',
      duration: 'Jun 2023 - Present',
      description: [
        'Engaged in end-to-end development life cycle seamlessly integrating Angular for the frontend, Spring Boot for backend, and MongoDB for efficient data storage.',
        'Collaborated with cross-functional teams, including designers and QA engineers, to ensure the successful delivery of high-quality software within project timelines.',
        'Committed to fostering professional growth through mentorship.',
      ],
    },
    {
      title: 'On-Job Training',
      duration: 'Mar 2023 - May 2023',
      description: [
        'I have been a part of the engineering team with the intention of deepening my expertise in technical aspects and enhancing practical knowledge and business cases in TrusTrace.',
        'Engaged in the complete software development lifecycle.',
        'Applied theoretical knowledge to real-world projects by exploring the product and business context',
        'Engaged in debugging and troubleshooting efforts to ensure smooth project workflow and a strong base',
        // 'Participated in Agile methodologies, contributing to sprint planning, daily stand-ups, and retrospective meetings',
      ],
    },
    {
      title: 'Software Engineer Internship',
      duration: 'Aug 2022 - Feb 2023',
      description: [
        'Trained by an external trainer concerning software technologies along with full-stack frameworks',
        'Familiarized with both front-end and back-end technologies by contributing to various personal and office-related projects',
      ],
    },
  ];
}
