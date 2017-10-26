## Carousel component for react-native

### Installation
```bash
yarn add @rolandhordos/react-native-carousel
```

###Properties

```
hideIndicators={false} // Set to true to hide the indicators
indicatorColor="#FFFFFF" // Active indicator color
indicatorSize={20} // Indicator bullet size
indicatorSpace={15} // space between each indicator
inactiveIndicatorColor="#999999" // Inactive indicator color
indicatorAtBottom={true} // Set to false to show the indicators at the top
indicatorOffset={250} // Indicator relative position from top or bottom
onPageChange={callback} // Called when the active page changes
inactiveIndicatorText= '•' // Inactive indicator content ( You can customize to use any Unicode character )
indicatorText= '•' // Active indicator content ( You can customize to use any Unicode character )

animate={true} // Enable carousel autoplay
delay={1000} // Set Animation delay between slides
loop={true} // Allow infinite looped animation. Depends on Prop {...animate} set to true.

```

### Usage example

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
