package com.example.mockproject_052024_group2.model;

import com.example.mockproject_052024_group2.pks.WatchListId;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "watch-list")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@IdClass(WatchListId.class)
public class WatchList {
    @Id
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
    @Id
    @ManyToOne
    @JoinColumn(name = "auction_id")
    private Auction auction;
    private LocalDateTime addDate;
}
