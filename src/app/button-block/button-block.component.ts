import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'button-block',
  templateUrl: './button-block.component.html',
  styleUrls: ['./button-block.component.scss']
})
export class ButtonBlockComponent implements OnInit {
  @Output() selectTipEvent = new EventEmitter<number>();
  customTip: number;
  breakpoint: number;

  constructor() { }

  ngOnInit(): void {
    this.breakpoint = (window.innerWidth <= 768) ? 2 : 3;
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 768) ? 2 : 3;
  }

  onClick(event) {
    this.selectTip(parseInt(event.target.innerText));
  }

  onCustomClick(event) {
    if (this.customTip && this.customTip !== 0) {
      this.selectTip(this.customTip);
    }
  }

  onInput(event) {
    this.customTip = event.target.value;
  }

  selectTip(value: number) {
    this.selectTipEvent.emit(value);
  }
}
