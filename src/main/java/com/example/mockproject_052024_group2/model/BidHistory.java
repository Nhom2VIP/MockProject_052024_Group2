package com.example.mockproject_052024_group2.model;

import com.example.mockproject_052024_group2.pks.BidHistoryId;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Table( name = "bid_histories")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@IdClass(BidHistoryId.class)
public class BidHistory {
    @Column(name = "bid_amount", nullable = false)
    private double bidAmount;
    @Column(name = "bid_time", nullable = false)
    private LocalDateTime bidTime;
    @Id
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
    @Id
    @ManyToOne
    @JoinColumn(name = "auction_id")
    private Auction auction;
}
