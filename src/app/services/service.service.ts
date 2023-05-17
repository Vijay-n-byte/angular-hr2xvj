import { Injectable } from '@angular/core';
import { userdetails } from '../interfaces/userdetails';

@Injectable()
export class serviceService {

  private use:userdetails[]=[
    {id: 1 ,name:'vijay', address:'chennai',src:'https://tse1.mm.bing.net/th?id=OIP.NbfPECA64xbFnmW58MbWDQHaEo&pid=Api&P=0&h=180'},
    {id: 2 ,name:'kokila', address:'vellore',src:'https://images3.alphacoders.com/165/thumb-1920-165265.jpg'},
    {id: 3 ,name:'selvam', address:'bangalore',src:'http://www.wallpapers13.com/wp-content/uploads/2015/12/Nature-Lake-Bled.-Desktop-background-image.jpg'},
]

  constructor() { }

  getusers():userdetails[]{
    return this.use;
  }

  getsingleuser(rr:number):userdetails{
    return this.use.filter(u=>u.id===rr)[0];
  }
}