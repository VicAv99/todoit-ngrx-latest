import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  constructor(private snackbar: MatSnackBar) { }

  notify(message: string, action: string = 'Ok') {
    this.snackbar.open(message, action, {
      duration: 3000
    });
  }
}
