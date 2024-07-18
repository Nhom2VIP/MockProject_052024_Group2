package com.example.mockproject_052024_group2.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "addresses")
@AllArgsConstructor
@NoArgsConstructor
public class Address extends BaseEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column( name = "address_id")
    private long id;
    private String addressLine1;
    private String addressLine2;
    private String city;
    private String state;
    private String postalCode;
    private String country;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
}
