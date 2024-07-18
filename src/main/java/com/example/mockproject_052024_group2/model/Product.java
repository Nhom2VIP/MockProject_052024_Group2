package com.example.mockproject_052024_group2.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Setter
@Getter
@Table(name = "products")
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Product extends BaseEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "product_id")
    private long id;
    private String name;
    private String category;
    private double price;
    private String description;
    @OneToMany(mappedBy = "product")
    @JsonIgnore
    private List<Auction> auctions;
    @ManyToOne
    @JoinColumn(name = "inventory_id")
    private Inventory inventory;
}
