import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  @ViewChild('camera', { static: true }) videoElement!: ElementRef<HTMLVideoElement>;
  @ViewChild('quadro', { static: true }) canvasElement!: ElementRef<HTMLCanvasElement>;

  controlesCamera: boolean = false;
  controlesCrop: boolean = true;
  config = {};
  imageUrl = '404.png';

  ngOnInit(): void {

  }

  capuraCamera(): void {
    navigator.mediaDevices.getUserMedia({ video: true})
      .then(stream => {
        const video = this.videoElement.nativeElement;
        video.srcObject = stream;
        video.play();
      })
      .catch(error => {
        console.error('Falha ao acessar a camera.', error);
      });
  }
}
