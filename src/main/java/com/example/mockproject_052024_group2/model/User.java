package com.example.mockproject_052024_group2.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@Setter
@Getter
@Entity
@Table(name = "users")
@AllArgsConstructor
@NoArgsConstructor
public class User extends BaseEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private long id;
    private String fullName;
    private String phoneNumber;
    private String addressId;
    private LocalDate dateOfBirth;
    private String userName;
    private String password;
    private String email;
    private ERole role;
    @OneToMany(mappedBy = "user")
    private List<Address> addresses;
    @OneToMany(mappedBy = "user")
    private List<BidHistory> bidHistories;
    @OneToMany(mappedBy = "seller")
    private List<Auction> auctions;
    @OneToMany(mappedBy = "buyer")
    @JsonIgnore
    private List<Transaction> transactionBuyer;
    @OneToMany(mappedBy = "seller")
    @JsonIgnore
    private List<Transaction> transactionSeller;
    @OneToMany(mappedBy = "user")
    @JsonIgnore
    private List<WatchList> watchLists;
}
