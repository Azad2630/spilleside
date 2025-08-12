import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';

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

  constructor(private http: HttpClient, private cd: ChangeDetectorRef) {}

  ngOnInit() {
  this.http.get<Spil[]>('http://localhost:5176/api/spil')
    .subscribe({
      next: (data) => {
        this.spilListe = [...(data ?? [])];
        this.valgtSpilId = null; 
        this.cd.detectChanges();
      },
      error: (err) => console.error('Fejl ved hentning af spil', err)
    });
}

  hentScores() {
  if (this.valgtSpilId !== null) {
    this.http.get<Score[]>(`http://localhost:5176/api/scores`)
      .subscribe(data => {
        // filtrér manuelt i frontend
        this.scores = data.filter(s => s.spilId === this.valgtSpilId);
        this.cd.detectChanges();
      });
    }
  }
}