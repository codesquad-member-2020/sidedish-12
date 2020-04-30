package com.team12.sidedish.exception;

public class DishNotfoundException extends RuntimeException {

    public DishNotfoundException() {
        super("해당 반찬의 상세 데이터가 없습니다.");
    }
}
