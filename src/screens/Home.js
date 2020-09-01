import React from 'react';
import {View, StyleSheet} from 'react-native';
import AddComponent from '../components/addTodo';
import ListTodo from '../components/ListTodo';
class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AddComponent />
        <ListTodo />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
