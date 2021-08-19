import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tip-calculator-app';
  breakpoint: number;
  bill: number;
  people: number;
  tipPerPerson: string;
  totalPerPerson: string;

  ngOnInit(): void {
    this.breakpoint = (window.innerWidth <= 768) ? 1 : 2;
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 768) ? 1 : 2;
  }

  onInputBill(event) {
    document.getElementById("bill").classList.remove("incorrectInput");
    document.getElementById("billError").classList.remove("errorText");
    document.getElementById("billError").classList.add("errorTextHidden");
    this.bill = event.target.value;
  }

  onInputPeople(event) {
    document.getElementById("people").classList.remove("incorrectInput");
    document.getElementById("peopleError").classList.remove("errorText");
    document.getElementById("peopleError").classList.add("errorTextHidden");
    this.people = event.target.value;
  }

  onReset(event) {
    this.tipPerPerson = parseFloat("0").toFixed(2);
    this.totalPerPerson = parseFloat("0").toFixed(2);
  }

  calculateTip(tip: number) {
    if (!this.bill || this.bill === 0) {
      document.getElementById("bill").classList.add("incorrectInput");
      document.getElementById("billError").classList.add("errorText");
      document.getElementById("billError").classList.remove("errorTextHidden");
      return;
    }
    if (!this.people || this.people === 0) {
      document.getElementById("people").classList.add("incorrectInput");
      document.getElementById("peopleError").classList.add("errorText");
      document.getElementById("peopleError").classList.remove("errorTextHidden");
      return;
    }
    this.tipPerPerson = (this.bill * tip / 100 / this.people).toFixed(2);
    this.totalPerPerson = (this.bill / this.people + parseFloat(this.tipPerPerson)).toFixed(2);
  }
}
