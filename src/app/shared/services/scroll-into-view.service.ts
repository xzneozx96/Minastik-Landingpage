import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollIntoViewService {
  selectedElement = new BehaviorSubject<any>(null);

  constructor() { }

  scrollIntoView(elementID): void {
    this.selectedElement.next(elementID);
  }
}
