import { Injectable } from '@angular/core';
import {MonoTypeOperatorFunction, tap, catchError} from 'rxjs';

export interface ToastData {
  body: string;
  delay?: number;
  class?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  toasts: ToastData[] = [];

  constructor() { }

  show(toast: ToastData) {
    this.toasts.push(toast);
  }

  success(body: string) {
    this.show({
      body,
      class: 'bg-success text-light'
    });
  }

  error(body: string) {
    this.show({
      body,
      class: 'bg-danger text-light'
    });
  }

  remove(toast: ToastData) {
    this.toasts = this.toasts.filter(t => t != toast);
  }

  successOp<T>(body: string): MonoTypeOperatorFunction<T> {
    return tap(() => {
      this.success(body);
    });
  }

  errorOp<T>(body: string): MonoTypeOperatorFunction<T> {
    return catchError((error) => {
      this.error(body);
      throw error;
    })
  }
}
