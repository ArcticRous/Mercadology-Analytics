import { Component, OnInit } from '@angular/core';
import { CuentaModel} from '../../models/cuenta.model';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.css']
})
export class CuentaComponent implements OnInit {
  cuenta: CuentaModel = new CuentaModel();
  constructor() { }

  ngOnInit(): void {
  }
  guardar(form: NgForm){
    console.log(form);
    console.log(this.cuenta);

  }

}
