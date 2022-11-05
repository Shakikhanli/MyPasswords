import { Passsword } from './password.model';
import { ServiceService } from './../service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  printToConsoleBtn  =  document.querySelector('#myElement');

  passwords: Passsword[];
  isPasswordHidden = true;
  selectedItem: any;
  preSelectedItem: any;
  test = false;

  private file = 'assets/data/venues.json';

  constructor(private passwordService: ServiceService) { }

  ngOnInit() {
    this.passwords = this.passwordService.getAllPasswords();
  }

  public showPassword( item: number ) {

    this.isPasswordHidden = !this.isPasswordHidden;
    // if (this.isPasswordHidden == true)

    console.log('Is password hidden: ' + this.isPasswordHidden);
    // this.selectedItem = item;
    console.log(item);
    // this.test = !this.test;
    console.log(this.printToConsoleBtn);

    return this.isPasswordHidden;

  }

}
