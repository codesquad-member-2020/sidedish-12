package com.team12.sidedish.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.team12.sidedish.domain.Category;

import java.util.ArrayList;
import java.util.List;
import java.util.StringJoiner;

public class CategoryDto {

    @JsonProperty("category_id")
    private Long categoryId;

    private String name;

    private List<DishDto> banchans = new ArrayList<>();

    public CategoryDto(Category category, List<DishDto> banchans) {
        this.categoryId = category.getId();
        this.name = category.getName();
        this.banchans = banchans;
    }

    public CategoryDto() {}

    public Long getCategoryId() {
        return categoryId;
    }

    public String getName() {
        return name;
    }

    public List<DishDto> getBanchans() {
        return banchans;
    }

    @Override
    public String toString() {
        return new StringJoiner(", ", CategoryDto.class.getSimpleName() + "[", "]")
                .add("categoryId=" + categoryId)
                .add("name='" + name + "'")
                .add("banchans=" + banchans)
                .toString();
    }
}
