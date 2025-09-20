import { Component, OnInit, AfterViewInit, QueryList, ViewChildren, ElementRef } from '@angular/core';
import { ProductService } from '../product.service';
import { Observable } from 'rxjs';
import gsap from 'gsap';

@Component({
  selector: 'app-user-panel',
  standalone: false,
  templateUrl: './user-panel.html',
  styleUrls: ['./user-panel.css']
})
export class UserPanel implements OnInit, AfterViewInit {
  products$: Observable<any[]> = new Observable();

  @ViewChildren('card') cards!: QueryList<ElementRef>;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products$ = this.productService.getProducts();
  }

  ngAfterViewInit(): void {
  gsap.from('.product-card', {
    opacity: 0,
    y: 40,
    duration: 0.6,
    stagger: 0.1,
    ease: 'power2.out'
  });
}


  bookProduct(product: any) {
    alert(`You booked: ${product.productName}`);
  }
}
