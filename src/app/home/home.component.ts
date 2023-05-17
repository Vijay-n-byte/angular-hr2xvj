import { Component, OnInit } from '@angular/core';
import { userdetails } from '../interfaces/userdetails';
import { serviceService } from '../services/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  use:any;
  constructor(private service:serviceService) { }

  ngOnInit() {
    this.use=this.service.getusers();
  }

}