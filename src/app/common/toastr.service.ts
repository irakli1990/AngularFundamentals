import { Injectable } from '@angular/core';


declare let toastr:any


@Injectable()
export class ToasterService{

  success(messege:string,title?:string){
    toastr.success(messege,title);
  }

  info(messege:string,title?:string){
    toastr.info(messege,title);
  }

  worrning(messege:string,title?:string){
    toastr.worrning(messege,title);
  }

  error(messege:string,title?:string){
    toastr.error(messege,title);
  }
}
