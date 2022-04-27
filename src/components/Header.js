import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Back } from '../assets/icons';

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'row',
        backgroundColor: '#FBFBFB',
        borderBottomWidth: 0.25,
        borderBottomColor: '#D1D1D1',
    },
    title: {
        flex: 1,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontFamily: 'Roboto',
        color: '#2F2F2F',
        fontSize: 15,
        fontWeight: 'bold',
    },
    back: {
        flexDirection: 'row',
        alignSelf: 'center',
        // position: 'absolute',
    },
    backText: {
        marginLeft: 7.5,
        fontFamily: 'Roboto',
        color: '#2AC795',
        fontSize: 15,
    }
});

export default function Header({title="<Header_Title>", back=null}) {
    return(
        <View style={styles.container}>
            {(back !== null) && <TouchableOpacity style={styles.back} activeOpacity={0.5} onPress={back[1]}>
                <Back />
                <Text style={styles.backText}>{back[0]}</Text>
            </TouchableOpacity>}
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}

// const s = StyleSheet.create({
//     container: {
//         padding: 10,
//         flexDirection: 'row',

//         height: 150,
//         backgroundColor: 'grey',
//     },
//     back: {
//         justifyContent: 'center',
//         alignItems: 'flex-start',

//         borderWidth: 1,
//         borderColor: 'red',

//         flex: 1,
//         flexWrap: 'wrap',
//     },
//     title: {
//         textAlign: 'center',
//         textAlignVertical: 'center',

//         borderWidth: 1,
//         borderColor: 'green',

//         flex: 1+2,
//     },
//     right: {
//         borderWidth: 1,
//         borderColor: 'blue',

//         flex: 1,
//     }
// });

// export default function Header({title="<Header_Title>", back=null}) {
//     return(
//         <View style={s.container}>
//             <View style={s.back}>
//                 <Text>BACK BACK </Text>
//             </View>
//             <Text style={s.title}>TITLE </Text>
//             <View style={s.right} />
//         </View>
//     );
// }
