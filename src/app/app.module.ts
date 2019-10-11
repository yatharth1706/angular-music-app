import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthService } from './auth.service';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
// import { FormsModule} from '@angular/forms';
// import { ParentComponent } from './parent/parent.component';
// import { ChildComponent } from './child/child.component';
import { ViewComponent } from './view/view.component';
import { SafePipe } from './safe.pipe';
// import { UsersComponent } from './users/users.component';
// import { PostsComponent } from './posts/posts.component';
import { NavComponent } from './nav/nav.component';
// import { HomeComponent } from './home/home.component';
// import { AboutComponent } from './about/about.component';
import { ShortPipe } from './short.pipe';
import { FilterPipe } from './filter.pipe';
import { CreateAccountPipe } from './create-account.pipe';
// import { CreateAccountComponent } from './create-account/create-account.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    ViewComponent,
    SafePipe,
    NavComponent,
    ShortPipe,
    FilterPipe,
    CreateAccountPipe,
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
