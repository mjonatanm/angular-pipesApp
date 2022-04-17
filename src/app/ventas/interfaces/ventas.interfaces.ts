import { SplitInterpolation } from "@angular/compiler";

export enum Color {
    rojo,
    negro,
    azul,
    verde
}

export interface Heroe{
    nombre: string;
    vuela: boolean;
    color: Color
}