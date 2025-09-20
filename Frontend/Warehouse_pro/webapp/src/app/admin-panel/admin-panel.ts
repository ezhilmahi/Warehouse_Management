import { Component, OnInit, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';
import { ProductService } from '../product.service';
import { MatTableDataSource } from '@angular/material/table';
import { Stock } from '../stock.model';

@Component({
  selector: 'app-admin-panel',
  standalone:false,
  templateUrl: './admin-panel.html',
  styleUrls: ['./admin-panel.css']
})
export class AdminPanel implements OnInit, AfterViewInit {
  dataSource = new MatTableDataSource<Stock>([]);
  displayedColumns: string[] = ['productName', 'productPrice', 'productQuantity', 'productDetails', 'masked', 'actions'];

  newProduct: Partial<Stock> = {
    productName: '',
    productPrice: 0,
    productQuantity: 0,
    productDetails: '',
    masked: false
  };

  isEditing = false;
  editId: number | null = null;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  ngAfterViewInit(): void {
    gsap.from('.admin-container', { opacity: 0, y: -50, duration: 1, ease: 'power2.out' });
    gsap.from('.product-form', { opacity: 0, x: -50, duration: 1, delay: 0.5 });
    gsap.from('table', { opacity: 0, y: 30, duration: 1, delay: 1 });
  }

  fetchProducts(): void {
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.dataSource.data = data;
        gsap.from('.mat-row', { opacity: 0, y: 10, stagger: 0.1, duration: 0.5 });
      },
      error: (err) => console.error('Error fetching products:', err)
    });
  }

  addOrUpdateProduct(): void {
    const action = this.isEditing ? this.productService.updateProduct(this.editId!, this.newProduct) : this.productService.addProduct(this.newProduct);
    
    action.subscribe({
      next: () => {
        this.resetForm();
        this.fetchProducts();
        gsap.from('.mat-row:first-child', { scale: 1.1, duration: 0.3, ease: 'back.out(1.7)' });
      },
      error: (err) => console.error('Error saving product:', err)
    });
  }

  editProduct(product: Stock): void {
    this.isEditing = true;
    this.editId = product.id!;
    this.newProduct = { ...product };
  }

  deleteProduct(id: number): void {
    this.productService.deleteProduct(id).subscribe({
      next: () => this.fetchProducts(),
      error: (err) => console.error('Error deleting product:', err)
    });
  }

  cancelEdit(): void {
    this.resetForm();
  }

  private resetForm(): void {
    this.newProduct = {
      productName: '',
      productPrice: 0,
      productQuantity: 0,
      productDetails: '',
      masked: false
    };
    this.isEditing = false;
    this.editId = null;
  }
}
