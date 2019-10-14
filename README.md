# Marvel-RN
Small App for challenge that uses Marvel API to show its heros.

## Running
```bash
yarn
cd ios; pod install
react-native run-ios
react-native run-android
```

## Screenshots

### iOS
![Simulator Screen Shot - iPhone X - 2019-10-14 at 04 22 26](https://user-images.githubusercontent.com/129619/66735003-89916880-ee3b-11e9-8914-0ea5c7358378.png)

![Simulator Screen Shot - iPhone X - 2019-10-14 at 04 22 42](https://user-images.githubusercontent.com/129619/66734998-88f8d200-ee3b-11e9-8fad-a17dd01ebf2c.png)

![Simulator Screen Shot - iPhone X - 2019-10-14 at 04 22 22](https://user-images.githubusercontent.com/129619/66735004-89916880-ee3b-11e9-8f41-f136267de150.png)

![Simulator Screen Shot - iPhone X - 2019-10-14 at 04 22 15](https://user-images.githubusercontent.com/129619/66735006-89916880-ee3b-11e9-8969-a8c954153bd9.png)

### Android
![Screenshot_1571038220](https://user-images.githubusercontent.com/129619/66735013-8d24ef80-ee3b-11e9-8df4-bf17423a7d49.png)

![Screenshot_1571038226](https://user-images.githubusercontent.com/129619/66735011-8d24ef80-ee3b-11e9-95a7-1a3b7278ba71.png)

![Screenshot_1571038197](https://user-images.githubusercontent.com/129619/66735014-8dbd8600-ee3b-11e9-8b74-dd4cc435300b.png)

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
