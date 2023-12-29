import { View, Text, Button } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View>
      <Button
        title="Click Me"
        onPress={() => alert('Button Clicked')}
      />
    </View>
  )
}

export default App