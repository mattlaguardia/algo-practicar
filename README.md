# algo-practicar

This project uses yarn as a package manager. So no `npm install`, instead use `yarn install`

## Todos:

  **Set up**
  ---
    - [x] Set up directories with questions
      - [x] by_date
        - example: 20191120_question
      - [x] by_source
        - example: leet_code, katas, some_website
      - [x] by_difficulty
        - example: easy, medium, hard
      - [x] by_type
        - example: dynamic_programming, data_structure, sorting
    - [x] Connect bot to slack channel #algo-practicar
    - [ ] Set up small node server to test algos
    - [x] Set up testing suite to test algos
      - maybe use jest if node compatible
    - [ ] Set up js linters
    - [x] Set up github action
    - [ ] Set up a cron job in github actions to run job(s) that
        - [ ] remind slack channel to contribute if their hasn't been contributions in past 2 weeks
        - [ ] run job(s) that pull questions from somewhere

  **Application**
  ---
    - [ ] Set up bot to pull a question a week
        - Look into using github actions -> jobs sequence
    - [ ] Set up a simple dev server for servering up static front end
    - [ ] Set up so that testing suite show errors on front end markup

### How to test
  ---
  > This project has been set up with jest for testing nodejs. We may want to consider using a node -> es6 package as we are not able to use
  ```javascript
    import packageName from 'dependency'
  ```
  > and that is no bueno. Maybe we just use node 12 since node 12.2 uses dynamic imports...
  > You can globally test with
  ```bash
    yarn test
  ```
  > but if you would like to just test a single file use
  ```bash
    yarn test number-of-ones.test.js
  ```
  > if you would like to watch that file you could to continuously run
  ```bash
    yarn test number-of-ones.test.js --watch
  ```
