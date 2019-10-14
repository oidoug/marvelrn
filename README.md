# Marvel-RN
Small App for challenge that uses Marvel API to show its heros.

## Scenarios
  
1. List characters API limited to 5 items each page
   * I decided to fetch 5 instead of the requested 4 itens to improve visually the UI.
2. Filter characters by name
3. Show pagination as per number of characters available
4. Show hero detail in new page

## Behaviours to test

### Main page (if time allows, I will add Unit tests to assert these):
* Main page should render "no itens" child
* Main page should have rendered at least 1 item child if api returns something
* Shanging pages should change the set of itens listed

### Detail page
* Should render character details and image

## Snapshot Tests
* Should render Main page as intended or show connection error
* Should render Detail page as intended or show connection error

## What could be improved
- [ ] Add more visual resources, like icons
- [ ] Add Unit tests, generic snapshots only help when code is production ready and needs to keep visual consistency
- [ ] Fetch more info about characters and redirects
