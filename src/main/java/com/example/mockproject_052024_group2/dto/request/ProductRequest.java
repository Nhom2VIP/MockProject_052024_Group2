package com.example.mockproject_052024_group2.dto.request;

import com.example.mockproject_052024_group2.model.Inventory;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

public class ProductRequest {
    private  String name;
    private String category;
    private String description;
    private Double price;
}
