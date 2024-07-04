import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor() { }

  showError(message: string) {
    console.error(message);
  }

  showInfo(message: string) {
    console.log(message)
  }

  showSuccess(message: string) {
    console.log(message);
  }
}
