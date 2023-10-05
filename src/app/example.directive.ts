import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appExample]'
})
export class ExampleDirective {

  constructor(private _eleRef: ElementRef) { }

}
