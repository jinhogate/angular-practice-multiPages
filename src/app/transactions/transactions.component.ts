import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { element } from 'protractor';
import { Transaction } from '../models/transaction.model';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  transactions: Transaction[] = [];
  key = 'id';
  reverse: boolean = false;

  constructor(
    private transactionService: TransactionService,
    private router:Router) { }

  ngOnInit() {
    this.getAllTransactions();
  }

  getAllTransactions() {
    this.transactionService.getAllTransactions().subscribe(
      data => {
        this.transactions = data;
        this.transactions.forEach(element => {
        },
          erreur => {
            console.error('Erreur ' + erreur + ' lors de la recupération des transactions!');
          });
      }
    );
  }
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  getDetail(id:string){
    this.router.navigate(['/transactions',id]);
  }

}
