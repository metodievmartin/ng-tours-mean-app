import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as fromApp from '../../../reducers';
import { UserActions } from '../../store/actions';
import { User } from '../../../auth/interfaces';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings-page.component.html',
  styleUrls: ['./user-settings-page.component.css']
})
export class UserSettingsPageComponent implements OnInit {
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
  uploadedStarted = false;
  uploaded= false;
  imageName = '';
  fileUploadError: string | null = null;

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
    if (!this.infoUpdateForm.valid || this.fileUploadError) {
      return;
    }

    const { name, email, photo } = this.infoUpdateForm.value;

    this.store.dispatch(
      UserActions.updateCurrentUserInfo({ name, email, photo })
    );

    this.uploadedStarted = false;
    this.uploaded = false;
    this.imageName = '';
    this.fileUploadError = null;
  }

  onImageChange(e: any) {
    this.uploadedStarted = true;
    const reader = new FileReader();

    if(e.target.files && e.target.files.length) {
      const [file] = e.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.infoUpdateForm.patchValue({
          photo: file
        });

        this.uploaded= true;

        if (file.type === 'image/png' || file.type === 'image/jpeg') {
          this.fileUploadError = null;
          this.imageName = file.name;
        } else {
          this.fileUploadError = 'Only files of type image are allowed - .jpg .png'
        }
      };

    }
  }

  onPasswordUpdate() {
    if (this.passwordUpdateForm.invalid) {
      return;
    }

    if (this.passwordUpdateForm.controls.newPassword !==
      this.passwordUpdateForm.controls.passwordConfirm){
      return;
    }

    const { currentPassword, newPassword, passwordConfirm } = this.passwordUpdateForm.value;

    console.log(this.passwordUpdateForm.value)
    this.store.dispatch(
      UserActions.updateCurrentUserPassword({
        currentPassword,
        newPassword,
        passwordConfirm,
      })
    );
  }
}
