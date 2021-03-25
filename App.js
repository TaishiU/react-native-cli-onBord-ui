import React, { useState } from 'react'
import { Text, View, SafeAreaView, StatusBar, Image, StyleSheet } from 'react-native';
import Onbord from './components/Onbord';
import Home from './components/Home';

const App = () => {

  const [showOnBord, setShowOnBord] = useState(true);

  const handleOnBordFinish = () => {
    setShowOnBord(false);
  }

  return (
    <>
      {/* showOnBordが「true」であれば、Onbordコンポーネントを表示 */}
      {showOnBord && <Onbord handleDone={handleOnBordFinish} />}
      {/* showOnBordが「false」であれば、Homeコンポーネントを表示 */}
      {!showOnBord && <Home />}
    </>
  )
}

export default App;
