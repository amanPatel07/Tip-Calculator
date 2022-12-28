import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipCalculatorRoutingModule } from './tip-calculator-routing.module';
import { TipCalculatorComponent } from './tip-calculator.component';
import { TipCalContainerComponent } from './tip-cal-container/tip-cal-container.component';
import { TipCalPresentationComponent } from './tip-cal-container/tip-cal-presentation/tip-cal-presentation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TipCalPresenterService } from './tip-cal-container/tip-cal-presenter/tip-cal-presenter.service';


@NgModule({
  declarations: [
    TipCalculatorComponent,
    TipCalContainerComponent,
    TipCalPresentationComponent
  ],
  imports: [
    CommonModule,
    TipCalculatorRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    TipCalPresenterService
  ]
})
export class TipCalculatorModule { }
