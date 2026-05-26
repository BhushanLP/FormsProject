import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateSampleComponent } from './forms/template-sample/template-sample.component';
import { ReactiveSampleComponent } from './forms/reactive-sample/reactive-sample.component';
import { NestedFormComponent } from './forms/nested-form/nested-form.component';
import { TableComponent } from './table/table.component';
import { FormArrayComponent } from './forms/form-array/form-array.component';
import { Comp1Component } from './forms/comp1/comp1.component';
import { CrudComponent } from './crud/crud.component';
import { RxjsobsComponent } from './rxjsobs/rxjsobs.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InoutComponent } from './inout/inout.component';
import { CardComponent } from './card/card.component';
import { PracticeComponent } from './practice/practice.component';

const routes: Routes = [
  
    {path: '', redirectTo: 'template', pathMatch: 'full'},
    {path: 'template', component: TemplateSampleComponent},
    {path: 'reactive', component: ReactiveSampleComponent},
    {path: 'formArray', component: FormArrayComponent},
    {path: 'nested', component: NestedFormComponent},
    {path: 'table', component: TableComponent},
    {path: 'comp1', component: Comp1Component},
    {path: 'crud', component: CrudComponent},
    {path: 'rxjsobs', component: RxjsobsComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'inout', component: InoutComponent},
    {path: 'card', component: CardComponent},
    {path: 'practice', component: PracticeComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
