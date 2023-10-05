import { Directive, ElementRef, OnInit } from "@angular/core";


@Directive({
    selector: '[custom]'
})

export class CustomDirective implements OnInit {

    constructor(public _eleRef: ElementRef) {

    }

    ngOnInit(): void {
        console.log('print html element: ', this._eleRef.nativeElement);
    }

}