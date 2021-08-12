import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as fromApp from '../../../../reducers';
import { UserActions } from '../../../store/actions';
import { User } from '../../../../auth/interfaces';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent implements OnInit {
  userImagesUrl = environment.restApiHost + environment.userImg;
  user: User | null = null;
  loading = false;
  infoUpdateForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    photo: new FormControl(null),
  });
  passwordUpdateForm = new FormGroup({
    currentPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
    newPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
    passwordConfirm: new FormControl('', [Validators.required, Validators.minLength(8)])
  })

  constructor(
    public store: Store<fromApp.AppState>
  ) {
  }

  ngOnInit(): void {
    this.store.select(state => state)
      .subscribe(state => {
        this.user = state.auth.user;
        this.loading = state.users.loading;
      });

    this.infoUpdateForm.setValue({
      name: this.user?.name,
      email: this.user?.email,
      photo: null
    });
  }

  onUserInfoUpdate() {
    if (!this.infoUpdateForm.valid) {
      return;
    }

    const { name, email, photo } = this.infoUpdateForm.value;

    console.log(this.infoUpdateForm.value)

    this.store.dispatch(
      UserActions.updateCurrentUserInfo({ name, email, photo })
    );

  }

  onImageChange(e: any) {
    const reader = new FileReader();

    if(e.target.files && e.target.files.length) {
      const [file] = e.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.infoUpdateForm.patchValue({
          photo: file
        });
        console.log(this.infoUpdateForm.get('photo')?.value);
      };

    }
  }

  onPasswordUpdate($event: Event) {
    $event.preventDefault();
    this.store.dispatch(
      UserActions.updateCurrentUserPassword({
        currentPass: 'test',
        newPass: 'test1234',
        confirmPass: 'test1234',
      })
    );
  }
}
