import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {connect} from 'react-redux';
import {addTodo} from '../store/actions';
class AddComponent extends React.Component {
  state = {
    value: '',
  };

  _onClick() {
    const value = this.state.value;
    if (value.length > 0) {
      this.props.addtodo(value);
    }
    this.setState({value: ''});
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder={'add new todo'}
          value={this.state.value}
          onChangeText={(text) => this.setState({value: text})}
        />
        <TouchableOpacity style={styles.btn} onPress={this._onClick.bind(this)}>
          <Text style={styles.txt_btn}>ADD</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 4,
    backgroundColor: '#F5F5F5',
  },
  input: {
    backgroundColor: 'white',
    padding: 16,
    flex: 1,
    borderBottomWidth: 2,
    fontFamily: 'Arial',
    fontSize: 16,
    color: '#212121',
  },
  btn: {
    padding: 16,
    backgroundColor: '#1E88E5',
  },
  txt_btn: {
    fontFamily: 'Arial',
    fontSize: 16,
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

const mapDispatchToProps = (dispatch) => {
  return {
    addtodo: (text) => dispatch(addTodo(text)),
  };
};

export default connect(null, mapDispatchToProps)(AddComponent);
