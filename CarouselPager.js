import React, { Component } from 'react'
import { ScrollView } from 'react-native'

export default class CarouselPager extends Component {

  scrollToPage(page, animated) {
    if (typeof animated === 'undefined') {
      animated = true;
    }
    this.refs.scrollView.scrollTo({x: page * this.props.width, y: 0, animated: animated});
  }

  _onMomentumScrollEnd(e) {
    var activePage = e.nativeEvent.contentOffset.x / this.props.width;
    this.props.onEnd(activePage);
  }

  render() {
    return <ScrollView ref="scrollView"
      contentContainerStyle={this.props.contentContainerStyle}
      automaticallyAdjustContentInsets={false}
      horizontal={true}
      pagingEnabled={true}
      showsHorizontalScrollIndicator={false}
      bounces={false}
      onScrollBeginDrag={this.props.onBegin}
      onMomentumScrollEnd={this._onMomentumScrollEnd}
      scrollsToTop={false}
    >
      {this.props.children}
    </ScrollView>;
  }
}
