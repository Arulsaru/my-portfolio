import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faAngular,
  faJs,
  faNodeJs,
  faDocker,
  faReact,
  faPython,
  faPhp,
  faGit,
  faAws,
  // faDatabase,
  faCss3Alt,
  faJava,
  faGithub,
  // faMongoDB,
  faJenkins,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  faAngular = faAngular;
  faJs = faJs;
  faNodeJs = faNodeJs;
  faDocker = faDocker;
  faReact = faReact;
  faPython = faPython;
  faPhp = faPhp;
  faGit = faGit;
  faAws = faAws;
  // faDatabase = faDatabase;
  faCss = faCss3Alt;
  faJava = faJava;
  faGithub = faGithub;
  faJenkins = faJenkins;
}
