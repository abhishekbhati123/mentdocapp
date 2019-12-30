import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.css']
})
export class Header2Component implements OnInit {

  constructor() { }

  ngOnInit() {
    $(window).on("scroll",function(){
      if($(window).scrollTop()){
        $('nav').addClass('black');
      }
      else{
        $('nav').removeClass('black');
      }
    })

   
    $(document).ready(function() {
      $('.leftmenutrigger').on('click', function(e) {
          $('.side-nav').toggleClass("open");
          e.preventDefault();
      });
  });
  $(function() {
      $(document).scroll(function() {
          var $nav = $(".fixed-top");
          $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      });
  });
  $(".card-link").click(function() {
      $(this).toggleClass("down");
  })

  }

}
