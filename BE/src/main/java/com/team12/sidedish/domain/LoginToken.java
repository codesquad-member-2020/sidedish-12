package com.team12.sidedish.domain;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.StringJoiner;

public class LoginToken {

    private String accessToken;

    private String tokenType;

    private String scope;

    public String getAccessToken() {
        return accessToken;
    }

    public String getTokenType() {
        return tokenType;
    }

    public String getScope() {
        return scope;
    }

    public void setAccessToken(String accessToken) {
        this.accessToken = accessToken;
    }

    public void setTokenType(String tokenType) {
        this.tokenType = tokenType;
    }

    public void setScope(String scope) {
        this.scope = scope;
    }

    @Override
    public String toString() {
        return new StringJoiner(", ", LoginToken.class.getSimpleName() + "[", "]")
                .add("accessToken='" + accessToken + "'")
                .add("tokenType='" + tokenType + "'")
                .add("scope='" + scope + "'")
                .toString();
    }
}
