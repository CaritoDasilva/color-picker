export class Color{

    id: number;
    name: string;
    year: number;
    color: string;
    pantone_value: string;

    constructor( id: number, name: string, year: number, color: string, pantone_value: string) {
        this.id = id;
        this.name = name;
        this.year = year;
        this.color = color;
        this.pantone_value = pantone_value;
    }
}