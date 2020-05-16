import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {Badge} from 'react-native-elements';
export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
    };
  }

  componentWillMount() {
    fetch('http://www.mocky.io/v2/5ec01558320000e6b90c35e9')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          dataSource: responseJson,
        });
      });
  }
  _renderItem = ({item, index}) => {
    return (
      <View>
        <TouchableOpacity style={styles.MainContainer}>
          <View style={styles.oneMes}>
            <Image
              style={{
                height: 80,
                width: 80,
                borderRadius: 100,
                // padding: 10,
              }}
              source={{uri: item.profile_pic}}
            />
            <View style={styles.first}>
              <Text
                style={{
                  paddingBottom: '4%',
                  fontSize: 20,
                  fontWeight: 'bold',
                }}>
                {item.name}
              </Text>
              <Text style={{fontSize: 17}}>{item.message} </Text>
            </View>

            <View style={styles.second}>
              <Text style={{color: '#dd8757', fontSize: 16}}>{item.time} </Text>
              <Badge
                value={item.badgeVal}
                containerStyle={{position: 'absolute', top: 32, right: 10}}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    let {dataSource} = this.state;
    return (
      <ScrollView>
        <View>
          <Text style={styles.textMes}>Messages</Text>
          <FlatList
            data={dataSource}
            renderItem={this._renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
    backgroundColor: '#fff',
    paddingBottom: '6%',
  },
  first: {
    // paddingBottom:'2%',
    flex: 1,
    flexDirection: 'column',
    marginLeft: '2%',
  },
  second: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  textMes: {
    paddingTop: '10%',
    paddingBottom: '4%',
    fontSize: 40,
    color: '#dd8757',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  oneMes: {
    marginStart: 1,
    flex: 1,
    flexDirection: 'row',

    paddingLeft: '3%',
  },
});
export default App;
