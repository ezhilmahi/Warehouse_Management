import { Component } from '@angular/core';
import { TrackingService } from '../tracking.service';
import { Tracking } from '../stock.model';

@Component({
  selector: 'app-tracking',
  standalone: false,
  templateUrl: './tracking.html',
  styleUrls: ['./tracking.css']
})
export class TrackingComponent {
  trackingNumber: string = '';
  cargoType: string = ''; 
  result: Tracking | null = null;
  error: string = '';

  constructor(private trackingService: TrackingService) {}

  trackShipment(): void {
    this.result = null;
    this.error = '';

    this.trackingService.findTracking(this.trackingNumber).subscribe({
      next: (data: Tracking) => {
        this.result = data;
      },
      error: () => {
        this.error = 'Tracking number not found.';
      }
    });
  }
}
