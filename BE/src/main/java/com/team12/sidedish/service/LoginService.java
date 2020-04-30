package com.team12.sidedish.service;

import com.team12.sidedish.domain.LoginToken;
import com.team12.sidedish.domain.User;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import javax.crypto.SecretKey;

public class LoginService {

    static final String GITHUB_URL = "https://github.com/login/oauth";

    static final String jwtSecretKey = "hahahahahahahahahahahahaahahahahahahaahahahaahahahaahahaahahahahaahahhhhhhhhhhhhhhhhhhhhhh";

    static final SecretKey key = Keys.hmacShaKeyFor(jwtSecretKey.getBytes());

    public LoginToken getAccessToken(String code, String clientId, String clientSecret, String redirectUrl) {

        String requestUrl = String.format("%s/access_token?client_id=%s&client_secret=%s&redirect_uri=%s&code=%s", GITHUB_URL, clientId, clientSecret, redirectUrl ,code);

        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.postForObject(requestUrl, null, LoginToken.class);
    }

    public String getRedirectUrl(String clientId, String redirectUrl) {
        return String.format("%s/authorize?scope=user:email&client_id=%s&redirect_uri=%s", GITHUB_URL, clientId, redirectUrl);
    }

    public User getUserInfo(String tokenType, String token) {
        String requestUrl = "https://api.github.com/user";
        RestTemplate restTemplate = new RestTemplate();

        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.add(HttpHeaders.AUTHORIZATION,  String.format("%s %s", tokenType, token));

        HttpEntity entity = new HttpEntity(httpHeaders);

        ResponseEntity<User> response = restTemplate.exchange(requestUrl, HttpMethod.GET, entity, User.class);
        return response.getBody();
    }

    public String generateJwtToken(String email) {
        return Jwts.builder().setId(email).signWith(key).compact();
    }

    public boolean isVerify(String jws) {
        String Id  = "";
        return Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(jws).getBody().getId().equals(Id);
    }

    public String getIdFromJws(String jws) {
        try {
            return Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(jws).getBody().getId();
        } catch (JwtException e) {
            return null;
        }
    }
}

