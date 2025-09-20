package com.Project.WareHouse.repository;

import com.Project.WareHouse.model.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingRepository extends JpaRepository<Booking, Long> {
}
