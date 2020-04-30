package com.team12.sidedish.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.team12.sidedish.domain.Dish;
import com.team12.sidedish.util.BadgeParser;
import com.team12.sidedish.util.StringParser;

import java.util.List;
import java.util.StringJoiner;

public class DishDto {

    private Long id;

    private String image;

    private String alt;

    @JsonProperty("delivery_type")
    private List<String> deliveryType;

    private String title;

    private String description;

    @JsonProperty("n_price")
    private String nPrice;

    @JsonProperty("s_price")
    private String sPrice;

    private List<Badge> badge;

    public DishDto(Dish dish) {
        this.id = dish.getId();
        this.image = dish.getImage();
        this.alt = dish.getAlt();
        this.deliveryType = StringParser.parseToArray(dish.getDeliveryType());
        this.title = dish.getTitle();
        this.description = dish.getDescription();
        this.nPrice = dish.getnPrice();
        this.sPrice = dish.getsPrice();
        this.badge = BadgeParser.parse( StringParser.parseToArray(dish.getBadge()));
    }

    public Long getId() {
        return id;
    }

    public String getImage() {
        return image;
    }

    public String getAlt() {
        return alt;
    }

    public List<String> getDeliveryType() {
        return deliveryType;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public String getnPrice() {
        return nPrice;
    }

    public String getsPrice() {
        return sPrice;
    }

    public List<Badge> getBadge() {
        return badge;
    }

    @Override
    public String toString() {
        return new StringJoiner(", ", DishDto.class.getSimpleName() + "[", "]")
                .add("id=" + id)
                .add("image='" + image + "'")
                .add("alt='" + alt + "'")
                .add("deliveryType=" + deliveryType)
                .add("title='" + title + "'")
                .add("description='" + description + "'")
                .add("nPrice='" + nPrice + "'")
                .add("sPrice='" + sPrice + "'")
                .add("badge=" + badge)
                .toString();
    }
}
