package com.example.mockproject_052024_group2.model;

import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Auction extends BaseEntity{
    private String name;
    private String description;
    private Date startDate;
    private Date endDate;

}
