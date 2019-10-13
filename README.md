# Marvel-RN
Small App for challenge that uses Marvel API to show its heros.

## Scenarios
  
1. List heroes API limited to 4 items each page
2. Filter heroes by name
3. Show pagination as per number of heroes available
4. Show hero detail in new page

## Behaviour Tests

### Main page
* API Mock returns 0 itens:
  - Main page should render "no itens" child
  
* API Mock returns 1 or more itens:
  - Main page should have at least 1 item child  

### Detail page
* Should render hero detail
* If connection fail should render "error" child

## Snapshot Tests
* Should render Main page as intended or show connection error
* Should render Detail page as intended or show connection error

