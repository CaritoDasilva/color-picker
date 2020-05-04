import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as M from 'materialize-css'
import { ColorsService } from './services/colors.service';
import { Color } from './models/color.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('collapsible', { static: false })collapsible: ElementRef;

  instances: M.Collapsible;
  colorPalette: Color[];
  constructor( private colorService: ColorsService) {
    this.colorPalette = [];
  }


  ngOnInit() {  
    this.colorToPalette()
  }
  
  ngAfterViewInit(): void {
    this.instances = M.Collapsible.init(this.collapsible.nativeElement);
  }

  closeCollapsible() {
    this.instances.close(0);
  }
  

  removeColorFromPalette(i: number) {
    return this.colorPalette.splice(i, 1);
  }
  
  colorToPalette() {
    return this.colorService.getColorPalette().subscribe((data: Color[]) => {
      this.colorPalette = data;
    })
  }
}
