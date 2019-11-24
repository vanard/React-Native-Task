import React from 'react';
import { View, Text} from 'react-native';
import { Content} from 'native-base';

const ListItem = props => {
    const {
        listItem,
        boldStyle,
        containerRow,
        container
    } = styles;

    return (
            <Content style={container}>

                <View style={{
                    position: 'absolute', 
                    backgroundColor: '#56B586', 
                    width: '3%', 
                    height: '100%',
                    borderTopStartRadius: 4,
                    borderBottomStartRadius: 4
                }}/>

                <View style={listItem}>
                    <View style={containerRow}>
                        <Text style={boldStyle}>{(props.sender).toUpperCase()}</Text>
                        <Text> ➔ </Text>
                        <Text style={boldStyle}>{(props.receive).toUpperCase()}</Text>
                    </View>
                    <Text>{props.title}</Text>
                    <View style={containerRow}>
                        <Text>{props.amount}</Text>
                        <Text> {String.fromCharCode(parseInt("25CF", 16))} </Text>
                        <Text>{props.date}</Text>
                    </View>
                </View>
                <View style={{
                        position: 'absolute',
                        right: 0,
                        top: '33%',
                        justifyContent: 'flex-end',
                        backgroundColor: '#56B586',
                        paddingHorizontal: 10,
                        paddingVertical: 5,
                        borderRadius: 5
                    }}>
                    <Text style={{color: 'white', fontWeight: 'bold', fontSize: 12}}>{props.buttonStats}</Text>
                </View>
            </Content>
    );
};

const styles = {
    container: {
        flexDirection: 'row',
        marginTop: 8,
        backgroundColor: '#fff',
        borderRadius: 4,
    },
    containerRow: {
        flexDirection: 'row',
    },
    listItem: {
        padding: 10,
    },
    boldStyle: {
        fontWeight: 'bold',
    }
};

export default ListItem;