import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { element } from "protractor";
import { Observable } from "rxjs";
import { Transaction } from "../models/transaction.model";

@Injectable()
export class TransactionService {
    url: string = "assets/data/transactions.json";
    constructor(private http: HttpClient) { }
    transactionObservable: Observable<Transaction[]>;

    /**
     * Cette méthode retourne la liste des transactions
     * @returns 
     */
    getAllTransactions():Observable<Transaction[]> {
        return this.http.get<Transaction[]>(this.url);
    }
    /**
     * 
     * @param id Cette méthode renvoie une transaction correspondant à l'id passé en paramètre
     * @returns 
     */
    getTransactionById(id: string):Observable<Transaction>{
        let url ="assets/data/"+id+".json";
        return this.http.get<Transaction>(url);
    }
}