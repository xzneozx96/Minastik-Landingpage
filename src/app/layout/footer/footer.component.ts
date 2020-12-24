import { Component, OnInit } from '@angular/core';
import { ScrollIntoViewService } from 'src/app/shared/services/scroll-into-view.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(
    private scrollIntoViewService: ScrollIntoViewService,
  ) { }

  ngOnInit(): void {
  }

  selectElement(elementID: string): void {
    this.scrollIntoViewService.scrollIntoView(elementID);
  }

}
