import { StatusBar } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

const FocusedStatusBar = (props) => {
  const isFocused = useIsFocused();

  // Status bar Not SHow up.
  return isFocused ? <StatusBar {...props} /> : null;
}

export default FocusedStatusBar;