import React from 'react'
import { View, Text } from 'react-native'
import Carousel from '../Carousel'
import renderer from 'react-test-renderer'

describe('Simple Carousel', () => {

  const carousel = renderer.create(
    <Carousel width={250}>
      <View><Text>Slide 1</Text></View>
      <View><Text>Slide 2</Text></View>
      <View><Text>Slide 3</Text></View>
    </Carousel>
  )

  it('renders a simple configuration', () => {
    expect(carousel).toBeDefined()

    const structure = carousel.toJSON()
    expect(structure).toBeDefined()
  })
})
