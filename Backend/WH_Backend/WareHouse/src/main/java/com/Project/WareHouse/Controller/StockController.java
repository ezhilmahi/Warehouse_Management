package com.Project.WareHouse.Controller;

import com.Project.WareHouse.model.Stock;
import com.Project.WareHouse.repository.StockRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
@RequestMapping("/api/stock")
@CrossOrigin(origins = "http://localhost:4200")
public class StockController {

    private static final Logger logger =LoggerFactory.getLogger(StockController.class);

    @Autowired
    private StockRepository stockRepository;

    @GetMapping("/all")
    public List<Stock> getAllStocks() {
        return stockRepository.findAll();
    }

    @PostMapping("/add")
    public Stock addStock(@RequestBody Stock stock) {
        System.out.println("data: "+stock.getProductDetails());
        logger.debug("data: "+stock.getProductDetails());

        return stockRepository.save(stock);
    }

    @PutMapping("/update/{id}")
    public Stock updateStock(@PathVariable Long id, @RequestBody Stock stock) {
        stock.setId(id);
        return stockRepository.save(stock);
    }

    @DeleteMapping("/{id}")
    public void deleteStock(@PathVariable Long id) {
        stockRepository.deleteById(id);
    }
}
