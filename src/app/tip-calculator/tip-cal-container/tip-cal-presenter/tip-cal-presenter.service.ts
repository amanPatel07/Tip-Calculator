import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { max, min } from 'rxjs';

@Injectable()
export class TipCalPresenterService {

  constructor( private fb: FormBuilder ) { }

  public buildform() {
    return this.fb.group({
      bill: [''],
      tip: ['', [Validators.required, Validators.maxLength(5)]],
      numberOfPeople: ['']
    })
  }
}
