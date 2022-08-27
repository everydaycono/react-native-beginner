import { View, Text, Image } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../constants'
import { PriceComp } from './SubInfo'

const DetailsBid = ({ bid }) => {
  return (
    <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginVertical: SIZES.base, paddingHorizontal: SIZES.base }} >

      <View style={{
        flexDirection: "row",
        alignItems: "center",
      }}>
        <Image
          source={bid.image}
          resizeMode="contain"
          style={{ width: 48, height: 48 }}
        />
        <View style={{ marginLeft: 15 }} >
          <Text style={{
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.small,
            color: COLORS.primary
          }} >
            Bid Placed by {bid.name}
          </Text>
          <Text style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small - 2,
            color: COLORS.secondary,
            marginTop: 3
          }} >
            {bid.date}
          </Text>
        </View>
      </View>
      <PriceComp price={bid.price} />
    </View>
  )
}

export default DetailsBid