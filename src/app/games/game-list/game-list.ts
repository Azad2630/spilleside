import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Game {
  name: string;
  folder: string;
}

@Component({
  selector: 'app-game-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './game-list.html',
  styleUrls: ['./game-list.css']
})
export class GameListComponent  {
  // games = new Array(7).fill(null); // Midlertidigt placeholder array
  games: Game[] = [
    { name: 'Platformspil', folder: 'unitygame1' },
    { name: 'Skydespil', folder: 'unitygame2' },
  ];
}
