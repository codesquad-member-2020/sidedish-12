package com.team12.sidedish.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.team12.sidedish.domain.Dish;
import com.team12.sidedish.util.StringParser;

import java.util.List;
import java.util.StringJoiner;

public class DetailDishDto {

  private String title;

  @JsonProperty("top_image")
  private String topImage;

  @JsonProperty("thumb_images")
  private List<String> thumbImages;

  private String description;

  private String point;

  @JsonProperty("delivery_info")
  private String deliveryInfo;

  @JsonProperty("delivery_fee")
  private String deliveryFee;

  @JsonProperty("n_price")
  private String nPrice;

  @JsonProperty("s_price")
  private String sPrice;

  @JsonProperty("detail_section")
  private List<String> detailSection;

  public DetailDishDto(Dish dish) {
    this.topImage = dish.getTopImage();
    this.thumbImages = StringParser.parseToArray(dish.getThumbImages());
    this.description = dish.getDescription();
    this.point = dish.getPoint();
    this.deliveryFee = dish.getDeliveryFee();
    this.deliveryInfo = dish.getDeliveryInfo();
    this.nPrice = dish.getnPrice();
    this.sPrice = dish.getsPrice();
    this.detailSection  = StringParser.parseToArray(dish.getDetailSection());
    this.title = dish.getTitle();
  }

  public String getTitle() {
    return title;
  }

  public String getTopImage() {
    return topImage;
  }

  public List<String> getThumbImages() {
    return thumbImages;
  }

  public String getDescription() {
    return description;
  }

  public String getPoint() {
    return point;
  }

  public String getDeliveryInfo() {
    return deliveryInfo;
  }

  public String getDeliveryFee() {
    return deliveryFee;
  }

  public String getnPrice() {
    return nPrice;
  }

  public String getsPrice() {
    return sPrice;
  }

  public List<String> getDetailSection() {
    return detailSection;
  }

  @Override
  public String toString() {
    return new StringJoiner(", ", DetailDishDto.class.getSimpleName() + "[", "]")
            .add("title='" + title + "'")
            .add("topImage='" + topImage + "'")
            .add("thumbImages=" + thumbImages)
            .add("description='" + description + "'")
            .add("point='" + point + "'")
            .add("deliveryInfo='" + deliveryInfo + "'")
            .add("deliveryFee='" + deliveryFee + "'")
            .add("nPrice='" + nPrice + "'")
            .add("sPrice='" + sPrice + "'")
            .add("detailSection=" + detailSection)
            .toString();
  }
}
