import {Image, StyleSheet, Text, View} from "react-native";
import React from "react";

const PriceboardSection = (props) => {

    return(
    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
        <View style={{flex: .5, justifyContent:'center', alignItems:'center'}}>
            <Image
                style={{width: '100%', height: '100%', resizeMode: 'contain'}}
                source={props.image}/>
        </View>
        <View style={{flex: 1, paddingLeft: 3}}>
            <Text adjustsFontSizeToFit={true} numberOfLines={1}  style={styles.piecesText}>
                {props.pieces} pcs in deck
            </Text>
            {props.toWin ?
                <View>
                    <View style={{flexDirection: 'row', alignItems:'center'}}>
                        <Text adjustsFontSizeToFit={true} numberOfLines={1} style={styles.toWinText}>
                            {props.toWin.big} =
                        </Text>
                        <Text adjustsFontSizeToFit={true} numberOfLines={1} style={styles.payoutText}>
                            ${props.lineBet * props.payoutBig}
                        </Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text adjustsFontSizeToFit={true} numberOfLines={1} style={styles.toWinText}>
                            {props.toWin.small} =
                        </Text>
                        <Text adjustsFontSizeToFit={true} numberOfLines={1}  style={styles.payoutText}>
                            ${props.lineBet * props.payoutSmall}
                        </Text>
                    </View>
                </View>
            :
            <View>
                <Text style={styles.wildText}>
                    Matches All Symbols
                </Text>
            </View>
            }
        </View>
    </View>
    );
};

export default PriceboardSection;


const styles = StyleSheet.create({
    piecesText: {
        fontSize:18,
        color: 'gold',
        fontFamily:'PlayfairDisplay-Regular',
    },
    toWinText: {
        fontSize:18,
        color:'white',
        fontFamily:'PlayfairDisplay-Regular',
    },
    payoutText: {
        fontSize:18,
        color:'white',
        fontFamily:'PlayfairDisplay-Black',
    },
    wildText: {
        fontSize:14,
        color:'white',
        fontFamily:'PlayfairDisplay-Black',
    }
})