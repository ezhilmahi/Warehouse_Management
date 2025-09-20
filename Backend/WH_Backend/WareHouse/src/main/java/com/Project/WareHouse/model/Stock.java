package com.Project.WareHouse.model;

import jakarta.persistence.*;

@Entity
@Table(name="stock")
public class Stock {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String productName;
    private double productPrice;
    private int productQuantity;
    private String product_details;
    private boolean masked;
    private String trackingNumber;
    private String trackingStatus;


    public Long getId() {
        return id;
    }
    public void setId(Long id) {

        System.out.println(id+"vishnu");
        this.id = id;
    }

    public String getProductName() {
        return productName;
    }
    public void setProductName(String productName) {
        this.productName = productName;
    }

    public double getProductPrice() {
        return productPrice;
    }
    public void setProductPrice(double productPrice) {
        this.productPrice = productPrice;
    }

    public int getProductQuantity() {
        return productQuantity;
    }
    public void setProductQuantity(int productQuantity) {
        this.productQuantity = productQuantity;
    }

    public String getProductDetails() {
        return product_details;
    }
    public void setProductDetails(String product_details) {
        this.product_details = product_details;
    }

    public boolean isMasked() {
        return masked;
    }
    public void setMasked(boolean masked) {
        this.masked = masked;
    }

    public String getTrackingNumber() {
        return trackingNumber;
    }
    public void setTrackingNumber(String trackingNumber) {
        this.trackingNumber = trackingNumber;
    }

    public String getTrackingStatus() {
        return trackingStatus;
    }
    public void setTrackingStatus(String trackingStatus) {
        this.trackingStatus = trackingStatus;
    }
}
