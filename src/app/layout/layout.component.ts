import { Component, OnInit } from '@angular/core';
import { ScrollIntoViewService } from '../shared/services/scroll-into-view.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(
    private scrollIntoViewService: ScrollIntoViewService
  ) { }

  ngOnInit(): void {
    this.scrollIntoViewService.selectedElement.subscribe(elementID => {
      if (elementID) {
        const selectedElement = document.getElementById(elementID);
        selectedElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

}
