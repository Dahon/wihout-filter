import { Directive, OnInit, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appFocused]'
})
export class FocusedDirective {
	@Input('appFocused') focus: string = 'focused';
	//@Input() defaultfocus: string = 'focused';
	@HostBinding('class.focused')
	isFocused = false;
	//@HostBinding('class') class: string;
	constructor() { }

	@HostListener('click') onMouseEnter(){
		this.isFocused = true;
	}
	@HostListener('mouseleave') onMouseLeave(){
		this.isFocused = false;
	}
}
