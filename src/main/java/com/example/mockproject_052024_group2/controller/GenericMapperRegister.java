package com.example.mockproject_052024_group2.controller;

import com.example.mockproject_052024_group2.constants.ResourceName;
import com.example.mockproject_052024_group2.constants.SearchFields;
import com.example.mockproject_052024_group2.dto.request.InventoryRequest;

import com.example.mockproject_052024_group2.dto.request.ProductRequest;
import com.example.mockproject_052024_group2.dto.response.InventoryResponse;
import com.example.mockproject_052024_group2.dto.response.ProductResponse;
import com.example.mockproject_052024_group2.mapper.InventoryMapper;
import com.example.mockproject_052024_group2.mapper.ProductMapper;
import com.example.mockproject_052024_group2.model.Inventory;
import com.example.mockproject_052024_group2.model.Product;
import com.example.mockproject_052024_group2.repository.IInventoryRepository;
import com.example.mockproject_052024_group2.repository.IProductRepository;
import com.example.mockproject_052024_group2.service.GenericService;
import com.example.mockproject_052024_group2.service.ICrudService;
import com.fasterxml.jackson.databind.JsonNode;
import jakarta.annotation.PostConstruct;
import lombok.AllArgsConstructor;
import org.springframework.context.ApplicationContext;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.mvc.method.RequestMappingInfo;
import org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerMapping;
import org.springframework.web.util.pattern.PathPatternParser;

import java.util.List;

@Component
@AllArgsConstructor
public class GenericMapperRegister {
    private ApplicationContext context;
    private RequestMappingHandlerMapping handlerMapping;

    // Controller
    private GenericController<ProductRequest, ProductResponse> productController;
    private GenericController<InventoryRequest, InventoryResponse> inventoryController;

    // Services
    private GenericService<Product, ProductRequest, ProductResponse> productService;
    private GenericService<Inventory, InventoryRequest, InventoryResponse> inventoryService;

    @PostConstruct
    public void registerControllers() throws NoSuchMethodException  {



        register("inventory",
                inventoryController,
                inventoryService.init(
                        context.getBean(IInventoryRepository.class),
                        context.getBean(InventoryMapper.class),
                        SearchFields.POST,
                        ResourceName.POST
                ),
        InventoryRequest.class);

        register("product",
                productController,
                productService.init(
                        context.getBean(IProductRepository.class),
                        context.getBean(ProductMapper.class),
                        SearchFields.PRODUCT,
                        ResourceName.PRODUCT
                ),
        ProductRequest.class);

    }

    private <I, O> void register(
            String resource,
            GenericController<I, O> controller,
            ICrudService<Long, I, O> service,
            Class<I> requestType
    )throws NoSuchMethodException {
        RequestMappingInfo.BuilderConfiguration options = new RequestMappingInfo.BuilderConfiguration();
        options.setPatternParser(new PathPatternParser());

        controller.setCrudService(service);
        controller.setRequestType(requestType);
        handlerMapping.registerMapping(
                RequestMappingInfo.paths("/api/" + resource)
                        .methods(RequestMethod.GET)
                        .produces(MediaType.APPLICATION_JSON_VALUE)
                        .options(options)
                        .build(),
                controller,
                controller.getClass().getMethod("getAllResources", int.class, int.class,
                        String.class, String.class, String.class, boolean.class)
        );

        handlerMapping.registerMapping(
                RequestMappingInfo.paths("/api/" + resource + "/{id}")
                        .methods(RequestMethod.GET)
                        .produces(MediaType.APPLICATION_JSON_VALUE)
                        .options(options)
                        .build(),
                controller,
                controller.getClass().getMethod("getResource", Long.class)
        );

        handlerMapping.registerMapping(
                RequestMappingInfo.paths("/api/" + resource)
                        .methods(RequestMethod.POST)
                        .consumes(MediaType.APPLICATION_JSON_VALUE)
                        .produces(MediaType.APPLICATION_JSON_VALUE)
                        .options(options)
                        .build(),
                controller,
                controller.getClass().getMethod("createResource", JsonNode.class)
        );

        handlerMapping.registerMapping(
                RequestMappingInfo.paths("/api/" + resource + "/{id}")
                        .methods(RequestMethod.PUT)
                        .consumes(MediaType.APPLICATION_JSON_VALUE)
                        .produces(MediaType.APPLICATION_JSON_VALUE)
                        .options(options)
                        .build(),
                controller,
                controller.getClass().getMethod("updateResource", Long.class, JsonNode.class)
        );

        handlerMapping.registerMapping(
                RequestMappingInfo.paths("/api/" + resource + "/{id}")
                        .methods(RequestMethod.DELETE)
                        .options(options)
                        .build(),
                controller,
                controller.getClass().getMethod("deleteResource", Long.class)
        );

        handlerMapping.registerMapping(
                RequestMappingInfo.paths("/api/" + resource)
                        .methods(RequestMethod.DELETE)
                        .consumes(MediaType.APPLICATION_JSON_VALUE)
                        .options(options)
                        .build(),
                controller,
                controller.getClass().getMethod("deleteResources", List.class)
        );
    }
}
