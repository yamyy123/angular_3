import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
// in template driven forms the form group and form controls will be given in template itself
//but in reactive forms we need to give the form group and form controls in component itself 
export class ReactiveFormsComponent {
  // in reactive forms it is so easy to predeined values 
  //inside the new FormControl('here what we are gonna give it is only gonna come in there ')
      contactForm = new FormGroup({
        username : new FormControl('',[Validators.required,Validators.minLength(6)]),   //like this if we give means there will be no valid = valid status will become unvalid if you add this means
        //for the min length category we need to give integer as a parameter
        password  : new FormControl('',[Validators.required,Validators.maxLength(15),Validators.pattern('^[a-zA-Z]+$')]),
        country  : new FormControl('',[Validators.required]), 
        gender  : new FormControl('',[Validators.required]), 
       married  : new FormControl('',[Validators.requiredTrue]), // for checkbox the requiredtrue need to be used
       // if we need to add nested form group in this for nested we doesnt want to add = symbol
       address : new FormGroup({
           city: new FormControl('',[Validators.required]), 
           pincode:new FormControl('',[Validators.required]), 
       })
      
      })

      onsubmit(){
        console.log(this.contactForm.value)
      }

      get username(){
     return this.contactForm.get('username')
      }

     get password(){
        return this.contactForm.get('password')
      }

      get country(){
          return this.contactForm.get('country')
      }

      get gender(){
        return this.contactForm.get('gender')
    }

    get married(){
      return this.contactForm.get('married')
  }

  get city(){
    //since city and pincode is in another object we should use get('address)
    return this.contactForm.get('address')?.get('city')
    //there will be a possibility of address to be null so here we are using ?
}

get pincode(){
  return this.contactForm.get('address')?.get('pincode')
}
      // instead of using contactform.controls.username.valid if we have this headers it would be helpful to reduce the codes
}
