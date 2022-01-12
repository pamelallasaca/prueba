import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TarjetaService } from 'src/app/services/tarjeta.service';
import { TarjetaCredito } from '../../models/TarjetaCredito';

@Component({
	selector: 'app-listar-tarjeta',
	templateUrl: './listar-tarjeta.component.html',
	styleUrls: ['./listar-tarjeta.component.css'],
})
export class ListarTarjetaComponent implements OnInit {
	listTarjetas: TarjetaCredito[] = [];
	@Input() nombre: string = 'Pamela';
	constructor(
		private _tarjetaServicio: TarjetaService,
		private toast: ToastrService
	) {}

	ngOnInit(): void {
		this.obtenerTarjetas();
	}

	obtenerTarjetas() {
		this._tarjetaServicio.obtenerTarjetas().subscribe((doc) => {
			this.listTarjetas = [];
			doc.forEach((element: any) => {
				this.listTarjetas.push({
					id: element.payload.doc.id,
					...element.payload.doc.data(),
				});
			});
			console.log(this.listTarjetas);
		});
	}
	eliminarTarjeta(id: any) {
		this._tarjetaServicio.eliminarTarjeta(id).then(() => {
			this.toast.error(
				'La tarjeta fue eliminada con éxito',
				'Registro eliminado'
			),
				(error: any) => {
					this.toast.error('Opss.. ocurrió un error', 'Error');
					console.log(error);
				};
		});
	}
	editarTarjeta(tarjeta: TarjetaCredito) {
		this._tarjetaServicio.addTarjetaEdit(tarjeta);
		// this._tarjetaService.addTarjetaEdit(tarjeta);
	}
}
