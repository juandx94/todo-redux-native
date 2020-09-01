import React from 'react';
import {Text, FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import {toggleTodo, removeTodo} from '../store/actions';
class ListTodo extends React.Component {
  render() {
    return (
      <FlatList
        style={styles.container}
        data={this.props.todos}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.item}
            key={item.id}
            onPress={() => this.props.toggletodo(item.id)}>
            <View
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                backgroundColor: item.complete ? '#43A047' : '#E53935',
                height: 8,
                width: 8,
                borderRadius: 4,
                marginRight: 16,
              }}
            />
            <Text style={styles.description}>{item.description}</Text>
            <TouchableOpacity
              style={styles.remove}
              onPress={() => this.props.removetodo(item.id)}>
              <Text style={styles.txt_btn}>X</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => String(item.id)}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  item: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 16,
    shadowColor: '#000000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.5,
    margin: 6,
    alignItems: 'center',
    flexDirection: 'row',
  },
  description: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Arial',
    textTransform: 'capitalize',
    flex: 1,
  },
  remove: {
    backgroundColor: '#E53935',
    padding: 8,
  },
  txt_btn: {
    fontFamily: 'Arial',
    fontSize: 16,
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
const mapStateToProps = (state) => {
  return {
    todos: state.todoReducer.todos,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    toggletodo: (id) => dispatch(toggleTodo(id)),
    removetodo: (id) => dispatch(removeTodo(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListTodo);
