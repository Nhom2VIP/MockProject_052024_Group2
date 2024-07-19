package com.example.mockproject_052024_group2.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
@Table(name = "inventories")
@AllArgsConstructor
@NoArgsConstructor
public class Inventory extends BaseEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "inventory_id")
    private long id;
    private String address;
    private Boolean status;
    @OneToMany(mappedBy = "inventory")
    @JsonIgnore
    private List<Product> products;
}
