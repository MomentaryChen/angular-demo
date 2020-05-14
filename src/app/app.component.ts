import { Component } from '@angular/core';
import { NbSidebarService, NbMenuItem } from '@nebular/theme';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-demo';

  constructor(private sidebarService: NbSidebarService) {
  }

  public topics: NbMenuItem[] = [
    {
      title: '題目列表',
      expanded: true,
      children: [
        {
          title: 'Python第一次上課 20/09',
          children: [{ title: 'Hello World!' }, { title: '基本加法' }]
        },
        {
          title: 'Python第二周09/27',
        },
        {
          title: 'Python第二周09/30',
        },
      ],
    }
  ];


}
