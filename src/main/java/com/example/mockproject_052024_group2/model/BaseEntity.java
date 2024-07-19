package com.example.mockproject_052024_group2.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.util.Date;


@Getter
@Setter
@MappedSuperclass
public class BaseEntity {
    @CreationTimestamp
    @Column(updatable = false, nullable = false)
    private Date createdAt = new Date();

    @UpdateTimestamp
    @Column(nullable = false)
    private Date updatedAt = new Date();

}
