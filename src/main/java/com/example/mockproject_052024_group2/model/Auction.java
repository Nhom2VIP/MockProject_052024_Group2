package com.example.mockproject_052024_group2.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

@Setter
@Getter
@Table(name = "auctions")
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Auction extends BaseEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "auction_id")
    private long id;
    private String name;
    private String description;
    private LocalDateTime startDate;
    private LocalDateTime endDate;
    private double startingPrice;
    @ManyToOne
    @JoinColumn(name = "seller_id")
    private User seller;
    @OneToMany(mappedBy = "auction")
    @JsonIgnore
    private List<BidHistory> bidHistories;
    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;
    private AuctionStatus status;
    @OneToMany(mappedBy = "auction")
    @JsonIgnore
    private List<WatchList> watchLists;
}
