import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Injectable()
export class TipCalPresenterService {

  constructor( private fb: FormBuilder ) { }

  public buildform() {
    return this.fb.group({
      bill: [''],
      tip: [''],
      numberOfPeople: ['']
    })
  }
}
