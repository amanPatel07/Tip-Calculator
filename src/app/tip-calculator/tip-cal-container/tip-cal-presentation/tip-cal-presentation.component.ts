import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TipCalPresenterService } from '../tip-cal-presenter/tip-cal-presenter.service';

@Component({
  selector: 'app-tip-cal-presentation',
  templateUrl: './tip-cal-presentation.component.html',
  styles: [
  ]
})
export class TipCalPresentationComponent implements OnInit {

  public tipCalcForm: FormGroup;
  private totalBill: number;
  private tip: number;
  public numberOfPeople!: number;
  public tipAmountPerPerson: number;
  public totalAmountPerPerson: number;

  constructor(private tipCalcService: TipCalPresenterService) {
    this.tipCalcForm = this.tipCalcService.buildform()
    this.totalBill = 0;
    this.tip = 0;
    this.tipAmountPerPerson = 0.00;
    this.totalAmountPerPerson = 0.00;
  }

  ngOnInit(): void {
    this.valueChange();
  }

  public get getControls() {
    return this.tipCalcForm['controls']
  }

  public valueChange() {
    this.tipCalcForm.valueChanges.subscribe((res: any) => {
      this.totalBill = res.bill || 0;
      this.tip = parseFloat(res.tip) || 0;
      this.numberOfPeople = res.numberOfPeople;
      this.calculate();
    })
  }

  private calculate() {
    let billAmount, tipAmount;
    tipAmount = this.totalBill * (this.tip / 100)
    billAmount = this.totalBill + tipAmount;
    this.totalAmountPerPerson = (billAmount / this.numberOfPeople);
    this.tipAmountPerPerson = tipAmount / this.numberOfPeople;

    if(this.totalAmountPerPerson == Infinity || Number.isNaN(this.totalAmountPerPerson)) this.totalAmountPerPerson = 0;
    if(this.tipAmountPerPerson == Infinity || Number.isNaN(this.tipAmountPerPerson)) this.tipAmountPerPerson = 0;
    
  }

  public reset() {
    this.tipCalcForm.reset();
  }

}
