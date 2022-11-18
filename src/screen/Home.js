import { View, Text } from 'react-native'
import HomeScreen from './HomeScreen';
import PhoneNoScreen from './PhoneNoScreen';
import NameScreen from './NameScreen';


function Home() {
    var no = '';
    var name = '';
    if (!no) {
        return (
            <View>
                <PhoneNoScreen />
            </View>
        )
    }
    else if (!name) {
        return (
            <View>
                <NameScreen />
            </View>
        )
    }
    else {
        return (
            <View>
                <HomeScreen />
            </View>
        )
    }

}
export default Home;