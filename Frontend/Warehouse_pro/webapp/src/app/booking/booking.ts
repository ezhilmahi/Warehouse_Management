import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { BookingService } from '../booking.service';
import gsap from 'gsap';

@Component({
  selector: 'app-booking',
  standalone:false,
  templateUrl: './booking.html',
  styleUrls: ['./booking.css']
})
export class BookingComponent implements AfterViewInit {

  booking = {
    productName: '',
    quantity:1,
    customerName: '',
    email: '',
    type: '',
    transportMode: '',
    trackingNumber: ''
  };

  constructor(private bookingService: BookingService, private el: ElementRef) {}

  ngAfterViewInit(): void {
    gsap.from(this.el.nativeElement.querySelectorAll('.animate'), {
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out',
      stagger: 0.1
    });
  }

  submitBooking() {
    this.bookingService.createBooking(this.booking).subscribe({
      next: () => {
        alert('Booking successful!');
        this.booking = {
          productName: '',
           quantity:1,
          customerName: '',
          email: '',
          type: '',
          transportMode: '',
          trackingNumber: ''
        };
      },
      error: (err) => {
        console.error('Booking failed:', err);
        alert('Booking failed!');
      }
    });
  }
}
