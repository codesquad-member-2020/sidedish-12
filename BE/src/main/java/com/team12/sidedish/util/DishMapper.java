package com.team12.sidedish.util;

import com.team12.sidedish.domain.Dish;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class DishMapper implements RowMapper<Dish> {
    public Dish mapRow(ResultSet rs , int rowNum) throws SQLException {
        Dish dish = new Dish();
        dish.setId(rs.getLong("id"));
        dish.setImage(rs.getString("image"));
        dish.setAlt(rs.getString("alt"));
        dish.setDeliveryType(rs.getString("delivery_type"));
        dish.setTitle(rs.getString("title"));
        dish.setDescription(rs.getString("description"));
        dish.setBadge(rs.getString("badge"));
        dish.setTopImage(rs.getString("top_image"));
        dish.setThumbImages(rs.getString("thumb_images"));
        dish.setPoint(rs.getString("point"));
        dish.setDeliveryInfo(rs.getString("delivery_info"));
        dish.setDeliveryFee(rs.getString("delivery_fee"));
        dish.setnPrice(rs.getString("n_price"));
        dish.setsPrice(rs.getString("s_price"));
        dish.setDetailSection(rs.getString("detail_section"));
        return dish;
    }
}
