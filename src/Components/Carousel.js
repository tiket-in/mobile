import React from 'react'
import { StyleSheet } from 'react-native'
import { View } from 'native-base'
import { SliderBox } from 'react-native-image-slider-box'


export default ({ images = [], height = 250 }) => {
    const styles = StyleSheet.create({
        carouselWrapper: {
            backgroundColor: 'white',
            height
        }
    })

    return (
        <>
            <View style={styles.carouselWrapper}>
                <SliderBox
                    circleLoop
                    sliderBoxHeight={height}
                    images={images}
                />
            </View>
        </>
    )
}
