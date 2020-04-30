package com.team12.sidedish.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.StringJoiner;

public class Badge {

    @JsonProperty("badge_name")
    private String badgeName;

    @JsonProperty("badge_color")
    private String badgeColor;

    public Badge(String badgeName, String badgeColor) {
        this.badgeName = badgeName;
        this.badgeColor = badgeColor;
    }

    public String getBadgeName() {
        return badgeName;
    }

    public String getBadgeColor() {
        return badgeColor;
    }

    @Override
    public String toString() {
        return new StringJoiner(", ", Badge.class.getSimpleName() + "[", "]")
                .add("badgeName='" + badgeName + "'")
                .add("badgeColor='" + badgeColor + "'")
                .toString();
    }
}
