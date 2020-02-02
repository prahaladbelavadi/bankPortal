import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BankDetailComponent } from './bank-detail/bank-detail.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: ':ifsc', component: BankDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
