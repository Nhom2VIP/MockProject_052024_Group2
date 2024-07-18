package com.example.mockproject_052024_group2.model;

import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Setter
@Getter
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class User extends BaseEntity{
    private String fullName;
    private String phoneNumber;
    private Date dateOfBirth;
    private String username;
    private String password;
    private String email;
}
