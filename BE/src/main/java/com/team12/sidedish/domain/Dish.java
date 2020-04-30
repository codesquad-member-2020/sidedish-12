package com.team12.sidedish.domain;

import java.util.HashSet;
import java.util.Set;
import java.util.StringJoiner;

public class Dish {

    private Long id;

    private String image;

    private String alt;

    private String deliveryType;

    private String title;

    private String description;

    private String sPrice;

    private String nPrice;

    private String badge;

    private String topImage;

    private String thumbImages;

    private String point;

    private String deliveryInfo;

    private String deliveryFee;

    private String detailSection;

    private Set<Long> categories = new HashSet<>();

    public Dish() {
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public void setAlt(String alt) {
        this.alt = alt;
    }

    public void setDeliveryType(String deliveryType) {
        this.deliveryType = deliveryType;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setsPrice(String sPrice) {
        this.sPrice = sPrice;
    }

    public void setnPrice(String nPrice) {
        this.nPrice = nPrice;
    }

    public void setBadge(String badge) {
        this.badge = badge;
    }

    public void setTopImage(String topImage) {
        this.topImage = topImage;
    }

    public void setThumbImages(String thumbImages) {
        this.thumbImages = thumbImages;
    }

    public void setPoint(String point) {
        this.point = point;
    }

    public void setDeliveryInfo(String deliveryInfo) {
        this.deliveryInfo = deliveryInfo;
    }

    public void setDeliveryFee(String deliveryFee) {
        this.deliveryFee = deliveryFee;
    }

    public void setDetailSection(String detailSection) {
        this.detailSection = detailSection;
    }

    public void setCategories(Set<Long> categories) {
        this.categories = categories;
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

    public String getDeliveryType() {
        return deliveryType;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public String getsPrice() {
        return sPrice;
    }

    public String getnPrice() {
        return nPrice;
    }

    public String getBadge() {
        return badge;
    }

    public String getTopImage() {
        return topImage;
    }

    public String getThumbImages() {
        return thumbImages;
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

    public String getDetailSection() {
        return detailSection;
    }

    @Override
    public String toString() {
        return new StringJoiner(", ", Dish.class.getSimpleName() + "[", "]")
                .add("id=" + id)
                .add("image='" + image + "'")
                .add("alt='" + alt + "'")
                .add("deliveryType='" + deliveryType + "'")
                .add("title='" + title + "'")
                .add("description='" + description + "'")
                .add("sPrice='" + sPrice + "'")
                .add("sPrice='" + sPrice + "'")
                .add("badge='" + badge + "'")
                .add("topImage='" + topImage + "'")
                .add("thumbImages='" + thumbImages + "'")
                .add("point='" + point + "'")
                .add("deliveryInfo='" + deliveryInfo + "'")
                .add("deliveryFee='" + deliveryFee + "'")
                .add("detailSection='" + detailSection + "'")
                .add("categories=" + categories)
                .toString();
    }
}
