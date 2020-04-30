package com.team12.sidedish.controller;

import com.team12.sidedish.domain.Category;
import com.team12.sidedish.domain.Dish;
import com.team12.sidedish.dto.CategoryDto;
import com.team12.sidedish.dto.DetailDishDto;
import com.team12.sidedish.dto.DishDto;
import com.team12.sidedish.dto.ResponseDto;
import com.team12.sidedish.exception.CategoryNotfoundException;
import com.team12.sidedish.exception.DishNotfoundException;
import com.team12.sidedish.repository.CategoryRepository;
import com.team12.sidedish.repository.DishRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ProductController {

    @Autowired
    DishRepository dishRepository;

    @Autowired
    CategoryRepository categoryRepository;

    @GetMapping("/banchans")
    public ResponseDto getBanchansByCategory(@RequestParam(name = "category") String categoryName) {
        Category category = categoryRepository.findByCategoryName(categoryName).orElseThrow(CategoryNotfoundException::new);
        List<Dish> dishes = dishRepository.findByCategoryId(category.getId());

//      하위 카테고리가 없는 경우
        if (!dishes.isEmpty()) {
            CategoryDto categoryDto = new CategoryDto(category);
            List<DishDto> dishDtos = dishes.stream().map(DishDto::new).collect(Collectors.toList());
            categoryDto.setItems(dishDtos);
            return ResponseDto.OK(categoryDto);
        }

//      하위 카테고리가 있는 경우
        List<Category> categories = categoryRepository.findSubCategoryByParentId(category.getId());
        List<CategoryDto> categoryDtos = categories.stream().map(c -> {
            CategoryDto subCategoryDtos = new CategoryDto(c);
            List<Dish> subDishes = dishRepository.findByCategoryId(c.getId());
            List<DishDto> subDishDtos = subDishes.stream().map(DishDto::new).collect(Collectors.toList());
            subCategoryDtos.setItems(subDishDtos);
            return subCategoryDtos;
        }).collect(Collectors.toList());

        return ResponseDto.OK(categoryDtos);
    }

    @GetMapping("/banchans/{banchanId}")
    public ResponseDto<DetailDishDto> getBanchan(@PathVariable String banchanId) {
        Dish dish = dishRepository.findById(banchanId).orElseThrow(DishNotfoundException::new);
        DetailDishDto detailDishDto = new DetailDishDto(dish);

        return ResponseDto.OK(detailDishDto);
    }
}
