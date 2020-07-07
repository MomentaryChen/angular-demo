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

  public coursesAndProblems: NbMenuItem[] = [];

  public courses: NbMenuItem[] = [];

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
            console.log(this.coursesAndProblems);
          }
        )
      }
    )
  }

  public swithGradesMenu() {
    this.showGradesMenu = true;
    this.showResultsMenu = false;
    this.router.navigate(['./grade']);
  }

  public swithResultsMenu() {
    this.showGradesMenu = false;
    this.showResultsMenu = true;
    this.router.navigate([`./details`, this.coursesAndProblems[0].children[0].title]);
  }
}
