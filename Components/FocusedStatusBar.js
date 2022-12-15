import { View, Text, StatusBar } from 'react-native';
import { useIsFocused } from '@react-navigation/core';

const FocusedStatusBar = (props) => {
    const isFocused = useIsFocused();
    return isFocused ? <StatusBar animation={true} {...props} /> : null;
}

export default FocusedStatusBar;