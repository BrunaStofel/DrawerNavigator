import React from 'react';
import {StyleSheet, Image, Button, Text, View} from 'react-native';
import {DrawerNavigator, createDrawerNavigator, createAppContainer } from 'react-navigation';
// import interopRequireDefault from 'jest-util/build/interopRequireDefault';
// import Icon from 'react-native-vector-icons/FontAwesome'

class MyHomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Image
      source={require('./images/home.png')}
      style={[styles.icon]}
    />
    ),
  }; 
  render() {
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text> Home Page! </Text>
        <Button 
          onPress={() => this.props.navigation.openDrawer()}
          title="DrawerOpen"
        />
      </View>
    );  
  }
}

class MyNotificationScreen extends React.Component{
  static navigationOptions = {
    drawerLabel: 'Notifications',
    drawerIcon: ({tintColor}) => (
      <Image 
        source={require('./images/notification.svg')}
        style={[styles.icon]}
      />
    ),
  };
  render(){
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
        />
        <Button 
          onPress={() => this.props.navigation.openDrawer()}
          title="DrawerOpen" 
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

// export default DrawerNavigator({
  MyNavigator = createDrawerNavigator({
  Home: {
    screen: MyHomeScreen,
  },
  Notifications: {
    screen: MyNotificationScreen,
  },
},
  {
    drawerPosition: 'right',
    initialRouteName: 'Home',
    drawerBackgroundColor: 'orange',
    drawerWidth: 200,
  });

  const AppConteiner = createAppContainer(MyNavigator)
  export default () => <AppConteiner/>
