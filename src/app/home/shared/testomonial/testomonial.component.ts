import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-testomonial',
  templateUrl: './testomonial.component.html',
  styleUrls: ['./testomonial.component.css']
})
export class TestomonialComponent implements OnInit {
  Testimonials
  constructor(private http:HttpClient) {
   }

  ngOnInit() {

    this.Testimonials= [
      {
        "_id": "5d89b8f52649ff26c8845825",
        "title": "Consultant Psychiatrist",
        "image": "https://firebasestorage.googleapis.com/v0/b/myapp-345d5.appspot.com/o/mentcom1569306790?alt=media&token=13a30bf5-80aa-4f64-a1cf-b2121b88b7ee",
        "name": "Gorav Gupta",
        "text": "MentDoc is an excellent platform for any psychiatrist as it has been designed carefully keeping the needs of the mental health professionals in mind. I can manage my appointments in a digital manner across different clinics of Tulasi Healthcare.",
        "__v": 0
      },
      {
        "_id": "5d89b9282649ff26c8845826",
        "title": "Psychologist",
        "image": "https://firebasestorage.googleapis.com/v0/b/myapp-345d5.appspot.com/o/mentcom1569306914?alt=media&token=768197bc-08d0-491a-a941-af5fe1527763",
        "name": "Rashi Singh",
        "text": "MentDoc is a well-designed platform sufficing the requirements of any Mental Health Professional. Not only does it help in proper management of my clinical operations, but it also eases the tedious process of record keeping and accessing.",
        "__v": 0
      },
      {
        "_id": "5d89b95e2649ff26c8845827",
        "title": "Psychiatrist",
        "image": "https://firebasestorage.googleapis.com/v0/b/myapp-345d5.appspot.com/o/mentcom1569306941?alt=media&token=9974b844-7b98-4e53-9e0e-ac3c96199b3d",
        "name": "Parvaiz A. Khan",
        "text": "MentDoc as a platform has helped me greatly in management of my appointments , accessing reports, and retrieval of past case records. Keeping and maintaining physical records was a task which has now been made much simpler by MentDoc.",
        "__v": 0
      },
      {
        "_id": "5d89b9c92649ff26c884582a",
        "title": "Psychologists",
        "image": "https://firebasestorage.googleapis.com/v0/b/myapp-345d5.appspot.com/o/mentcom1569307031?alt=media&token=4cbefaae-29da-4063-a672-626396091eb5",
        "name": "Naveen Kumar",
        "text": "MentDoc is a highly efficient software specially designed for the mental health professionals. Not only are my appointments managed efficiently, but also I am able to reschedule my appointments and access reports of my clients.",
        "__v": 0
      }
    ]

  }

  getAllTestimonials(){
    this.http.get('/api/testimonial/getall').subscribe(res=>{
      this.Testimonials = res;
    })
  }
  

}
