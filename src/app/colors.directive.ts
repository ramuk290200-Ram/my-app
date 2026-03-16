import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColors]'
})
export class ColorsDirective {

  constructor(private elementref:ElementRef) { }

@HostListener('mouseenter')
apply(){
  this.elementref.nativeElement.style.backgroundColor='red'
}

@HostListener('mouseleave')
remove(){
  this.elementref.nativeElement.style.backgroundColor='yellow'
}


}
