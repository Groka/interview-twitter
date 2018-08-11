import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {AuthService} from "../../services/auth.service";

@Component({
  moduleId: module.id,
  templateUrl: 'register.component.html',
  selector: 'app-register',
})

export class RegisterComponent {
  model: any = {username: '', password: '', fullname: '', confirmPassword: ''};
  loading = false;

  constructor(private router: Router,
              private authService: AuthService) {
  }

  onSubmit(loginForm: NgForm): void {
    if (loginForm.valid) {
      this.register();  
    }
  }

  register() {
    this.loading = true;
    this.authService.register(this.model);
    this.router.navigate(['/app/tweets']);
  }

  isFormSubmittedWithInvalidUsername(loginForm: NgForm): boolean {
    const usernameFormControl = loginForm.form.controls['username'];
    return loginForm.submitted && usernameFormControl && !usernameFormControl.valid;
  }

  isFormSubmittedWithInvalidPassword(loginForm: NgForm): boolean {
    const passwordFormControl = loginForm.form.controls['password'];
    return loginForm.submitted && passwordFormControl && !passwordFormControl.valid;
  }

  isFormSubmittedWithInvalidConfirmPassword(loginForm: NgForm): boolean {
    const confirmPasswordFormControl = loginForm.form.controls['confirmPassword'];
    return loginForm.submitted && confirmPasswordFormControl && !confirmPasswordFormControl.valid && 
      this.model.password === this.model.confirmPassword;
  }

  isFormSubmittedWithInvalidFullname(loginForm: NgForm): boolean {
    const fullnameFormControl = loginForm.form.controls['fullname'];
    return loginForm.submitted && fullnameFormControl && !fullnameFormControl.valid;
  }
}
