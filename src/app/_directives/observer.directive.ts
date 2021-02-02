import { Directive, ElementRef, Input, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appObserver]',
})
export class ObserverDirective implements OnDestroy {
  @Input() item;
  private reported = false;
  private observer: IntersectionObserver = null;
  constructor(private el: ElementRef) {
    this.startup(this.el.nativeElement as Element);
  }

  ngOnDestroy() {
    if (this.observer !== null) {
      this.observer.unobserve(this.el.nativeElement as Element);
    }
  }

  startup = (element: Element) => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: [0.0, 0.11, 0.2],
    };
    // Set up the observer for this box
    this.observer = new IntersectionObserver(
      this.intersectionCallback,
      observerOptions
    );
    this.observer.observe(element);
  };

  intersectionCallback = (entries) => {
    entries.forEach((entry) => {
      if (!this.reported && entry.intersectionRatio > 0.1) {
        this.reported = true;
      } else if (this.reported && entry.intersectionRatio === 0) {
        this.reported = false;
      }
    });
  };
}
