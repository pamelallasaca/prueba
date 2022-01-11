import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import {
	provideAnalytics,
	getAnalytics,
	ScreenTrackingService,
	UserTrackingService,
} from '@angular/fire/analytics';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideFunctions, getFunctions } from '@angular/fire/functions';
import { provideMessaging, getMessaging } from '@angular/fire/messaging';
import { providePerformance, getPerformance } from '@angular/fire/performance';
import {
	provideRemoteConfig,
	getRemoteConfig,
} from '@angular/fire/remote-config';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { TarjetaService } from './services/tarjeta.service';

@NgModule({
	declarations: [AppComponent],

	imports: [
		BrowserModule,
		AngularFireModule.initializeApp(environment.firebase),
		AppRoutingModule,
		ComponentsModule,
		BrowserAnimationsModule,
		ToastrModule.forRoot(),
		AngularFirestoreModule,
		provideFirebaseApp(() => initializeApp(environment.firebase)),
		provideAnalytics(() => getAnalytics()),
		provideAuth(() => getAuth()),
		provideDatabase(() => getDatabase()),
		provideFirestore(() => getFirestore()),
		provideFunctions(() => getFunctions()),
		provideMessaging(() => getMessaging()),
		providePerformance(() => getPerformance()),
		provideRemoteConfig(() => getRemoteConfig()),
		provideStorage(() => getStorage()),
	],
	providers: [ScreenTrackingService, UserTrackingService, TarjetaService],
	bootstrap: [AppComponent],
})
export class AppModule {}
