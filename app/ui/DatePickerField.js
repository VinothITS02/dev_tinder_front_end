import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const DatePickerField = ({ label = 'Select Date', value, onChange }) => {
  const [show, setShow] = useState(false);

  const handleChange = (event, selectedDate) => {
    setShow(false);
    if (selectedDate) {
      const formattedDate = selectedDate.toISOString().split('T')[0];
      onChange(formattedDate);
    }
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.input}
        onPress={() => setShow(true)}
      >
        <Text style={{ color: value ? '#000' : '#aaa' }}>
          {value ? `${label}: ${value}` : label}
        </Text>
      </TouchableOpacity>

      {show && (
        <DateTimePicker
          mode="date"
          value={value ? new Date(value) : new Date(2000, 0, 1)}
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={handleChange}
          maximumDate={new Date()}
        />
      )}
    </View>
  );
};

export default DatePickerField;

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderColor: '#aaa',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    justifyContent: 'center',
    marginBottom: 16,
    backgroundColor: '#f9f9f9',
  },
});
