import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  //@ViewChild('canvas', {static: true})
  //canvas: ElementRef<HTMLCanvasElement>;


  //private ctx: CanvasRenderingContext2D;
  constructor() { }

  ngOnInit(): void {
    //this.ctx = this.canvas.nativeElement.getContext('2d');

    //this.ctx.fillStyle = 'Red';

    //this.ctx.transform(1, 0, -0.5, 1, 0, 0);

    //this.ctx.fillRect(0, 0, 600, 500);

  }

}
