import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements AfterViewInit {
  @ViewChild('heroSection') heroSection!: ElementRef;
  @ViewChild('aboutSection') aboutSection!: ElementRef;
  @ViewChild('servicesSection') servicesSection!: ElementRef;

ngAfterViewInit() {
  gsap.registerPlugin(ScrollTrigger);

  
  window.scrollTo({ top: 0 });

 
  gsap.from(this.heroSection.nativeElement, {
    opacity: 0,
    y: -50,
    duration: 3,
    ease: 'power1.out',
  });

  gsap.to(this.heroSection.nativeElement, {
    backgroundPositionY: '40%',
    ease: 'none',
    scrollTrigger: {
      trigger: this.heroSection.nativeElement,
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    }
  });


  gsap.from(this.aboutSection.nativeElement, {
    scrollTrigger: {
      trigger: this.aboutSection.nativeElement,
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
    opacity: 0,
    x: -100,
    duration: 2.5,
    ease: 'power1.out',
  });

  
  gsap.from(this.servicesSection.nativeElement.querySelectorAll('li'), {
    scrollTrigger: {
      trigger: this.servicesSection.nativeElement,
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
    opacity: 0,
    y: 30,
    stagger: 0.4,
    duration: 1.5,
    ease: 'power2.out',
  });

  
  setTimeout(() => {
    const hash = window.location.hash;

    if (hash === '#about' && this.aboutSection) {
      this.aboutSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
    } else if (hash === '#services' && this.servicesSection) {
      this.servicesSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }, 3000); 
}
}