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
      duration: '🗓️ Jun 2023 – Present',
      description: [
        'Developed and maintained scalable web applications using <strong>Angular</strong>, <strong>Spring Boot</strong>, and <strong>MongoDB</strong>.',
        'Delivered features from UI implementation to backend logic and data modeling.',
        'Collaborated with cross-functional teams to ship clean, user-friendly features within <strong>Agile Sprints</strong>.',
        '<strong>Mentored junior developers</strong> on best practices and team workflows.',
        'Contributed to performance tuning, bug fixes, and <strong>code reviews</strong> to maintain high quality.',
      ],
    },
    {
      title: 'On-Job Training',
      duration: '🗓️ Mar 2023 - May 2023',
      description: [
        'Joined the Engineering team at <strong>TrusTrace</strong> with a focus on deepening technical expertise and applying practical knowledge in real-world business scenarios.',
        'Involved in the complete <strong>software development lifecycle</strong>, gaining hands-on experience across product modules.',
        'Explored the product architecture and business logic to bridge the gap between <strong>theory and practice</strong>.',
        'Participated in <strong>debugging</strong> and troubleshooting sessions to ensure smooth development and a stable codebase.',
        'Contributed to sprint planning and daily team activities, aligning with <strong>Agile practices</strong> and workflows.',
      ],
    },
    {
      title: 'Software Engineer Internship',
      duration: '🗓️ Aug 2022 - Feb 2023',
      description: [
        'Underwent structured training by external mentors, gaining foundational knowledge in <strong>full-stack development</strong> and modern software practices.',
        'Explored both <strong>frontend</strong> and <strong>backend technologies</strong> by contributing to hands-on projects within the organization.',
        'Worked on <strong>personal and internal tools</strong>, applying newly learned concepts to real use cases.',
        'Built core programming skills, participated in code reviews, and strengthened understanding of application architecture.',
      ],
    },
  ];
}
