import { Component } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styles: []
})
export class ClasesComponent  {

  alerta:string = "alert-info";
  propiedades:object={
    danger:false
  }
  loading:boolean = false;

  constructor() { }

  ngOnInit() {
  }


  ejecutar(){
    this.loading = true;
    setTimeout( ()=>{ this.loading=false; }, 3000 )
  }

}