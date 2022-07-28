import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const coef = windowWidth / 375 ;
const size = {}

for (let i = 0 ; i < 500 ; i++ ){
  size['size' + i] = i * coef ;
}

export default size;
