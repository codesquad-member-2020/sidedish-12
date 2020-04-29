# sidedish-12

SIDEDISH 서비스 - 12팀

## 팀원

[**엘리**][ellie], [**하이디**][heidi], [**호이**][hoi]

## Ground Rule

### 스크럼 시작 시간
오후 1시 30분

### 스크럼 기록 방법
스프레드 시트를 이용해서 기록 [스프레드시트 링크][scrum]

#### Commit Rule

```
[#??]:feat: Commit Content
[#??]:fix: Commit Content
[#??]:docs: Commit Content
[#??]:style: Commit Content
[#??]:refactor: Commit Content
[#??]:test: Commit Content
[#??]:chore: Commit Content
```

1.위의 키워드에 맞춰서 커밋 내용을 정합니다.
2.[#??] 부분에는 해당 Branch의 Issue 번호가 들어갑니다.

#### Branch Rule

```
[master]->[dev]->[fe-dev]->[feature/fe]
                L>[be-dev]->[feature/be]
                L>[ios-dev]->[feature/ios]
```

* 최종 배포 : master
* 배포 전 : dev
* 각 클래스별 dev branch : {className}-dev
* 작업 브랜치 : feature/{className}

[ellie]: https://github.com/bohyeon-n
[heidi]: https://github.com/seizze
[hoi]: https://github.com/choichoigang
[scrum]: https://docs.google.com/spreadsheets/d/1_llLxSRdXKZIUSKaUvlb9DtKNvd2nqhZkr6kbiCyz9E/edit?usp=sharing