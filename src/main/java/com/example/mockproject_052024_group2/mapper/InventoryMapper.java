package com.example.mockproject_052024_group2.mapper;

import com.example.mockproject_052024_group2.dto.request.InventoryRequest;
import com.example.mockproject_052024_group2.dto.response.InventoryResponse;
import com.example.mockproject_052024_group2.model.Inventory;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface InventoryMapper extends GenericMapper<Inventory, InventoryRequest, InventoryResponse>{
}
