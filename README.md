# algo-practicar

### Todos:
  - [ ] Set up directories with questions
    - [x] by_date
      - example: 20191120_question
    - [ ] by_source
      - example: leet_code, katas, some_website
    - [ ] by_difficulty 
      - example: easy, medium, hard
    - [ ] by_type
      - example: dynamic_programming, data_structure, sorting

  - [ ] Set up bot to pull a question a week
  - [x] Connect bot to slack channel #algo-practicar
  - [ ] Set up small node server to test algos
  - [x] Set up testing suite to test algos
    - maybe use jest if node compatible
  - [ ] Set up js linters

### How to test
---
  > This project has been set up with jest for testing nodejs. We may want to consider using a node -> es6 package as we are not able to use ```import packageName from 'dependency'``` and that is no bueno. You can globally test with ```yarn test``` but if you would like to just test a single file use the match flag ```yarn test --match=number-of-ones.test.js``` 
