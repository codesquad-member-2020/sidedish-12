package com.team12.sidedish.domain;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.StringJoiner;


public class User {

    @JsonProperty("login")
    private String userId;

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    @Override
    public String toString() {
        return new StringJoiner(", ", User.class.getSimpleName() + "[", "]")
                .add("userId='" + userId + "'")
                .toString();
    }
}
