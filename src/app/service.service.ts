import { Injectable } from '@angular/core';
import { Passsword } from './main/password.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

 private passwords: Passsword[] = [
    {
      id: '001',
      name: 'Facebook',
      password: 'Facebook123'
    },
    {
      id: '002',
      name: 'Instagram',
      password: 'Instagram123'
    },
    {
      id: '003',
      name: 'Email',
      password: 'Email123'
    }
  ];

  constructor() { }

  getAllPasswords() {
    return [...this.passwords];
  }
}
