package com.example.mockproject_052024_group2.model;

import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Product extends BaseEntity{

    private  String name;
    private String category;
    private String description;
    private Double price;
    @ManyToOne
    @JoinColumn(name = "inventoryId")
    private Inventory inventory;
}
