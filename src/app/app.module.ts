import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }   from '@angular/common/http';
import { HttpModule }   from '@angular/http';
import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';
import {NgxMaskModule} from 'ngx-mask';
import { DatePipe } from '@angular/common';
import {NgxDateRangePickerModule} from '../ngx-daterangepicker';
import { NouisliderModule } from 'ng2-nouislider';
import { Daterangepicker } from  'ng2-daterangepicker';
//import { Daterangepicker } from 'ng2-daterangepicker';
//Component
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './shared/component/header/header.component';
import { FieldErrorDisplayComponent } from './shared/component/field-error-display/field-error-display.component';
import { FeedbackComponent } from './homepage/feedback/feedback.component';
import { RecaptchaComponent } from './homepage/feedback/recaptcha/recaptcha.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AdminComponent } from './admin/admin.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgetPassComponent } from './forget-pass/forget-pass.component';
import { AboutComponent } from './shared/component/about/about.component';
import { ContactsComponent } from './shared/component/contacts/contacts.component';
import { ProfileComponent } from './profile/profile.component';
import { AddDocumentComponent } from './profile/add-document/add-document.component';
import { ReservationComponent } from './reservation/reservation.component';

//Services
import { UsersService } from './shared/services/users.service';
import { AuthService } from './shared/services/auth.service';
import {SelectedService} from './shared/services/selected.service';
import {SearchService} from './shared/services/search.service';
import {AuthGuardService} from './shared/services/auth-guard.service';
import {ProfileService} from './shared/services/profile.service';
import { FilterPipe } from './shared/pipes/filter.pipe';
//other
import { FocusedDirective } from './directives/focused.directive';
import { AppRoutingModule } from './app-routing.module';
import { FilterFormComponent } from './reservation/filter-form/filter-form.component';
import { CountPeopleComponent } from './reservation/count-people/count-people.component';
import { CheckboxComponent } from './reservation/filter-form/checkbox/checkbox.component';
import { NouisliderComponent } from './reservation/filter-form/nouislider/nouislider.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    FeedbackComponent,
    RecaptchaComponent,
    FocusedDirective,
    NotFoundComponent,
    AdminComponent,
    SignInComponent,
    SignUpComponent,
    ForgetPassComponent,
    AboutComponent,
    ContactsComponent,
    ProfileComponent,
    AddDocumentComponent,
    FieldErrorDisplayComponent,
    ReservationComponent,
    FilterFormComponent,
    CountPeopleComponent,
    FilterPipe,
    CheckboxComponent,
    NouisliderComponent
  ],
  imports: [
    RecaptchaModule.forRoot(),
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    HttpModule,
    NgxDateRangePickerModule,
    NouisliderModule,
    Daterangepicker
  ],
  providers: [UsersService, AuthService, DatePipe, SelectedService, AuthGuardService, SearchService, ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
