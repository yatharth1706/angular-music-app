import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthService } from './auth.service';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { ViewComponent } from './view/view.component';
import { CreateAccountPipe } from './create-account.pipe';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SafePipe } from './safe.pipe';
import { LoginComponent } from './login/login.component';
import { AudioComponent } from './audio/audio.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    ViewComponent,
    CreateAccountPipe,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    SafePipe,
    LoginComponent,
    AudioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
