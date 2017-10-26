import React from 'react'
import { View, Text } from 'react-native'
import Carousel from '../src/Carousel'
import renderer from 'react-test-renderer'

describe('Simple Carousel', () => {

  const carousel = renderer.create(
    <Carousel width={250} animate={false}>
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
