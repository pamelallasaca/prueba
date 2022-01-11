import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearTarjetaComponent } from './crear-tarjeta/crear-tarjeta.component';
import { ListarTarjetaComponent } from './listar-tarjeta/listar-tarjeta.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

const COMPONENTS = [CrearTarjetaComponent, ListarTarjetaComponent];

@NgModule({
	declarations: COMPONENTS,
	imports: [
		CommonModule,
		FormsModule,
		BrowserAnimationsModule,
		ReactiveFormsModule,
		ToastrModule.forRoot(),
	],
	exports: COMPONENTS,
})
export class ComponentsModule {}
