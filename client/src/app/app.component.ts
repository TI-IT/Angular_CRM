import { Component } from '@angular/core';
import { IProduct } from './models/products';
import { products as data } from './data/products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Title Tigra';

  product: IProduct[] = data;
  // now: Date = new Date();
  // arr = [1, 2, 3, 4, 5, 6, 7];

  // objs = [
  //   {
  //     title: 'post1',
  //     author: 'Tigran',
  //     comments: [
  //       {
  //         name: 'Max',
  //         text: 'lorem1',
  //       },
  //       {
  //         name: 'Max',
  //         text: 'lorem1',
  //       },
  //       {
  //         name: 'Max',
  //         text: 'lorem1',
  //       },
  //     ],
  //   },
  //   {
  //     title: 'post2',
  //     author: 'Tigran',
  //     comments: [
  //       {
  //         name: 'Max',
  //         text: 'lorem1',
  //       },
  //       {
  //         name: 'Max',
  //         text: 'lorem1',
  //       },
  //       {
  //         name: 'Max',
  //         text: 'lorem1',
  //       },
  //     ],
  //   },
  // ];
  // backgroundToggle = false;
  // toggle: any = false;
}
