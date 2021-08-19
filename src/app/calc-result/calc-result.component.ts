import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'calc-result',
  templateUrl: './calc-result.component.html',
  styleUrls: ['./calc-result.component.scss']
})
export class CalcResultComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.result = parseFloat("0").toFixed(2);
  }

  @Input() header: string;
  @Input() text: string;
  @Input() result: string;
}
