import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonMenu } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild(IonMenu) menu: IonMenu;

  menuList = [
    { name: 'Messages', route: 'tabs/messages' },
    { name: 'Form', route: 'tabs/form' },
    { name: 'List', route: 'tabs/list' }
  ]

  constructor(
    private router: Router
  ) {}

  redirect(route: string) {
    this.menu.close();
    this.router.navigate([route]);
  }

}
