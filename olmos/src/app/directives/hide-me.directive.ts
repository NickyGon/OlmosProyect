import { Directive, ElementRef, AfterViewInit, ChangeDetectorRef } from '@angular/core';

@Directive({
  selector: '[appHideMe]',
  exportAs:'appHideMe',  
})
  
export class HideMeDirective implements AfterViewInit {  

  hide!: Boolean;    
  
  constructor(
      private el: ElementRef,
      private cdr:ChangeDetectorRef
  ) { }
  
  ngAfterViewInit() {
      this.hide=false;
      this.cdr.detectChanges();
  }
}
