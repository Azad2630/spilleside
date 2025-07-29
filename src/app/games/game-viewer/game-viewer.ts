import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-game-viewer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './game-viewer.html',
  styleUrls: ['./game-viewer.css']
})
export class GameViewerComponent implements OnInit {
  folderName: string = '';
  safeUrl?: SafeResourceUrl;

  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.folderName = this.route.snapshot.paramMap.get('folder') || '';
    console.log('folderName:', this.folderName);
  
    if (this.folderName) {
      const url = `/assets/${this.folderName}/index.html`;
      console.log('iframe URL:', url);
      this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    } else {
      console.warn('folderName er tom!');
    }
  }
  
}
