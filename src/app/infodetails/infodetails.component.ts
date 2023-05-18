import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sample1Service } from '../services/sample1.service';

@Component({
  selector: 'app-infodetails',
  templateUrl: './infodetails.component.html',
  styleUrls: ['./infodetails.component.css']
})
export class InfodetailsComponent implements OnInit {

  using:any;
  constructor(private ss:Sample1Service,
    private dd:ActivatedRoute) { }

  ngOnInit() {
    this.dd.params.subscribe(params=>{
      this.ss.getsingleuserviarestapi(+params['id']).subscribe(
        u=> this.using=u
        
      );
    });
  }
}