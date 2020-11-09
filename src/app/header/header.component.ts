import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  @Input() EditorialName: string;
  @Output() titleClick = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    console.log('HEADER');
  }

  // tslint:disable-next-line: typedef
  handleTitleClick() {
    this.titleClick.next();
  }

}
