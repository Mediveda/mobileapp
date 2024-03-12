// OTP.js
import React, { useState, useRef } from 'react';
import { Pressable, Keyboard, TextInput, StatusBar, StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';

const OTP = () => {
  const [otpCode, setOTPCode] = useState('');
  const [isInputBoxFocused, setIsInputBoxFocused] = useState(false);
  const maximumCodeLength = 4;
  const inputRef = useRef();

  const handleOnPress = () => {
    setIsInputBoxFocused(true);
    inputRef.current.focus();
  };

  const handleOnBlur = () => {
    setIsInputBoxFocused(false);
  };

  const StyledSplitBoxes = isInputBoxFocused ? SplitBoxesFocused : SplitBoxes;

  const boxArray = new Array(maximumCodeLength).fill(0);

  const handleInputChange = (text) => {
    setOTPCode(text);
  };

  const boxDigit = (_, index) => {
    const emptyInput = '';
    const digit = otpCode[index] || emptyInput;

    return (
      <StyledSplitBoxes key={index}>
        <SplitBoxText>{digit}</SplitBoxText>
      </StyledSplitBoxes>
    );
  };

  return (
    <Pressable style={styles.container} onPress={Keyboard.dismiss}>
      <SplitOTPBoxesContainer onPress={handleOnPress}>{boxArray.map(boxDigit)}</SplitOTPBoxesContainer>
      <TextInputHidden
        value={otpCode}
        onChangeText={handleInputChange}
        maxLength={maximumCodeLength}
        ref={inputRef}
        onBlur={handleOnBlur}
        keyboardType="numeric"
      />
      <StatusBar style="auto" />
    </Pressable>
  );
};

const SplitBoxes = styled(View)`
  width: 60px;
  height: 70px;
  border-radius: 10px;
  border-width: 1px;
  border-color: #000;
  margin: 5px;
  align-items: center;
  justify-content: center;
`;

const SplitBoxesFocused = styled(SplitBoxes)`
  border-color: green;
  background-color: white;
`;

const SplitBoxText = styled(Text)`
  font-size: 22px;
`;

const SplitOTPBoxesContainer = styled(Pressable)`
  flex-direction: row;
`;

const TextInputHidden = styled(TextInput)`
  position: absolute;
  width: 1px;
  height: 0;
  opacity: 0;
`;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop:100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default OTP;
