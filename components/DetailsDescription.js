import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { PriceComp, SubTitle } from './SubInfo'
import { COLORS, FONTS, SIZES } from '../constants'

const DetailsDescription = ({ data }) => {
  const [isShowMore, setShowMore] = useState(true);
  return (
    <>
      <View style={{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

      }} >
        <SubTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.extraLarge}
          subTitleSize={SIZES.font}
        />

        <PriceComp price={data.price} />
      </View>
      <View style={{ marginVertical: SIZES.extraLarge * 1.5 }} >
        <Text style={{
          fontSize: SIZES.font,
          fontFamily: FONTS.semiBold,
          color: COLORS.primary
        }} >
          Description
        </Text>
        <View style={{ marginTop: SIZES.base }}>
          <Text style={{
            fontSize: SIZES.small,
            fontFamily: FONTS.regular,
            color: COLORS.secondary,
            lineHeight: SIZES.large
          }} >
            {isShowMore ? data.description : `${data.description.substr(0, 100)} ...`}
            <Text
              style={{
                fontSize: SIZES.small,
                fontFamily: FONTS.semiBold,
                color: COLORS.primary
              }}
              onPress={() => setShowMore(prev => !prev)}
            >
              {isShowMore ? "Show less" : "Read More"}
            </Text>
          </Text>
        </View>
      </View>
    </>
  )
}

export default DetailsDescription