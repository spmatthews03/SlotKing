import React, {useState} from 'react';
import {Image, Modal, StyleSheet, Text, TouchableOpacity, View, ScrollView} from "react-native";
import {
    BAR_CARD, CHERRY_CARD,
    CLOSE_BUTTON, COIN_CARD, CROWN_CARD, DOUBLE_BAR_CARD,
    DOUBLE_HEART_CARD,
    HEART_CARD,
    LINES_3X3,
    LINES_4X4, SEVEN_CARD, TRIPLE_SEVEN_CARD,
    WILD_CARD
} from "../../constants/imageConstants";
import {useDispatch, useSelector} from "react-redux";
import Swiper from "react-native-swiper";
import {RULES_3X3, RULES_4X4} from "../../constants/actionTypes";

const Rules = (props) => {
    const gameVersion = useSelector(state => state.versionReducer.version)
    const dispatch = useDispatch();

    function versionSwiper(){
        if(gameVersion == "3x3"){
            return(
                <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
                    <ScrollView
                        style={{margin:10}}
                        contentContainerStyle={{justifyContent: 'center', alignItems:'center'}}>
                        <Text style={styles.ruleText}>
                            Nine cards will be dealt on the table. After the first deal, select the cards you want
                            to keep. Once you've selected your cards, hit 'Draw' to deal the next round of cards.
                            Your winnings will then be calculated.
                        </Text>
                        <Text style={styles.ruleText}>
                            You are paid out for connecting 2 or 3 cards on the playing field,
                            as shown below.

                            There are 16 lines in the 3x3 version, so a minimum bet of 16 will allow you to play
                            all the lines. Continue reading for more information on winning.
                        </Text>
                        <View style={{height:400, width:'100%', paddingHorizontal:20, paddingTop: 20}}>
                            <Image style={{width:'100%', height:'100%', resizeMode:'contain'}} source={LINES_3X3} />
                        </View>
                        <Text style={styles.ruleText}>
                            In the diagram above, it shows all 16 playable lines, as well as the order of the cards dealt.
                            If card 1, 2 match, then line 15 will be paid out for a 2x payout of that card symbol. If
                            card 1, 2, and 3 match, then line 15 and 5 will be paid out for 3x payout of that card symbol.
                        </Text>
                        <Text style={styles.ruleText}>
                            The 9 symbols are
                        </Text>
                        <View style={{width:'100%', height:200, paddingVertical:10}}>
                            <View style={{flex:1, flexDirection:'row', paddingBottom: 5}}>
                                <View style={{flex:1}}>
                                    <Image style={{width:'100%', height:'100%', resizeMode:'contain'}} source={HEART_CARD} />
                                </View>
                                <View style={{flex:1}}>
                                    <Image style={{width:'100%', height:'100%', resizeMode:'contain'}} source={DOUBLE_HEART_CARD} />
                                </View>
                                <View style={{flex:1}}>
                                    <Image style={{width:'100%', height:'100%', resizeMode:'contain'}} source={BAR_CARD} />
                                </View>
                                <View style={{flex:1}}>
                                    <Image style={{width:'100%', height:'100%', resizeMode:'contain'}} source={DOUBLE_BAR_CARD} />
                                </View>
                                <View style={{flex:1}}>
                                    <Image style={{width:'100%', height:'100%', resizeMode:'contain'}} source={CHERRY_CARD} />
                                </View>
                            </View>
                            <View style={{flex:1, flexDirection:'row', paddingTop: 5}}>
                                <View style={{flex:1}}>
                                    <Image style={{width:'100%', height:'100%', resizeMode:'contain'}} source={COIN_CARD} />
                                </View>
                                <View style={{flex:1}}>
                                    <Image style={{width:'100%', height:'100%', resizeMode:'contain'}} source={CROWN_CARD} />
                                </View>
                                <View style={{flex:1}}>
                                    <Image style={{width:'100%', height:'100%', resizeMode:'contain'}} source={SEVEN_CARD} />
                                </View>
                                <View style={{flex:1}}>
                                    <Image style={{width:'100%', height:'100%', resizeMode:'contain'}} source={TRIPLE_SEVEN_CARD} />
                                </View>
                                <View style={{flex:1}}/>
                            </View>
                        </View>
                        <Text style={styles.ruleText}>
                            For Priceboard information, close this window and check out the priceboard on the bottom
                            right of the game screen.
                        </Text>
                    </ScrollView>
                </View>
            )
        } else {
            return (
                <ScrollView
                    style={{margin:10}}
                    contentContainerStyle={{justifyContent: 'center', alignItems:'center'}}>
                    <Text style={styles.ruleText}>
                        Sixteen cards will be dealt on the table. After the first deal, select the cards you want
                        to keep. Once you've selected your cards, hit 'Draw' to deal the next round of cards.
                        Your winnings will then be calculated.
                    </Text>
                    <Text style={styles.ruleText}>
                        You are paid out for connecting 3 or 4 cards on the playing field,
                        as illustrated below.

                        There are 20 lines in the 4x4 version, so a minimum bet of 20 will allow you to play
                        all the lines.
                    </Text>
                    <View style={{height:400, width:'100%', paddingHorizontal:20, paddingTop: 20}}>
                        <Image style={{width:'100%', height:'100%', resizeMode:'contain'}} source={LINES_4X4} />
                    </View>
                    <Text style={styles.ruleText}>
                        In the diagram above, it shows all 20 playable lines, as well as the order of the cards dealt.
                        If card 1, 2 and 3 match, then line 19 will be paid out for a 3x payout of that card symbol. If
                        card 1, 2, 3 and 4 match, then line 19 and 6 will be paid out for 4x payout of that card symbol.
                    </Text>
                    <Text style={styles.ruleText}>
                        The 10 symbols are
                    </Text>
                    <View style={{width:'100%', height:200, paddingVertical:10}}>
                        <View style={{flex:1, flexDirection:'row', paddingBottom: 5}}>
                            <View style={{flex:1}}>
                                <Image style={{width:'100%', height:'100%', resizeMode:'contain'}} source={HEART_CARD} />
                            </View>
                            <View style={{flex:1}}>
                                <Image style={{width:'100%', height:'100%', resizeMode:'contain'}} source={DOUBLE_HEART_CARD} />
                            </View>
                            <View style={{flex:1}}>
                                <Image style={{width:'100%', height:'100%', resizeMode:'contain'}} source={BAR_CARD} />
                            </View>
                            <View style={{flex:1}}>
                                <Image style={{width:'100%', height:'100%', resizeMode:'contain'}} source={DOUBLE_BAR_CARD} />
                            </View>
                            <View style={{flex:1}}>
                                <Image style={{width:'100%', height:'100%', resizeMode:'contain'}} source={CHERRY_CARD} />
                            </View>
                        </View>
                        <View style={{flex:1, flexDirection:'row', paddingTop: 5}}>
                            <View style={{flex:1}}>
                                <Image style={{width:'100%', height:'100%', resizeMode:'contain'}} source={COIN_CARD} />
                            </View>
                            <View style={{flex:1}}>
                                <Image style={{width:'100%', height:'100%', resizeMode:'contain'}} source={CROWN_CARD} />
                            </View>
                            <View style={{flex:1}}>
                                <Image style={{width:'100%', height:'100%', resizeMode:'contain'}} source={SEVEN_CARD} />
                            </View>
                            <View style={{flex:1}}>
                                <Image style={{width:'100%', height:'100%', resizeMode:'contain'}} source={TRIPLE_SEVEN_CARD} />
                            </View>
                            <View style={{flex:1}}>
                                <Image style={{width:'100%', height:'100%', resizeMode:'contain'}} source={WILD_CARD} />
                            </View>
                        </View>
                    </View>
                    <Text style={styles.ruleText}>
                        An additional card is used in the 4x4. The Wild Card! This card matches any and all cards.
                    </Text>

                    <Text style={styles.ruleText}>
                        For Priceboard information, close this window and check out the priceboard on the bottom
                        right of the game screen.
                    </Text>
                </ScrollView>
            )
        }
    }

    function closeRules() {
        props.setModalVisibility();
        if(gameVersion == "3x3")
            dispatch({type: RULES_3X3})
        else
            dispatch({type: RULES_4X4})
    }



    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.isVisible}
            onRequestClose={() => {
                props.setModalVisibility();
            }}
        >
            <View style={styles.modalCenteredView}>
                <View style={styles.ruleModal}>
                    <View style={{justifyContent: 'center', alignItems:'center'}}>
                        <Text style={styles.ruleTitle}>Hold & Draw Rules</Text>
                    </View>
                    {versionSwiper()}
                    <View style={{height:40, width:40}}>
                        <TouchableOpacity
                            onPress={() => {
                                closeRules()
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

export default Rules;

var styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding:100
    },
    ruleModal: {
        width:'100%',
        height:'100%',
        backgroundColor: '#0f2636',
        borderWidth:1,
        padding: 15,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        }
    },
    modalCenteredView: {
        flex:1,
        justifyContent: "center",
        alignItems: "center",
    },
    ruleText: {
        fontSize: 22,
        lineHeight: 30,
        marginTop: 25,
        letterSpacing:3,
        textAlign: "center",
        textAlignVertical:'center',
        color:'white',
        fontFamily:'Roboto-Bold'
    },
    ruleTitle: {
        marginTop: 15,
        fontSize:30,
        textAlign: "center",
        color:'white',
        fontFamily:'PlayfairDisplay-Bold'
    },
})
