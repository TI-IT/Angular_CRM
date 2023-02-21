import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  now: Date = new Date();
  arr = [1, 2, 3, 4, 5, 6, 7];

  objs = [
    {
      title: 'post1',
      author: 'Tigran',
      comments: [
        {
          name: 'Max',
          text: 'lorem1',
        },
        {
          name: 'Max',
          text: 'lorem1',
        },
        {
          name: 'Max',
          text: 'lorem1',
        },
      ],
    },
    {
      title: 'post2',
      author: 'Tigran',
      comments: [
        {
          name: 'Max',
          text: 'lorem1',
        },
        {
          name: 'Max',
          text: 'lorem1',
        },
        {
          name: 'Max',
          text: 'lorem1',
        },
      ],
    },
  ];
  // backgroundToggle = false;
  toggle: any = false;
}
