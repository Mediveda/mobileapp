import React from 'react';
import {KeyboardAvoidingView, Platform, ScrollView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export default ({style = null, children, safeArea = true, ...props}) => {
  const insets = useSafeAreaInsets();
  return Platform.OS === 'ios' ? (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={[
        {
          flex: 1,
          paddingTop: safeArea ? insets.top : 0,
        },
        style,
      ]}
      {...props}>
      {children}
    </KeyboardAvoidingView>
  ) : (
    <ScrollView>{children}</ScrollView>
  );
};
