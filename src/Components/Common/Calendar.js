import React, {useState} from 'react';
import {Text, StyleSheet, TouchableOpacity, Platform, View} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

import Colors from '../../Constants/Colors';

export default (props) => {
  const [date, setDate] = useState(null);
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    setShow(Platform.OS === 'ios');
    setDate(selectedDate);
    const date = props.onDate(moment(selectedDate).format('YYYY-MM-DD'));
  };

  const showDatepicker = () => {
    setShow(true);
  };

  return (
    <>
      {Platform.OS === 'ios' ? (
        <>
          {!show && (
            <TouchableOpacity style={styles.container} onPress={showDatepicker}>
              <Text style={{color: Colors.placeholder}}>Select Your Date</Text>
            </TouchableOpacity>
          )}

          {show && (
            <View
              style={{
                width: '40%',
                backgroundColor: 'white',
                borderWidth: 2,
                borderRadius: 10,
                marginLeft: 5,
                borderColor: Colors.primary,
              }}>
              <DateTimePicker
                mode="date"
                display="default"
                value={date !== '' ? date || new Date() : null}
                onChange={onChange}
              />
            </View>
          )}
        </>
      ) : (
        <>
          <TouchableOpacity
            style={styles.androidContainer}
            onPress={showDatepicker}>
            <Text style={styles.input}>
              {date ? moment(date).format('MMMM, DD YYYY') : null}
            </Text>

            {show && (
              <DateTimePicker
                mode="date"
                display="default"
                value={date !== '' ? date || new Date() : null}
                onChange={onChange}
              />
            )}
          </TouchableOpacity>
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 5,
    backgroundColor: Colors.white,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.primary,
    borderWidth: 3,
    height: 40,
    width: '50%',
  },
  androidContainer: {
    marginLeft: 5,
    backgroundColor: Colors.white,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    height: 40,
    borderWidth: 3,
    elevation: 9,
    borderColor: Colors.primary,
  },
  input: {
    fontSize: 16,
    color: Colors.dark,
  },
});
