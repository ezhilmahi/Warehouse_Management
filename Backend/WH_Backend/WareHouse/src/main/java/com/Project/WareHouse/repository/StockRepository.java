package com.Project.WareHouse.repository;

import com.Project.WareHouse.model.Stock;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StockRepository extends JpaRepository<Stock, Long> {
    Stock findByProductName(String productName);
}
