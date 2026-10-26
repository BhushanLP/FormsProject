import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth.guard';
import { CardComponent } from './card/card.component';
import { ChildexampleComponent } from './childexample/childexample.component';
import { CrudComponent } from './crud/crud.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Comp1Component } from './forms/comp1/comp1.component';
import { FormArrayComponent } from './forms/form-array/form-array.component';
import { NestedFormComponent } from './forms/nested-form/nested-form.component';
import { ReactiveSampleComponent } from './forms/reactive-sample/reactive-sample.component';
import { TemplateSampleComponent } from './forms/template-sample/template-sample.component';
import { HeaderComponent } from './header/header.component';
import { InoutComponent } from './inout/inout.component';
import { ObsrxjsComponent } from './obsrxjs/obsrxjs.component';
import { ParentexampleComponent } from './parentexample/parentexample.component';
import { PracticeComponent } from './practice/practice.component';
import { RxjsobsComponent } from './rxjsobs/rxjsobs.component';
import { SignalComponent } from './signal/signal.component';
import { TableComponent } from './table/table.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  
  
  
  // When application starts
  {path: '', redirectTo: 'test', pathMatch: 'full'},
  
    // Login page in test
    {path: 'test', component: TestComponent},
    {path: 'header', component: HeaderComponent,canActivate: [authGuard],
      children:[
        {path: 'template', component: TemplateSampleComponent,},
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
        {path: 'OBSRXJS/:idd', component: ObsrxjsComponent},//route param    get this id in component
        {path: 'signal', component: SignalComponent},
        {path: 'parentEx', component: ParentexampleComponent},
        {path: 'childEx', component: ChildexampleComponent},
        {path: 'child1', loadComponent: () => import('./child1/child1.component').then(m => m.Child1Component)},
        {path: 'bhushan', loadComponent: () => import('./bhushan/bhushan.component').then(m => m.BhushanComponent)},
        {path: 'vaish', loadComponent: () => import('./vaish/vaish.component').then(m => m.VaishComponent)},
      ]
    },
    
  // after login move to Header page
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
