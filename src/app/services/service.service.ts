import { Injectable } from '@angular/core';
import { userdetails } from '../interfaces/userdetails';

@Injectable()
export class serviceService {

  private use:userdetails[]=[
    {id: 1 ,name:'vijay', address:'chennai'},
    {id: 2 ,name:'kokila', address:'vellore'},
    {id: 3 ,name:'selvam', address:'bangalore'},
]

  constructor() { }

  getusers():userdetails[]{
    return this.use;
  }

  getsingleuser(rr:number):userdetails{
    return this.use.filter(u=>u.id===rr)[0];
  }
}