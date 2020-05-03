import { Component, OnInit, Renderer2, Output, EventEmitter } from '@angular/core';
import { ColorsService } from '../../services/colors.service';
import { Color } from '../../models/color.model';
import { ColorList } from '../../models/colorList.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  colorList: ColorList;
  colors: Color[];
  page: number;
  constructor(private colorService: ColorsService) { 
    this.colors = [];
    this.page = 1;
  }

  ngOnInit(): void {
    this.getColors(this.page);
  }

  public getColors(page: number) {
    this.colorService.getColorsByPage(page).subscribe((data: ColorList) => {
      this.colorList = new ColorList(data.page, data.per_page, data.total, data.total_pages, data.data)
      this.colors = data.data;
    })
  }

  passColorToPalette(color: Color) {
    return this.colorService.setcolorsPalette(color);
  }

}
