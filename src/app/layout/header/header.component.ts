import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ScrollIntoViewService } from 'src/app/shared/services/scroll-into-view.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  logoLink =
    'http://pixner.net/mosto/demo/ltr/light/assets/images/logo/logo2.png';
  activeBars = false;
  activeList: boolean = false;
  language: string = 'VI';
  constructor(
    private scrollIntoViewService: ScrollIntoViewService,
    public translate: TranslateService
  ) {}

  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      const headerElement = document.getElementById('header');
      if (window.scrollY > 100) {
        headerElement.classList.add('sticky');
      } else {
        headerElement.classList.remove('sticky');
      }
    });
  }

  addActiveClass(): void {
    const headerElement = document.getElementById('header');
    const overlayElement = document.getElementById('overlay');
    this.activeBars = !this.activeBars;
  }

  selectElement(elementID: string): void {
    this.scrollIntoViewService.scrollIntoView(elementID);
    this.activeBars = false;
  }

  showListLang(): void {
    this.activeList = !this.activeList;
  }

  chooseEN() {
    this.activeList = false;
    this.language = 'EN';
    this.translate.use('en');
  }

  chooseVI() {
    this.activeList = false;
    this.language = 'VI';
    this.translate.use('vi')
  }
}
