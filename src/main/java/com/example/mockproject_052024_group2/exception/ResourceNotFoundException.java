package com.example.mockproject_052024_group2.exception;

public class ResourceNotFoundException extends RuntimeException{
    public ResourceNotFoundException(String resourceName, String fieldName, Object fieldValue) {
        super(String.format("%s not found with %s: '%s'", resourceName,fieldName, fieldValue));
    }
}
