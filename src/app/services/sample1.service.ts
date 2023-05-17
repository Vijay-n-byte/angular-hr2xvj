import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Userinfo } from '../interfaces/userinfo';

@Injectable()
export class Sample1Service {

  private rooturl:string="https://jsonplaceholder.typicode.com/posts";

 sim:any;

  constructor(private h:HttpClient) { }

  getuserinfoviarest():Observable<Userinfo[]>{
    return this.sim=this.h.get<Userinfo[]>(this.rooturl);
  }
}