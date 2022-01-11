import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Component, OnInit } from '@angular/core';
import { TarjetaService } from 'src/app/services/tarjeta.service';
import { TarjetaCredito } from '../../models/TarjetaCredito';

@Component({
	selector: 'app-listar-tarjeta',
	templateUrl: './listar-tarjeta.component.html',
	styleUrls: ['./listar-tarjeta.component.css'],
})
export class ListarTarjetaComponent implements OnInit {
  l
  listTarjetas:TarjetaCredito[]=[];
	constructor(private _tarjetaService: TarjetaService) {}

	ngOnInit(): void {
    this.obtenerTarjetas();
  }
}
obtenerTarjetas(){
  this._tarjetaService.obtenerTarjetas().subscribe(doc =>{
  
    this.listTarjetas=[];
  doc.forEach(element : any) => {
    this.listTarjtas.push({
      id:element.payload.doc.id,
      element.payload.doc.data()
    });
      console.log(element.payload.doc.id);
      console.log(element.payload.doc.data());
    });
  })
    }
  }