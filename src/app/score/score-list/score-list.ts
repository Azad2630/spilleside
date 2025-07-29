import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

interface Spil {
  spilId: number;
  navn: string;
}

interface Score {
  scoreId: number;
  brugerId: number;
  spilId: number;
  point: number;
  dato: string;
}

@Component({
  selector: 'app-score-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './score-list.html',
  styleUrls: ['./score-list.css']
})
export class ScoreListComponent implements OnInit {
  spilListe: Spil[] = [];
  scores: Score[] = [];

  valgtSpilId: number | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Spil[]>('http://localhost:5176/api/spil')
      .subscribe(data => this.spilListe = data);
  }

  // hentScores() {
  //   if (this.valgtSpilId != null) {
  //     this.http.get<Score[]>(`http://localhost:5176/api/scores/spil/${this.valgtSpilId}`)
  //       .subscribe(data => this.scores = data);
  //   }
  // }
  

  hentScores() {
    if (this.valgtSpilId === 1) {
      this.scores = [
        {
          scoreId: 1,
          brugerId: 101,
          spilId: 1,
          point: 1500,
          dato: new Date().toISOString()
        },
        {
          scoreId: 2,
          brugerId: 102,
          spilId: 1,
          point: 1800,
          dato: new Date().toISOString()
        }
      ];
    } else if (this.valgtSpilId === 2) {
      this.scores = [
        {
          scoreId: 3,
          brugerId: 103,
          spilId: 2,
          point: 900,
          dato: new Date().toISOString()
        }
      ];
    } else {
      this.scores = [];
    }
  }
}