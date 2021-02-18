import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.sass']
})
export class PriceComponent implements OnInit, OnDestroy {

  observer: IntersectionObserver;
  items;

  constructor() { }

  ngOnInit() {
    this.projectsAnimation();
  }
  ngOnDestroy() {
    this.observer.disconnect();
  }

  projectsAnimation() {
    this.observer = new IntersectionObserver(
      function(entries) {
        entries.forEach((elmnt) => {
          if (elmnt.intersectionRatio > 0.2) {
            console.log(elmnt)
            elmnt.target.classList.remove('not-visible');
          } else {
            elmnt.target.classList.add('not-visible');
          }
        });
      },
      {
        threshold: [0.2]
      }
    );

    this.items = document.querySelectorAll('.desc-titleh1, .desc-titleh2');

    if (NodeList.prototype.forEach === undefined) {
      NodeList.prototype.forEach = Array.prototype.forEach as any; //grafikart
    }

    this.items.forEach(element => {
      element.classList.add('not-visble');
      this.observer.observe(element);
    });
  }
}
