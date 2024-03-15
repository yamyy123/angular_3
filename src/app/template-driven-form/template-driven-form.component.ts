import { Component ,OnInit} from '@angular/core';
import { NgControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
Country:country[] =[
  new country(1,'india'),
  new country(2,'afghanistan'),
  new country(3,'pakistan')
]

//to use NgForm we need to import from @angular/forms
//onsubmit(form:NgForm){
  onsubmit(form:NgControl){   // we can use the upper type of form to see the full form and down type of function to see the form controls 
//console.log(form)
//if you want to know the access the values then we can able to use this
console.log(form)
// console.log(form.value)
}
//!: means it will be initialized at runtime
contact!:Contact;

ngOnInit(): void {
 this.contact={
      firstname : 'yameen',
      lastname : 's m',
      gender :'male',
  phoneno: '8754851351',
  marriedstatus:true,
  countri:2,
  address :{
    city :'erode',
    pincode :'638401',
  }

 }
  
}

}

class country {
  id:number;
  name:string;

  constructor(id:number,name:string){
    this.id= id;
    this.name =name;
  }

}

//now if you wanna have predefined values which you have in typescript there

//you are creating a class 
// if you use !: like this then it is mean we will initialize later in the runtime
class Contact {
  firstname!:string;
  lastname!:string;
  gender!:string;
  phoneno!:string;
  marriedstatus!:boolean;
  countri!:number;
  address !:{
    city :string;
    pincode :string
  }


}