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
      title:
        'From Classrooms🏫 to Codebases 🧑‍💻 My Journey into Software Development 🚀',
      summary:
        'Life has a way of surprising us, doesn’t it? A few years ago, I was juggling biology...',
      link: 'https://medium.com/@arulmozhi-karunagaran/from-classrooms-to-codebases-3b0aa197dcc4',
    },
    {
      title: 'Review Code, Even If You’re a Junior 🐞',
      summary:
        'As a junior developer, I used to hesitate before reviewing PRs.. The very first time I was asked to review the code, I froze. “How am I supposed to...',
      link: 'https://medium.com/@arulmozhi-karunagaran/review-code-even-if-youre-a-junior-93793798bc54',
    },
    {
      title: 'ChatGPT, Copilot & Me: How AI is Saving Junior Developers! 🚀',
      summary:
        '“Dev life is just copying Stack Overflow answers and hoping it works.” — Everyone, at some point. 😅 Let’s be honest...',
      link: 'https://medium.com/@arulmozhi-karunagaran/chatgpt-copilot-me-how-ai-is-saving-junior-developers-087a30f74a60',
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
