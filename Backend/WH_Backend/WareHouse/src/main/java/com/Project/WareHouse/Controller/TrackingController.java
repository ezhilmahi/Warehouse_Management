package com.Project.WareHouse.Controller;

import com.Project.WareHouse.model.Tracking;
import com.Project.WareHouse.repository.TrackingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/tracking")
@CrossOrigin(origins = "http://localhost:4200")
public class TrackingController {

    @Autowired
    private TrackingRepository trackingRepository;

    @GetMapping("/find")
    public ResponseEntity<?> findTracking(@RequestParam String trackingNumber) {
        Optional<Tracking> tracking = trackingRepository.findByTrackingNumber(trackingNumber);
        return tracking
                .<ResponseEntity<?>>map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity
                        .status(HttpStatus.NOT_FOUND)
                        .body("Tracking number not found"));
    }

    @PostMapping("/assign")
    public ResponseEntity<Tracking> assignTracking(@RequestBody Tracking tracking) {
        Tracking saved = trackingRepository.save(tracking);
        return ResponseEntity.status(HttpStatus.CREATED).body(saved);
    }
}
