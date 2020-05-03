import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { ClipboardModule } from '@angular/cdk/clipboard'
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ColorCardComponent } from './shared/color-card/color-card.component';
import { TesterComponent } from './components/tester/tester.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ColorCardComponent,
    TesterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ClipboardModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
