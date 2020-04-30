import { Color } from './color.model';
export class ColorList{
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: Color[];

    constructor(page: number, per_page: number, total: number, total_pages: number, data: Color[]) {
        this.page = page;
        this.per_page = per_page;
        this.total = total;
        this.total_pages = total_pages;
        this.data = data;
    }
}