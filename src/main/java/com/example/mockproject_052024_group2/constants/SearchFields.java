package com.example.mockproject_052024_group2.constants;

import java.util.List;

public interface SearchFields {
    List<String> PRODUCT = List.of(
            "name",
            "category"
    );

    List<String> POST = List.of(
            "user.fullname",
            "content",
            "pages.name"
    );


}
