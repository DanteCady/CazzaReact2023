import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors } from '../styles';


// Colors
const { navItems } = Colors;

const Navbar = () => {
  const [showquickActionOptions, setShowquickActionOptions] = useState(false);

  const togglequickActionOptions = () => {
    setShowquickActionOptions(!showquickActionOptions);
  };

  return (
    <View style={styles.navbarContainer}>
      <TouchableOpacity style={styles.button}>
        <MaterialIcons name="menu" size={30} color={navItems} />
      </TouchableOpacity>
        <Text style={styles.text}>Menu</Text>
      <TouchableOpacity style={styles.button}>
        <MaterialIcons name="dashboard" size={30} color={navItems} />
      </TouchableOpacity>
        <Text style={styles.dashboardText}>Dashboard</Text>
      <TouchableOpacity style={styles.quickActionButton} onPress={togglequickActionOptions}>
        <MaterialIcons name="add" size={30} color={navItems} />
      </TouchableOpacity>
          <Text style={styles.text}>Quick Actions</Text>
      <TouchableOpacity style={styles.button}>
        <MaterialIcons name="notifications" size={30} color={navItems} />
      </TouchableOpacity>
        <Text style={styles.text}>Alerts</Text>
      <TouchableOpacity style={styles.button}>
        <MaterialIcons name="person" size={30} color={navItems} />
      </TouchableOpacity>
        <Text style={styles.text}>Profile</Text>

      {showquickActionOptions && (
        <View style={styles.quickActionOptionsContainer}>
          <TouchableOpacity style={styles.quickActionOptionButton}>
                    <MaterialIcons name="home" size={30} color={navItems} />
                    {/* <Text style={styles.quickActionOptionText}>Option 1</Text> */}
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickActionOptionButton}>
                    <MaterialIcons name="people" size={30} color={navItems} />
            {/* <Text style={styles.quickActionOptionText}>Option 2</Text> */}
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickActionOptionButton}>
                    <MaterialIcons name="folder" size={30} color={navItems} />
            {/* <Text style={styles.quickActionOptionText}>Option 3</Text> */}
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  navbarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    height: 100,
    backgroundColor: '#F9F9F9',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  button: {
    padding: 8,
    bottom: 25,
  },
  quickActionButton: {
    padding: 8,
    bottom: 25,
    left: 15,
  },
quickActionOptionsContainer: {
  position: 'absolute',
  bottom: 100,
  right: '23%',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#fff',
  borderRadius: 50,
  paddingVertical: 8,
  paddingHorizontal: 16,
  elevation: 3,
},

  quickActionOptionButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 15,
    color: '{$pr}',
  },
  quickActionOptionText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'black',
  },
  profileButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    bottom: 15,
  },
  text:{
    fontSize: 9,
    top: 15,
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    right: 35
  },
  dashboardText: {
    fontSize: 9,
    top: 15,
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    right: 45
  }
});

export default Navbar;
