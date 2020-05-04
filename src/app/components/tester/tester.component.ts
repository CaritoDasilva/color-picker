import { Component, OnInit, Renderer2, ViewChild, ElementRef, ViewChildren } from '@angular/core';
import { Color } from '../../models/color.model';
import { ColorsService } from '../../services/colors.service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-tester',
  templateUrl: './tester.component.html',
  styleUrls: ['./tester.component.scss']
})
export class TesterComponent implements OnInit {
  @ViewChild('rectangleContainer') rectangleContainer: ElementRef;
  palette: Color[];
  circleLi: ElementRef;
  constructor( private renderer: Renderer2, private colorService: ColorsService, private ref: ElementRef ) {
    this.palette = [];
  }

  ngOnInit(): void {
    this.getPalette()
  }
  
  ngAfterViewInit(): void {
    this.setColorsTester();
  }
  
  ngOnDestroy() {
    this.renderer.removeStyle(document.body, 'background-color')
  }
  
  getPalette() {
    this.colorService.getColorPalette().subscribe((data: Color[]) => {
      this.palette = data;
      
    })
    
  }
  
  setColorsTester() {
    this.circleLi = this.ref.nativeElement.querySelector('.circle-li');
    this.renderer.setStyle( document.body, 'background-color', this.palette[0].color )
    this.renderer.setStyle( this.rectangleContainer.nativeElement, 'background-color', this.palette[1].color)
    this.renderer.setStyle( this.circleLi, 'background-color', this.palette[2].color )
  }

  drop(event: CdkDragDrop<Color[]>) {
    moveItemInArray(this.palette, event.previousIndex, event.currentIndex);
    this.setColorsTester()
    console.log(this.palette)
  }


}
