import { Component, OnInit } from '@angular/core';
import 'jquery';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  tabs = [
    {
      name: 'View All',
      filterAttr: '*',
    },
    {
      name: 'E-Commerce',
      filterAttr: '.commerce',
    },
    {
      name: 'Business',
      filterAttr: '.business',
    },
    {
      name: 'Wordpress',
      filterAttr: '.wordpress',
    }
  ];

  listData = [
    {
      img1: 'https://www.elegantthemes.com/images/divi/layouts/pack-1-3.jpg', img2: 'https://www.elegantthemes.com/images/divi/layouts/pack-1-1.jpg', img3: 'https://www.elegantthemes.com/images/divi/layouts/pack-1-2.jpg', category: 'E-Commerce', filterAttr: 'commerce'
    },
    {
      img1: 'https://www.elegantthemes.com/images/divi/layouts/pack-2-3.jpg', img2: 'https://www.elegantthemes.com/images/divi/layouts/pack-2-1.jpg', img3: 'https://www.elegantthemes.com/images/divi/layouts/pack-2-2.jpg', category: 'Business', filterAttr: 'business',
    },
    {
      img1: 'https://www.elegantthemes.com/images/divi/layouts/pack-3-4.jpg', img2: 'https://www.elegantthemes.com/images/divi/layouts/pack-3-1.jpg', img3: 'https://www.elegantthemes.com/images/divi/layouts/pack-3-2.jpg', category: 'Wordpress', filterAttr: 'wordpress',
    },
    {
      img1: 'https://www.elegantthemes.com/images/divi/layouts/pack-9-4.jpg', img2: 'https://www.elegantthemes.com/images/divi/layouts/pack-9-1.jpg', img3: 'https://www.elegantthemes.com/images/divi/layouts/pack-9-3.jpg', category: 'Wordpress', filterAttr: 'wordpress',
    },
    {
      img1: 'https://www.elegantthemes.com/images/divi/layouts/pack-11-3.jpg', img2: 'https://www.elegantthemes.com/images/divi/layouts/pack-11-1.jpg', img3: 'https://www.elegantthemes.com/images/divi/layouts/pack-11-2.jpg', category: 'E-Commerce', filterAttr: 'commerce',
    },
    {
      img1: 'https://www.elegantthemes.com/images/divi/layouts/pack-4-4.jpg', img2: 'https://www.elegantthemes.com/images/divi/layouts/pack-4-1.jpg', img3: 'https://www.elegantthemes.com/images/divi/layouts/pack-4-2.jpg', category: 'E-Commerce', filterAttr: 'commerce',
    },
    {
      img1: 'https://www.elegantthemes.com/images/divi/layouts/pack-12-3.jpg', img2: 'https://www.elegantthemes.com/images/divi/layouts/pack-12-5.jpg', img3: 'https://www.elegantthemes.com/images/divi/layouts/pack-12-2.jpg', category: 'Business', filterAttr: 'business',
    },
    {
      img1: 'https://www.elegantthemes.com/images/divi/layouts/pack-10-2.jpg', img2: 'https://www.elegantthemes.com/images/divi/layouts/pack-10-3.jpg', img3: 'https://www.elegantthemes.com/images/divi/layouts/pack-10-5.jpg', category: 'Business', filterAttr: 'business',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }


  filtering(value: string): void {
    ($('.grid') as any).isotope({ filter: value });
  }

}
