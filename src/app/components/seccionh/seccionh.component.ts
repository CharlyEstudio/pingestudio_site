import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-seccionh',
  templateUrl: './seccionh.component.html',
  styleUrls: ['./seccionh.component.css']
})
export class SeccionhComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  enviar(forma: NgForm) {
    console.log(forma.value);
  }

}
