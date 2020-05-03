import { Component, OnInit, Renderer2, Input } from '@angular/core';
import { Color } from '../../models/color.model';
import { ColorsService } from '../../services/colors.service';

@Component({
  selector: 'app-tester',
  templateUrl: './tester.component.html',
  styleUrls: ['./tester.component.scss']
})
export class TesterComponent implements OnInit {

  // @Input() pallette: Color[]

  colorBg: string;
  primaryColor: string;
  secundaryColor: string;
  palette: Color[];

  constructor( private renderer: Renderer2, private colorService: ColorsService ) {
    this.colorBg = '#ffffff';
    this.palette = [];
  }

  ngOnInit(): void {
    this.colorService.getColorPalette().subscribe((data: Color[]) => {
      this.palette = data;
      this.colorBg = data[0].color;
      this.primaryColor = data[1].color
      this.secundaryColor = data[2].color;

    })
    this.renderer.setStyle( document.body, 'background-color', this.colorBg )
  }

}
