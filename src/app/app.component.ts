import { Component } from '@angular/core';
import { NbSidebarService, NbMenuItem } from '@nebular/theme';
import { AppService } from './app.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-demo';
  showGradesMenu = true;
  showResultsMenu = false;
  constructor(private sidebarService: NbSidebarService, private appService: AppService,
    private router: Router) {
  }

  public coursesAndProblems: NbMenuItem[] = [
    {
      title: 'Python第一次上課 20/09',
      children: [{
        title: 'Hello World!',
        link: './ga',
      }]
    }];

  public courses: NbMenuItem[] = [
    {
      title: 'Python第一次上課 20/09',
      link: './details',
    }
  ];

  ngOnInit(): void {
    this.appService.getAssignmentList().subscribe(
      results => {
        results.forEach(
          element => {
            let problem: NbMenuItem[] = [];
            if (element.problem) {
              element.problem.forEach(p => {
                problem.push({
                  title: p,
                  // children: problem
                  link: './details/' + p
                });
              });
            }
            this.coursesAndProblems.push(
              {
                title: element.assignment,
                children: problem
              }
            )
            this.courses.push(
              {
                title: element.assignment,
                link: `./details?problem=${element.assignment}`
              }
            )
          }
        )
      }
    )
  }

  public swithGradesMenu() {
    this.showGradesMenu = true;
    this.showResultsMenu = false;
    this.router.navigate(['./errorTypeChart']);
  }

  public swithResultsMenu() {
    this.showGradesMenu = false;
    this.showResultsMenu = true;
    this.router.navigate([`./details`, this.courses[0].title]);
  }
}
