import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-httpclient',
  templateUrl: './httpclient.component.html',
  styleUrls: ['./httpclient.component.css']
})
export class HttpclientComponent implements OnInit{
//at first we need to initialize the constructor with http client which will set by the appmodule
constructor( private http:HttpClient){

}

users:contact[]=[]
ngOnInit() {
    this.getusers().subscribe((response)=>{
      // this.user= response; here we will get error because the get method will return the object but here we are assigning it with []
      // so we can make the get method as it receives the data as how we want
      this.users= response;
      console.log(response)
    })
    // here from subscribe we are using a callback function which would help us in getting the response
    // here subscribe is used because we dont know when will the server will return us with response so why we have added here like that 
}

getusers(){
  // this.http.   if you use like this there will be a problem arises because http in the constructor is not been
  // declared if we use private there.there would be no problem 
 // first this was written return this.http.get('https://jsonplaceholder.typicode.com/posts'); // this method will send us observable so we need to use subscribe method there which will be helpful
 return this.http.get<contact[]>('https://jsonplaceholder.typicode.com/posts'); // here e have made the method to recieve as per our need which will be so useful to us 
}

}
class contact {
  userId!:string;
}