import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Transaction } from '../models/transaction.model';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.css']
})
export class TransactionDetailComponent implements OnInit {
  id: string;
  transaction: Transaction = {
    id: "01-00",
    amount: 157.21,
    balance: 2657.21,
    label: "Intérêts",
    description: "Intérêts 2014",
    date: new Date()
  };
  constructor(
    private route: ActivatedRoute,
    private transactionService: TransactionService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      this.id = id;
    });
    this.getTransaction();
  }
  getTransaction() {
    this.transactionService.getTransactionById(this.id).subscribe(
      transaction => {
        this.transaction = transaction;
      },
      erreur => {
        console.error("Erreur " + erreur + "lors de la recupération de la transaction")
      }
    );
  }

}
