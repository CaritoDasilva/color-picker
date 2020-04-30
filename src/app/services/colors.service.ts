import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ColorsService {

  constructor(private http: HttpClient) { }


  public getColorsByPage(page:number) {
    return this.http.get(`https://reqres.in/api/colors?page=${page}`)
  }
}
