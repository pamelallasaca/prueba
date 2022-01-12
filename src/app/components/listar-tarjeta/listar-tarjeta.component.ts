import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TarjetaService } from 'src/app/services/tarjeta.service';
import { TarjetaCredito } from '../../models/TarjetaCredito';

@Component({
	selector: 'app-listar-tarjeta',
	templateUrl: './listar-tarjeta.component.html',
	styleUrls: ['./listar-tarjeta.component.css'],
})
export class ListarTarjetaComponent implements OnInit {
 
  listTarjetas:TarjetaCredito[]=[];
	constructor(private _tarjetaService: TarjetaService, private toastr: ToastrService) {}

	ngOnInit(): void {
    this.obtenerTarjetas();
  }

obtenerTarjetas(){
  this._tarjetaService.obtenerTarjetas().subscribe(doc =>{
  
    this.listTarjetas=[];
  doc.forEach((element : any) => {
    this.listTarjetas.push({
      id:element.payload.doc.id,
      ...element.payload.doc.data()
    });
     
    });
    console.log(this.listTarjetas);
  })
}
eliminarTarjeta(id:any){
  this._tarjetaService.eliminarTarjeta(id).then(() =>{
 this.toastr.error('La tarjeta fue eliminada con éxito','Registro eliminado')
  },error=>{
    this.toastr.error('Opss.. ocurrió un error', 'Error');
    console.log(error);
  })
}
}