package com.Project.WareHouse.repository;

import com.Project.WareHouse.model.Tracking;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TrackingRepository extends JpaRepository<Tracking, Long> {
    Optional<Tracking> findByTrackingNumber(String trackingNumber);
}
