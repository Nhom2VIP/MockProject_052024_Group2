package com.example.mockproject_052024_group2.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.FORBIDDEN)
public class RefreshTokenException extends RuntimeException{
    public RefreshTokenException(String message) {
        super(message);
    }
}
