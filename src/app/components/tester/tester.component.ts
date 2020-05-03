import { Component, OnInit, Renderer2, Input } from '@angular/core';
import { Color } from '../../models/color.model';

@Component({
  selector: 'app-tester',
  templateUrl: './tester.component.html',
  styleUrls: ['./tester.component.scss']
})
export class TesterComponent implements OnInit {

  @Input() pallette: Color[]
  colorBg: string;

  constructor( private renderer: Renderer2 ) {
    this.colorBg = '#424242';
  }

  ngOnInit(): void {
    this.renderer.setStyle( document.body, 'background-color', this.colorBg )
  }

}
