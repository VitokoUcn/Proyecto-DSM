import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import { userApi } from '../api/userApi';
import { loginStyles } from '../theme/registerTheme';
import { Background } from '../components/Background';
import { AuthContext } from '../context/AuthContext';
import { useForm } from '../hooks/useForm';

const LoadingScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator
        size={50}
        color='blue'
      />
    </View>
  )
}

export default LoadingScreen