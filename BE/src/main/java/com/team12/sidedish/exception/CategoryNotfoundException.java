package com.team12.sidedish.exception;

public class CategoryNotfoundException extends RuntimeException {

    public CategoryNotfoundException() {
        super("해당 카테고리가 없습니다.");
    }
}
