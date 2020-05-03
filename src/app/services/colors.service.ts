import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Color } from '../models/color.model';
import { Observable, observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorsService {

  palette: Color[];
  colorsPalette: BehaviorSubject<any>;
  constructor(private http: HttpClient) { 
    this.palette = [];
    this.colorsPalette = new BehaviorSubject<any>(this.palette)
  }


  public getColorsByPage(page:number) {
    return this.http.get(`https://reqres.in/api/colors?page=${page}`)
  }

  public getColorPalette() {
    return this.colorsPalette.asObservable();
  }

  public setcolorsPalette(color: Color) {
    (this.palette.length < 3) ? this.palette.push(color) : this.palette;
    return this.colorsPalette.next(this.palette)
  }
}
