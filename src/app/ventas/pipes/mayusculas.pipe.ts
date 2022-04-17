//Archivo creado manualmente.
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'mayusculas'
})

export class MayusculasPipe implements PipeTransform {
    
    transform(value: string, esMayusculas: boolean = true):string{
        
        // if (esMayusculas) {
        //     return value.toUpperCase();
        // }else{
        //     return value.toLocaleLowerCase();
        // }

        return (esMayusculas) ? value.toUpperCase() : value.toLocaleLowerCase();
    }
}