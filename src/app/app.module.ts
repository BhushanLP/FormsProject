import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { counterReducer } from 'store/counter.reducer';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { ChildexampleComponent } from './childexample/childexample.component';
import { CrudComponent } from './crud/crud.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { Comp1Component } from './forms/comp1/comp1.component';
import { FormArrayComponent } from './forms/form-array/form-array.component';
import { FormsComponent } from './forms/forms.component';
import { NestedFormComponent } from './forms/nested-form/nested-form.component';
import { ReactiveSampleComponent } from './forms/reactive-sample/reactive-sample.component';
import { TemplateSampleComponent } from './forms/template-sample/template-sample.component';
import { HeaderComponent } from './header/header.component';
import { InoutComponent } from './inout/inout.component';
import { ObsrxjsComponent } from './obsrxjs/obsrxjs.component';
import { Parent1Component } from './parent1/parent1.component';
import { ParentexampleComponent } from './parentexample/parentexample.component';
import { PracticeComponent } from './practice/practice.component';
import { RxjsobsComponent } from './rxjsobs/rxjsobs.component';
import { SignalComponent } from './signal/signal.component';
import { TableComponent } from './table/table.component';
import { TestComponent } from './test/test.component';
import { VaishComponent } from './vaish/vaish.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HeaderComponent,
    FooterComponent,
    FormsComponent,
    NestedFormComponent,
    ReactiveSampleComponent,
    TemplateSampleComponent,
    TableComponent,
    FormArrayComponent,
    Comp1Component,
    CrudComponent,
    RxjsobsComponent,
    DashboardComponent,
    // Child1Component,
    Parent1Component,
    InoutComponent,
    CardComponent,
    PracticeComponent,
    ObsrxjsComponent,
    SignalComponent,
    ParentexampleComponent,
    ChildexampleComponent,
    // BhushanComponent,
    // VaishComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, NgxDocViewerModule,
    HttpClientModule,
    StoreModule.forRoot({
        bhushan: counterReducer,
        users: counterReducer
    }),
    VaishComponent
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
