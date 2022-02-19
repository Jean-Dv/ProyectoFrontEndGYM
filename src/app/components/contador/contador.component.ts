import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  constructor() { }


  numero = 0;
  numeroString = localStorage.getItem("numero");


  meter(){
    this.numero= Number(this.numeroString);
  }


  /***Funcion Sumar y Restar */
  sumar(){
    this.numero +=1;
    localStorage.setItem("numero", this.numero.toString());
  }

  restar(){
    this.numero -=1;
    localStorage.setItem("numero", this.numero.toString());
  }


  ngOnInit(): void {
    this.meter();
  }


}
