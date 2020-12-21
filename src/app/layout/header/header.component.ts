import { Component, OnInit } from '@angular/core';
import { ScrollIntoViewService } from 'src/app/shared/services/scroll-into-view.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logoLink = 'http://pixner.net/mosto/demo/ltr/light/assets/images/logo/logo2.png';
  activeBars = false;

  constructor(private scrollIntoViewService: ScrollIntoViewService) { }

  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      const headerElement = document.getElementById('header');
      if (window.scrollY > 100) {
        headerElement.classList.add('sticky');
        this.logoLink = 'http://pixner.net/mosto/demo/ltr/light/assets/images/logo/logo.png';
      } else {
        headerElement.classList.remove('sticky');
        this.logoLink = 'http://pixner.net/mosto/demo/ltr/light/assets/images/logo/logo2.png';
      }
    });
  }

  addActiveClass(): void {
    const headerElement = document.getElementById('header');
    const overlayElement = document.getElementById('overlay');
    this.activeBars = !this.activeBars;
    if (!overlayElement.classList.contains('active') && headerElement.classList.contains('sticky')) {
      this.logoLink = 'http://pixner.net/mosto/demo/ltr/light/assets/images/logo/logo.png';
    }
    else if (!overlayElement.classList.contains('active') && !headerElement.classList.contains('sticky')) {
      this.logoLink = 'http://pixner.net/mosto/demo/ltr/light/assets/images/logo/logo.png';
    }
    else if (overlayElement.classList.contains('active') && !headerElement.classList.contains('sticky')) {
      this.logoLink = 'http://pixner.net/mosto/demo/ltr/light/assets/images/logo/logo2.png';
    }
  }

  selectElement(elementID: string): void {
    this.scrollIntoViewService.scrollIntoView(elementID);
    this.activeBars = false;
  }

}
