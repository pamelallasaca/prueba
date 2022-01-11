import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TarjetaService } from 'src/app/services/tarjeta.service';
import { ToastrService } from 'ngx-toastr';
import { TarjetaCredito } from '../../models/TarjetaCredito';

@Component({
	selector: 'app-crear-tarjeta',
	templateUrl: './crear-tarjeta.component.html',
	styleUrls: ['./crear-tarjeta.component.css'],
})
export class CrearTarjetaComponent implements OnInit {
	form: FormGroup;
	loading = false;

	constructor(
		private fb: FormBuilder,
		private _tarjetaService: TarjetaService,
		private toastr: ToastrService
	) {
		this.form = this.fb.group({
			titular: ['', Validators.required],
			numeroTarjeta: [
				'',
				[
					Validators.required,
					Validators.minLength(16),
					Validators.maxLength(16),
				],
			],
			fechaExpiracion: [
				'',
				[
					Validators.required,
					Validators.minLength(5),
					Validators.maxLength(5),
				],
			],
			cvv: [
				'',
				[
					Validators.required,
					Validators.minLength(3),
					Validators.maxLength(3),
				],
			],
		});
	}

	ngOnInit(): void {}

	crearTarjeta() {
		//console.log(this.form);
		const TARJETA: TarjetaCredito = {
			titular: this.form.value.titular,
			numeroTarjeta: this.form.value.numeroTarjeta,
			fechaExpiracion: this.form.value.fechaExpiracion,
			cvv: this.form.value.cvv,
			fechaCreacion: new Date(),
			fechaActualizacion: new Date(),
		};

		this.loading = true;
		this._tarjetaService.guardarTarjeta(TARJETA).then(
			() => {
				this.loading = false;
				console.log('tarjeta registrada');
				this.toastr.success(
					'La tarjeta fue registrada con exito',
					'Tarjeta registrada'
				);
				this.form.reset();
			},
			(error) => {
				this.loading = false;
				this.toastr.error('Opps..Ocurrió un error', 'Error');
				console.log(error);
			}
		);
	}
}
