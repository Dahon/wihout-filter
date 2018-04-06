import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Message} from '../shared/models/message.model';
import { UsersService } from '../shared/services/users.service';
import { User } from '../shared/models/user.model';
import { Answer } from '../shared/models/answer.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  message: Message;

  constructor(
    private usersService: UsersService,
    private router: Router
    ) {}
   form: FormGroup;
  
  ngOnInit() {
    this.message = new Message('danger', '');
  	this.form = new FormGroup({
  		email: new FormControl('', [Validators.required, Validators.email]),
  		agree: new FormControl('', [Validators.requiredTrue]),
      password: new FormGroup({
        firstpass: new FormControl('', [Validators.required, this.checkForLength.bind(this)]),
        secondpass: new FormControl('', [Validators.required]),
      }, [this.areEqual.bind(this)]),
  	});
  }

  charsCount = 5 ;
  checkForLength(control: FormControl){
    if(control.value.length <= this.charsCount){
      return {
        'lengthError' : true
      };
    }
    return null;
  }
  areEqual(control: FormControl) {
    let firstpass = control.value.firstpass;
    let repeat = control.value.secondpass;
    if(firstpass.length  && repeat.length){
      if(!(firstpass == repeat)){
        return {
          'equal' : true
        };
      }else{
        return null;
      }
    }  
  }
  private showMessage(message: Message){
    this.message = message;
  }
  onSubmit() {
    const email = this.form.value;
    const password = this.form.value.password;
    const user = new User(email, password.firstpass, name);
    this.usersService.createNewUser(user)
      .subscribe((data : Answer) => {
          if(data.success){
              this.router.navigate(['/login'], {
              queryParams: {
                nowCanLogin: true
              }
            });
          }else{
            this.showMessage({
              'text': 'Не правильно',
              'type': 'red'
            });
          }
      });
  }
}
