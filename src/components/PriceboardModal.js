import React, {useState} from 'react';
import {Image, ImageBackground, Modal, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {
    CLOSE_BUTTON, FLY_IN_DREAM_LOGO, PRICEBOARD_7,
    PRICEBOARD_777,
    PRICEBOARD_BAR, PRICEBOARD_CHERRY,
    PRICEBOARD_COIN,
    PRICEBOARD_CROWN, PRICEBOARD_DOUBLE_BAR, PRICEBOARD_DOUBLE_HEART, PRICEBOARD_HEART, PRICEBOARD_WILD
} from "../constants/imageConstants";
import {priceboard_3x3, priceboard_4x4} from "../constants/priceboardObjects";
import {useSelector} from "react-redux";
import PriceboardSection from "./PriceboardSection";

const PriceboardModal = (props) => {
    const version = useSelector(state => state.versionReducer.version)
    let priceboard;
    let toWin;
    let betPerLine;

    if(version == '3x3') {
        priceboard = priceboard_3x3;
        toWin = {
            small : '2x',
            big : '3x'
        }
        betPerLine = props.totalBet/16;
    }
    else {
        priceboard = priceboard_4x4;
        toWin = {
            small : '3x',
            big : '4x'
        }
        betPerLine = props.totalBet/20;
    }


    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.isVisible}
            onRequestClose={() => {
                props.setPriceboardVisibility();
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={{height:75, justifyContent:'center', alignItems:'center', flexDirection:'row'}}>
                        <View style={{flex:.3}}>
                            <Image style={{width:'100%', height:'100%', resizeMode:'contain'}} source={FLY_IN_DREAM_LOGO} />
                        </View>
                        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                            <Text style={styles.priceboardText}>Priceboard</Text>
                            <Text style={styles.priceboardSubText}>Bet: ${props.totalBet}</Text>
                        </View>
                        <View style={{flex:.3}}>
                            <Image style={{width:'100%', height:'100%', resizeMode:'contain'}} source={FLY_IN_DREAM_LOGO} />
                        </View>
                    </View>
                    <View style={{flex:1, flexDirection:'row'}}>
                        <View style={{flex:1}}>
                            <PriceboardSection
                                lineBet={betPerLine}
                                image={PRICEBOARD_777}
                                toWin={toWin}
                                pieces={priceboard["card_777"].pieces}
                                payoutBig={priceboard["card_777"].payout_big}
                                payoutSmall={priceboard["card_777"].payout_small}/>
                            <PriceboardSection
                                lineBet={betPerLine}
                                image={PRICEBOARD_CROWN}
                                toWin={toWin}
                                pieces={priceboard["card_crown"].pieces}
                                payoutBig={priceboard["card_crown"].payout_big}
                                payoutSmall={priceboard["card_crown"].payout_small}/>
                            <PriceboardSection
                                lineBet={betPerLine}
                                image={PRICEBOARD_COIN}
                                toWin={toWin}
                                pieces={priceboard["card_coin"].pieces}
                                payoutBig={priceboard["card_coin"].payout_big}
                                payoutSmall={priceboard["card_coin"].payout_small}/>
                            <PriceboardSection
                                lineBet={betPerLine}
                                image={PRICEBOARD_BAR}
                                toWin={toWin}
                                pieces={priceboard["card_bar"].pieces}
                                payoutBig={priceboard["card_bar"].payout_big}
                                payoutSmall={priceboard["card_bar"].payout_small}/>
                            <PriceboardSection
                                lineBet={betPerLine}
                                image={PRICEBOARD_HEART}
                                toWin={toWin}
                                pieces={priceboard["card_heart"].pieces}
                                payoutBig={priceboard["card_heart"].payout_big}
                                payoutSmall={priceboard["card_heart"].payout_small}/>
                        </View>
                        <View style={{flex:1}}>
                            <View style={{flex:4}}>
                                <PriceboardSection
                                    lineBet={betPerLine}
                                    image={PRICEBOARD_7}
                                    toWin={toWin}
                                    pieces={priceboard["card_7"].pieces}
                                    payoutBig={priceboard["card_7"].payout_big}
                                    payoutSmall={priceboard["card_7"].payout_small}/>
                                <PriceboardSection
                                    lineBet={betPerLine}
                                    image={PRICEBOARD_DOUBLE_BAR}
                                    toWin={toWin}
                                    pieces={priceboard["card_double_bar"].pieces}
                                    payoutBig={priceboard["card_double_bar"].payout_big}
                                    payoutSmall={priceboard["card_double_bar"].payout_small}/>
                                <PriceboardSection
                                    lineBet={betPerLine}
                                    image={PRICEBOARD_DOUBLE_HEART}
                                    toWin={toWin}
                                    pieces={priceboard["card_double_heart"].pieces}
                                    payoutBig={priceboard["card_double_heart"].payout_big}
                                    payoutSmall={priceboard["card_double_heart"].payout_small}/>
                                <PriceboardSection
                                    lineBet={betPerLine}
                                    image={PRICEBOARD_CHERRY}
                                    toWin={toWin}
                                    pieces={priceboard["card_cherry"].pieces}
                                    payoutBig={priceboard["card_cherry"].payout_big}
                                    payoutSmall={priceboard["card_cherry"].payout_small}/>
                            </View>
                            <View style={{flex:1}}>
                                {version == '4x4' ?
                                    <PriceboardSection
                                        image={PRICEBOARD_WILD}
                                        pieces={1}
                                        payoutBig={priceboard["card_cherry"].payout_big}
                                        payoutSmall={priceboard["card_cherry"].payout_small}/>
                                        : null
                                }
                            </View>
                        </View>

                    </View>
                    <View style={{height:40, width:40}}>
                        <TouchableOpacity
                            onPress={() => {
                                props.setPriceboardVisibility();
                            }}
                        >
                            <Image style={{width:'100%',height:'100%', resizeMode:'contain'}} source={CLOSE_BUTTON}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default PriceboardModal;

var styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding:100
    },
    modalView: {
        width: '100%',
        height: '100%',
        // margin: 20,
        backgroundColor: '#0f2636',
        // borderRadius: 20,
        // borderColor:'#ae8625',
        borderWidth:1,
        padding: 15,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    priceboardText: {
        fontFamily:'PlayfairDisplay-Bold',
        color:'white',
        fontSize:38
    },
    priceboardSubText: {
        fontFamily:'PlayfairDisplay-Bold',
        color:'white',
        fontSize:24
    },
    centeredView: {
        flex:1,
        justifyContent: "center",
        alignItems: "center",
    }
})
