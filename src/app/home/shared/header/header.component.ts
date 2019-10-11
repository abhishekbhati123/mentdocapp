import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
  }
  openLeftMenu() {
    document.getElementById("leftMenu").style.display = "block";
  }
  closeLeftMenu() {
    document.getElementById("leftMenu").style.display = "none";
  }
  openRightMenu() {
    document.getElementById("rightMenu").style.display = "block";
  }
  closeRightMenu() {
    document.getElementById("rightMenu").style.display = "none";
  }
  gotoSecurity(){
    this.router.navigateByUrl('security')
  }
  gotoAdmin(){
    this.router.navigateByUrl('admin')
  }
}
