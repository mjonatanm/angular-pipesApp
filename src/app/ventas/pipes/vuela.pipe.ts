//Archivo creado manualmente.
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'vuela'
})

export class VuelaPipe implements PipeTransform {
    
    transform(vuela: boolean):string{
        
        // if (esMayusculas) {
        //     return value.toUpperCase();
        // }else{
        //     return value.toLocaleLowerCase();
        // }

        return (vuela) ? 'vuela' : 'no vuela';
    }
}