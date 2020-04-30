import { Component, OnInit, Input } from '@angular/core';
import { Color } from '../../models/color.model';

@Component({
  selector: 'app-color-card',
  templateUrl: './color-card.component.html',
  styleUrls: ['./color-card.component.scss']
})

export class ColorCardComponent implements OnInit {

  @Input() color: Color;
  isCopied: boolean;

  constructor() {
    this.isCopied = false;
  }

  ngOnInit(): void {
  }

  public copyColor() {
    this.isCopied = true;
    setTimeout(() => {
      this.isCopied = false;
    }, 1000)

  }

}
