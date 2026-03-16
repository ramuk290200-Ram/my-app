import { Component } from '@angular/core';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-acconts',
  templateUrl: './acconts.component.html',
  styleUrls: ['./acconts.component.css']
})
export class AccontsComponent {

  getbankservice: any = [];

  constructor(private bankservice: BankService) {
    this.bankservice.getBankservice().subscribe(

      (data: any) => {
        this.getbankservice = data;
      },

      (err: any) => {
        alert("internal server error");
      }

    );
  }

  deleteAccount(id: string) {

    this.bankservice.getBankservice().subscribe(

      (data: any) => {
        alert("Deleted Successfully!");
        location.reload();
      },

      (err: any) => {
        alert("Internal server error");
      }

    );

  }

}
  

 
 





