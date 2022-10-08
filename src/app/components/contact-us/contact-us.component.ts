import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})

export class ContactUsComponent implements OnInit {

  @Input() formError: string = '';
  @Output() login = new EventEmitter();
  hide = true;
  panelOpenState = false;

  constructor(private snackBar : MatSnackBar) { }
  userForm = new FormGroup({
    fullName: new FormControl('',[
      Validators.required,
      Validators.minLength(2),
      Validators.pattern('[a-zA-Z]*')
    ]),
    companyName: new FormControl('',[
      Validators.required,
      Validators.minLength(2)
    ]),
    phoneNumber: new FormControl('',[
      Validators.required,
      Validators.pattern('[0-9]*')
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    messages: new FormControl('', [
      Validators.required
    ])
  })
  onSubmit() {
    console.log(this.userForm.value);
    this.userForm.reset({ login: '', password: '' });
  }
  openSnackBar(){
    this.snackBar.open('Messages Successfully', '' , {duration : 2000});
  }
  onFormChange(){
    this.formError = '';
  };

  onUpPage(){
    document.getElementById("home")?.scrollIntoView({
      behavior: "smooth",
    })
  }

  ngOnInit(): void {
  }
}
