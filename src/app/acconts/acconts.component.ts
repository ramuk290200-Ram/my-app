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
    bankservice.getBankservice().subscribe(
      (data: any) => {
        this.getbankservice = data;
      },

      (err: any) => {
        alert("internal server error");
      }
    )
  }




}
