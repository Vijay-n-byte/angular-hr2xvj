import { Component, OnInit } from '@angular/core';
import {messagedetailsguard} from '../guards/auth.guard'

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit ,messagedetailsguard{

  constructor() { }

  ngOnInit() {
  }

  confirm1(){
    return confirm("are you want to exit?");
  }

}