# Carousel component for react-native

## Installation
```bash
yarn add @rolandhordos/react-native-carousel
```

## Usage

### Properties

| Prop | Description | Default |
|---|---|---|
|**`hideIndicators`**|Set to true to hide the indicators |*false*|
|**`indicatorColor `**| Active indicator color |*#FFFFFF*|
|**`indicatorSize `**| Indicator bullet size |*20*|
|**`indicatorSpace `**| Spacing between each indicator |*15*|
|**`inactiveIndicatorColor `**| Inactive indicator color |*#999999*|
|**`indicatorAtBottom `**| Set to false to show the indicators at the top |*true*|
|**`indicatorOffset `**| Indicator relative position from top or bottom |*250*|
|**`onPageChange `**| Called when the active page changes |*callback / method*|
|**`inactiveIndicatorText`**| Inactive indicator content ( You can customize to use any Unicode character ) |*•*|
|**`indicatorText`**| Active indicator content ( You can customize to use any Unicode character ) |*•*|
|**`animate`**| Enable carousel autoplay |*true*|
|**`delay`**| Set Animation delay between slides |*1000*|
|**`loop`**| Allow infinite looped animation. Depends on Prop **`animate`** set to *true*. |*true*|

### Example

```javascript
import React, { Component } from 'react'
import { View, Text, StyleSheet, AppRegistry } from 'react-native'
import Carousel from '@rolandhordos/react-native-carousel'

export default class App extends Component {
  render() {
    return (
      <Carousel animate={false}>
        <View style={styles.slide}>
          <Text>Page 1</Text>
        </View>
        <View style={styles.slide}>
          <Text>Page 2</Text>
        </View>
        <View style={styles.slide}>
          <Text>Page 3</Text>
        </View>
      </Carousel>
    )
  }
}

const styles = StyleSheet.create({
  slide: {
    width: 375,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  }
})
```

## Project Norms

- Test Supported with Jest
- ES6+
- No Mixins
- Good Mobile Citizen
  - high frequency timers enabled only when required

## Roadmap

### 0.11.5
- Jest Snapshot testing
- Initial pager testing

### 0.11.6
- Beginnings of animation testing
- ScrollViewMock enhancements
