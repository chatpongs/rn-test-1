import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, Appbar } from 'react-native-paper';

class Home extends React.Component {
  static navigationOptions = {
    header: (
        <Appbar.Header>
          <Appbar.Content title="Home" subtitle="This is the home page"
          />
          <Appbar.Action icon="search" onPress={() => console.log('search')} />
          <Appbar.Action icon="more-vert" onPress={() => console.log('more')} />
        </Appbar.Header>
    )
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Home Page</Text>
        <Button mode={'contained'} onPress={() => this.props.navigation.push('Detail')}>Go to detail</Button>
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

export default Home;