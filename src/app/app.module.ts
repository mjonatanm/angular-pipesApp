import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LOCALE_ID, NgModule } from '@angular/core';

//Modulo personalizado
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';
import { SharedModule } from './shared/shared.module';

import localEs from '@angular/common/locales/es-AR'
import localFr from '@angular/common/locales/fr'
import { registerLocaleData } from '@angular/common';
registerLocaleData ( localEs );
registerLocaleData ( localFr );

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterModule,
    SharedModule,
    VentasModule
  ],
  providers: [
    {provide: LOCALE_ID , useValue: 'es-AR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
