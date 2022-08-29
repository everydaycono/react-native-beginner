import React, { useState } from 'react'
import { View, SafeArea, FlatList, Text, SafeAreaView, StatusBar } from 'react-native'
// FlatList is Basic list similar to map.
// used to render component within the safe area boundaries of a device

import { COLORS, NFTData } from "../constants";

// components
import { Card, HomeHeader, FocusedStatusBar } from "../components"
const Home = () => {
  const [data, setData] = useState(NFTData)

  const handleSearch = (value) => {
    if (!value.length) return setData(NFTData);

    const filteredData = data.filter(item => item.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()));

    return setData(filteredData);
  }
  return (
    <SafeAreaView style={{ flex: 1 }} >
      <FocusedStatusBar background={COLORS.primary} />

      <View style={{ flex: 1 }} >
        <View style={{ zIndex: 0 }} >
          <FlatList
            data={data}
            renderItem={({ item }) => <Card data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch} />} // place on top of the list
          />
        </View>

        <View style={{ position: "absolute", top: 0, bottom: 0, right: 0, left: 0, zIndex: -1 }} >
          <View style={{ height: 300, backgroundColor: COLORS.primary }} />
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Home