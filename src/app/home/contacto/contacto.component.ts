import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  servicio = '0';

  constructor() { }

  ngOnInit() {
  }

  enviar(forma: NgForm) {
    console.log(forma.value);
  }

}
