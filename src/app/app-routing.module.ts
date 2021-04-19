import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';
import { TransactionsComponent } from './transactions/transactions.component';


const routes: Routes = [
  {path:"transactions",component:TransactionsComponent},
  {path:"transactions/:id",component:TransactionDetailComponent},
  {path:"",redirectTo:"/transactions",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
