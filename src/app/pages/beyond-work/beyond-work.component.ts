import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-beyond-work',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './beyond-work.component.html',
  styleUrls: ['./beyond-work.component.css'],
})
export class BeyondWorkComponent {
  activeTab: string = 'profiles'; // Default tab
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  showScrollUp = false;
  showScrollDown = true;

  profiles = [
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/arulmozhi-k/',
      icon: 'assets/icons/linkedin.svg',
    },
    {
      name: 'GitHub',
      link: 'https://github.com/Arulsaru/',
      icon: 'assets/icons/github.svg',
    },
    {
      name: 'LeetCode',
      link: 'https://leetcode.com/u/Arulsaru/',
      icon: 'assets/icons/leetcode.svg',
    },
    {
      name: 'HackerRank',
      link: 'https://www.hackerrank.com/profile/191EC112',
      icon: 'assets/icons/hackerrank.svg',
    },
  ];

  blogs = [
    {
      title: '5 Lessons from Working at a Startup 🚀',
      summary:
        'From late-night deploys to product pivots — here’s what startup life taught me.',
      link: 'https://medium.com/@yourprofile/your-blog-1',
    },
    {
      title: 'Debugging Like a Pro 🐞',
      summary:
        'Break down bugs without breaking down. Techniques that saved my dev life.',
      link: 'https://medium.com/@yourprofile/your-blog-2',
    },
    {
      title: 'Angular + Tailwind: A Match Made in Heaven 💅',
      summary: 'Why this combo is 🔥 for building fast and beautiful UIs.',
      link: 'https://medium.com/@yourprofile/your-blog-3',
    },
    {
      title: 'Angular + Tailwind: A Match Made in Heaven 💅',
      summary: 'Why this combo is 🔥 for building fast and beautiful UIs.',
      link: 'https://medium.com/@yourprofile/your-blog-3',
    },
    {
      title: 'Angular + Tailwind: A Match Made in Heaven 💅',
      summary: 'Why this combo is 🔥 for building fast and beautiful UIs.',
      link: 'https://medium.com/@yourprofile/your-blog-3',
    },
    {
      title: 'Angular + Tailwind: A Match Made in Heaven 💅',
      summary: 'Why this combo is 🔥 for building fast and beautiful UIs.',
      link: 'https://medium.com/@yourprofile/your-blog-3',
    },
  ];

  strengths = [
    { name: 'Problem Solving', icon: 'assets/strengths/problem-solving.png' },
    { name: 'Creativity', icon: 'assets/strengths/creativity.png' },
    { name: 'Adaptability', icon: 'assets/strengths/adaptability.png' },
    { name: 'Time Management', icon: 'assets/strengths/time-management.png' },
  ];

  softSkills = [
    { name: 'Communication', icon: 'assets/soft-skills/communication.png' },
    { name: 'Teamwork', icon: 'assets/soft-skills/teamwork.png' },
    { name: 'Leadership', icon: 'assets/soft-skills/leadership.png' },
    {
      name: 'Critical Thinking',
      icon: 'assets/soft-skills/critical-thinking.png',
    },
  ];

  scrollBlogs(direction: 'up' | 'down') {
    const scrollAmount = 200; // You can adjust this
    const container = this.scrollContainer.nativeElement;

    container.scrollBy({
      top: direction === 'up' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  }
}
