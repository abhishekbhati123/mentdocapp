import { Component, OnInit } from '@angular/core';
import baguetteBox from 'baguettebox.js';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.css']
})
export class GallaryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    baguetteBox.run('.tz-gallery');
  }

}
