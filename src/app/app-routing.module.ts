import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateSampleComponent } from './forms/template-sample/template-sample.component';
import { ReactiveSampleComponent } from './forms/reactive-sample/reactive-sample.component';
import { NestedFormComponent } from './forms/nested-form/nested-form.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  
    {path: '', redirectTo: 'template', pathMatch: 'full'},
    {path: 'template', component: TemplateSampleComponent},
    {path: 'reactive', component: ReactiveSampleComponent},
    {path: 'nested', component: NestedFormComponent},
    {path: 'table', component: TableComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
