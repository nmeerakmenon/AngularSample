import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {


  Name:String;
  Age:Number;
  Email
  Address;
  Hobbies:String[];
  constructor() {

   this. Name="Arun;"
   this.Age=28;
   this.Email="agfjf@xyz.com"
   this.Hobbies=["Reading","Chess","dabnce"];

   this.Address={HouseNo:"HRA123",Street:"Line1",Dist:"TVM"}
   
   
   }

  ngOnInit() {
  }

}
