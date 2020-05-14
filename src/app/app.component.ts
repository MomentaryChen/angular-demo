import { Component } from '@angular/core';
import { NbSidebarService, NbMenuItem } from '@nebular/theme';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-demo';
  showGradesMenu = true;
  showResultsMenu = false;
  constructor(private sidebarService: NbSidebarService) {
  }

  public topics: NbMenuItem[] = [
    {
      title: 'Python第一次上課 20/09',
      children: [{
        title: 'Hello World!',
        link: './ga',
      },
      { title: '基本加法' }]
    },
    {
      title: 'Python第二周09/27',
    },
    {
      title: 'Python第二周09/30',
    }
  ];

  public courses: NbMenuItem[] = [
    {
      title: 'Python第一次上課 20/09',
      link: './details',
    },
    {
      title: 'Python第二周09/27',
    },
    {
      title: 'Python第二周09/30',
    },
  ];

  public swithGradesMenu() {
    this.showGradesMenu = true;
    this.showResultsMenu = false;
  }

  public swithResultsMenu() {
    this.showGradesMenu = false;
    this.showResultsMenu = true;
  }



}
