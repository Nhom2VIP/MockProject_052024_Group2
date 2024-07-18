package com.example.mockproject_052024_group2.model;

import jakarta.persistence.Entity;
import lombok.*;

import javax.imageio.plugins.tiff.GeoTIFFTagSet;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Tax extends BaseEntity{
    private String name;
    private String description;
    private double rate;
}
