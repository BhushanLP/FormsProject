import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsComponent } from './forms/forms.component';
import { NestedFormComponent } from './forms/nested-form/nested-form.component';
import { ReactiveSampleComponent } from './forms/reactive-sample/reactive-sample.component';
import { TemplateSampleComponent } from './forms/template-sample/template-sample.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormArrayComponent } from './forms/form-array/form-array.component';
import { Comp1Component } from './forms/comp1/comp1.component';
import { TestComponent } from './test/test.component';
import { CrudComponent } from './crud/crud.component';
import { HttpClientModule } from '@angular/common/http';
import { RxjsobsComponent } from './rxjsobs/rxjsobs.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { Child1Component } from './child1/child1.component';
import { Parent1Component } from './parent1/parent1.component';
import { InoutComponent } from './inout/inout.component';
import { CardComponent } from './card/card.component';
import { PracticeComponent } from './practice/practice.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FormsComponent,
    NestedFormComponent,
    ReactiveSampleComponent,
    TemplateSampleComponent,
    TableComponent,
    FormArrayComponent,
    Comp1Component,
    TestComponent,
    CrudComponent,
    RxjsobsComponent,
    DashboardComponent,
    Child1Component,
    Parent1Component,
    InoutComponent,
    CardComponent,
    PracticeComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
