import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { __param } from 'tslib';
import { userdetails } from '../interfaces/userdetails';
import { serviceService } from '../services/service.service';

@Component({
  selector: 'app-homedetails',
  templateUrl: './homedetails.component.html',
  styleUrls: ['./homedetails.component.css'],

})
export class HomedetailsComponent implements OnInit {

  sin:any;

  constructor(private ss:ActivatedRoute,
              private ser:serviceService
    ) { }

  ngOnInit() {
    this.ss.params.subscribe(params=>{
      this.sin=this.ser.getsingleuser(+params['id']);
    }
    );

  }

}