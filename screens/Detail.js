import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Appbar } from 'react-native-paper';

class Detail extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    return {
      header: (
        <Appbar.Header>
          <Appbar.BackAction
            onPress={() => navigation.replace('Home')}
          />
          <Appbar.Content title="Detail" subtitle="More information"
          />
          <Appbar.Action icon="search" onPress={() => console.log('search')} />
          <Appbar.Action icon="more-vert" onPress={() => console.log('more')} />
        </Appbar.Header>
      )
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Detail Page</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default Detail;