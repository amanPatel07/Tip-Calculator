import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TipCalContainerComponent } from './tip-cal-container/tip-cal-container.component';
import { TipCalculatorComponent } from './tip-calculator.component';

const routes: Routes = [
  { path: '', component: TipCalContainerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipCalculatorRoutingModule { }
