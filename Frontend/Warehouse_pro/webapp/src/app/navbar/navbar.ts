import { Component, AfterViewInit } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-navbar',
  standalone:false,
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class Navbar implements AfterViewInit {

  ngAfterViewInit(): void {
    const tl = gsap.timeline();

    
    tl.from('.custom-toolbar', {
      opacity: 0,
      y: -50,
      duration: 0.5,
      ease: 'power2.out'
    });

    
    tl.from('.logo', {
      scale: 0.5,
      opacity: 0,
      duration: 0.6,
      ease: 'back.out(1.7)'
    }, '-=0.3');

   
    tl.from('.click', {
      y: -20,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: 'power2.out'
    }, '-=0.4');
  }
}
