import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { MatSlideToggleChange, MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, MatInputModule, LoginComponent, SignupComponent, MatSlideToggleModule]
})
export class AppComponent {
  title = 'signup_login';
  pageName: string = "login";

  //** Slide-toggle değiştiği zaman bu metot çalışır */
  //** İlk başta bu metoda göndereceğimiz eventi bilmediğimiz için konsola page değişkenini yazdırıyoruz  */
  //** Konsolda yazan değişkenin tipinin 'MatSlideToggleChange' olduğunu öğrendik  */
  //** checked değeri trueysa tanımladığımız değişkenin değerini değiştiriyoruz. Bunun kontrolünü de html tarafında yapıyoruz */
  handleToggleChange(page: MatSlideToggleChange) {
    console.log(page);
    if (page.checked === true) {
      this.pageName = "signup";
    } else {
      this.pageName = "login";
    }
  }
}
