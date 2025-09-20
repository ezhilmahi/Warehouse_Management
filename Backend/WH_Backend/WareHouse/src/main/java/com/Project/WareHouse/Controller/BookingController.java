package com.Project.WareHouse.Controller;

import com.Project.WareHouse.model.Booking;
import com.Project.WareHouse.model.Stock;
import com.Project.WareHouse.model.Tracking;
import com.Project.WareHouse.repository.BookingRepository;
import com.Project.WareHouse.repository.StockRepository;
import com.Project.WareHouse.repository.TrackingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/bookings")
@CrossOrigin(origins = "http://localhost:4200")
public class BookingController {

    @Autowired
    private BookingRepository bookingRepository;

    @Autowired
    private TrackingRepository trackingRepository;

    @Autowired
    private StockRepository stockRepository;

    @PostMapping("/create")
    public ResponseEntity<?> createBooking(@RequestBody Booking booking) {

        Stock stock = stockRepository.findByProductName(booking.getProductName());
        if (stock == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Product not found in stock");
        }


        if (stock.getProductQuantity() < booking.getQuantity()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Not enough stock available");
        }


        stock.setProductQuantity(stock.getProductQuantity() - booking.getQuantity());
        stockRepository.save(stock);


        Booking savedBooking = bookingRepository.save(booking);


        Tracking tracking = new Tracking();
        tracking.setTrackingNumber(savedBooking.getTrackingNumber());
        tracking.setStatus("Pending");
        trackingRepository.save(tracking);

        return ResponseEntity.status(HttpStatus.CREATED).body(savedBooking);
    }
}
