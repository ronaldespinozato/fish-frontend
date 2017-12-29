import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private elRef: ElementRef) {
  }

  login(event: ElementRef, username: String, password: String) {
    
    console.log(username, password);
    // console.log(this.elRef.nativeElement.querySelector('username'));
    // this.elRef.nativeElement.
    
  }
  ngOnInit() {
  }

}
