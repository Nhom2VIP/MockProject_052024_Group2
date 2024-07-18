package com.example.mockproject_052024_group2.mapper;

import com.example.mockproject_052024_group2.dto.request.ProductRequest;
import com.example.mockproject_052024_group2.dto.response.ProductResponse;
import com.example.mockproject_052024_group2.model.Product;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ProductMapper extends GenericMapper<Product, ProductRequest, ProductResponse> {
}
