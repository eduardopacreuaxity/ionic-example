import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  columns: any[] = [
    { name: 'ion-col-1', size: "12", sizesm: "6", sizelg: "3", sizexl: "2" },
    { name: 'ion-col-2', size: "12", sizesm: "6", sizelg: "3", sizexl: "2" },
    { name: 'ion-col-3', size: "12", sizesm: "6", sizelg: "3", sizexl: "2" },
    { name: 'ion-col-4', size: "12", sizesm: "6", sizelg: "3", sizexl: "2" },
    { name: 'ion-col-5', size: "12", sizesm: "6", sizelg: "3", sizexl: "2" },
    { name: 'ion-col-6', size: "12", sizesm: "6", sizelg: "3", sizexl: "2" }
  ]
  list: string[] = ['Pokémon Yellow', 'Mega Man X', 'The Legend of Zelda', 'Pac-Man', 'Super Mario World', 'Pokémon Yellow', 'Mega Man X', 'The Legend of Zelda', 'Pac-Man', 'Super Mario World', 'Pokémon Yellow', 'Mega Man X', 'The Legend of Zelda', 'Pac-Man', 'Super Mario World', 'Pokémon Yellow', 'Mega Man X', 'The Legend of Zelda', 'Pac-Man', 'Super Mario World', 'Pokémon Yellow', 'Mega Man X', 'The Legend of Zelda', 'Pac-Man', 'Super Mario World', 'Pokémon Yellow', 'Mega Man X', 'The Legend of Zelda', 'Pac-Man', 'Super Mario World', 'Pokémon Yellow', 'Mega Man X', 'The Legend of Zelda', 'Pac-Man', 'Super Mario World']

  constructor() { }

  ngOnInit() {
  }

}
