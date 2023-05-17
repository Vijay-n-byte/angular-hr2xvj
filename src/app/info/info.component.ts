import { Component, OnInit } from '@angular/core';
import { Userinfo } from '../interfaces/userinfo';
import { Sample1Service } from '../services/sample1.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  u:any;

  constructor(private s:Sample1Service) { }

  ngOnInit() {
    this.s.getuserinfoviarest().subscribe(
      m=>this.u=m
    );

  }
}