package com.team12.sidedish.repository;

import com.team12.sidedish.domain.Dish;
import com.team12.sidedish.util.DishMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.util.List;
import java.util.Optional;

@Repository
public class DishRepository {

    private Logger logger = LoggerFactory.getLogger(DishRepository.class);

    private JdbcTemplate jdbcTemplate;

    @Autowired
    CategoryRepository categoryRepository;

    @Autowired
    public DishRepository(DataSource dataSource) {
        jdbcTemplate = new JdbcTemplate(dataSource);
    }

    public List<Dish> findByCategoryId(Long categoryId) {
        String sql = "select  dish.id ,dish.image, dish.alt, dish.delivery_type, dish.title, dish.description, dish.badge, dish.top_image,dish.thumb_images, dish.point, dish.delivery_info, dish.delivery_fee, dish.s_price, dish.n_price, dish.detail_section " +
                "from category INNER JOIN dish_category INNER JOIN dish where category.id= " + categoryId + " AND dish_category.category = category.id AND dish.id = dish";
        try {
            return jdbcTemplate.query(sql, new DishMapper());
        } catch (IndexOutOfBoundsException e) {
            return null;
        }
    }

    public Optional<Dish> findById(String dishId) {
        String sql = "SELECT * FROM dish where id = ?";
        try {
            return Optional.of(jdbcTemplate.queryForObject(sql, new Object[]{dishId}, new DishMapper()));
        } catch (EmptyResultDataAccessException e) {
            return Optional.empty();
        }
    }
}
