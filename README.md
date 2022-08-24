### REACT-Native

`Dev Journey`

- Navigator package

1.@react-navigation aka (React-router-dom in web)
[React Navigation](https://reactnavigation.org/)

- Stack.Navigator 
  - initialRouteName => "Home" 

```js (app.js)
    // BrowserRouter or AppProvider or GlobalStyled(styled-component)
    <NavigationContainer theme={theme} > 
      {/* Seems Likes React Router Dom */}
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home" >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
```