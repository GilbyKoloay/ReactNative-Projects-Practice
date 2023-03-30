import { View } from 'react-native';

export default function({ height, width }: { height: number, width: number}) {
  return(
    <View style={{height: height, width: width}} />
  );
};
