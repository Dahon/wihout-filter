import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService} from '../shared/services/users.service';
import { AuthService} from '../shared/services/auth.service';
import { User} from '../shared/models/user.model';
import { Answer } from '../shared/models/answer.model';
import { Message} from '../shared/models/message.model';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  form: FormGroup;
  message: Message;
  charsCount = 5;
  constructor(
    private usersService: UsersService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
   ) {}
  ngOnInit() {
    this.message = new Message('danger', '');
    this.route.queryParams.subscribe((params: Params) => {
      if (params['nowCanLogin']) {
        this.showMessage({
          'text': 'Теперь вы можете зайти в систему',
          'type': 'green'
        });
      }
      if(params['accessDenied']){
        this.showMessage({
          'text': 'Для входа войдите в систему',
          'type': 'red'
        });
      }
    });

    this.form = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, this.checkForLength.bind(this)]),
        remember: new FormControl('true')
    });
  }

  private showMessage(message: Message){
    this.message = message;
  }

  checkForLength(control: FormControl) {
    if (control.value.length <= this.charsCount) {
      return {
        'lengthError' : true
      };
    }
    return null;
  }
  onSubmit() {
    const formData = this.form.value;
    this.usersService.authUser(this.form.value)
        .subscribe((data:Answer) => {
          if(!data.success){
            console.log(data);
            this.showMessage({
              'text': 'Пароль или Логин не верный',
              'type': 'red'
            });
          }else{
            window.localStorage.setItem('user', formData.email);
            this.authService.login();
            this.router.navigate(['/profile']);
          }
        });
  }
}
