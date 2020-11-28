import React from 'react';
import {SafeAreaView, ImageBackground, StyleSheet, View, StatusBar, TouchableOpacity, Alert, Image } from 'react-native';
import { TABLE_SLOT_KING_LOGO, PLAY_BUTTON_1, HOME_SCREEN_BACKGROUND, NO_BET_NO_WIN } from '../constants/imageConstants';
import { penClick } from '../helpers/sounds';
import { connect } from 'react-redux';
import MenuFooter from "../components/footers/MenuFooter";
import RNIap, {
    InAppPurchase,
    purchaseErrorListener,
    purchaseUpdatedListener,
    type ProductPurchase,
    type PurchaseError
} from 'react-native-iap';
import {CLAIM_CHIPS, HOLD_DRAW_ADD_WINNINGS, SET_ROOM} from "../constants/actionTypes";

let purchaseCoinsUpdate;
let purchaseCoinsError;

const itemSkus = Platform.select({
    ios: [
        'com.slotking.10000_coins',
        'com.slotking.50000_coins'
    ],
    android: [
        '10000_coins',
        '50000_coins'
    ]
});

const mapStateToProps = state => {
    return{
        // nothing
    };
};

const mapDispatchToProps = dispatch => {
    return {
        dispatchConsumableNow: (amount) => dispatch({type: HOLD_DRAW_ADD_WINNINGS, payload: amount}),
        setRoomStandard: () => dispatch({type: SET_ROOM, payload: 'standard'})
    };
};



class HomeScreen extends React.Component {
    constructor(props) {
        super();
        this.state = {
            products: []
        }
    }

    async componentDidMount() {
        this.props.setRoomStandard();
        try {
            const result = await RNIap.initConnection();
            await RNIap.flushFailedPurchasesCachedAsPendingAndroid();
            const products: Products[] = await RNIap.getProducts(itemSkus)
            this.setState({products: products});
            console.log('result: ', result);
            console.log('Products: ', products);
        } catch (e) {
            console.warn(err.code, err.message);
        }

        purchaseCoinsUpdate = purchaseUpdatedListener(async (purchase: InAppPurchase | ProductPurchase ) => {
            const receipt = purchase.transactionReceipt;

            if (receipt) {
                try{
                    await RNIap.finishTransaction(purchase, true);
                    this.dispatchConsumable(purchase.productId);
                } catch(err) {
                    console.warn('Acknowledge Error:', err);
                    Alert.alert('Purchase is taking longer than usual. You should see your chips arrive shortly,' +
                        'otherwise contact our development team.');
                }
            }
        });

        purchaseCoinsError = purchaseErrorListener((error: PurchaseError) => {
            console.warn('purchaseErrorListener', error);
        });

    }

    componentWillUnmount() {
        if(purchaseCoinsUpdate){
            purchaseCoinsUpdate.remove();
            purchaseCoinsUpdate = null;
        }
        if (purchaseCoinsError) {
            purchaseCoinsError.remove();
            purchaseCoinsError = null;
        }
        RNIap.endConnection();
    }

    dispatchConsumable(productId) {
        if(productId === '10000_coins')
            this.props.dispatchConsumableNow(10000);
        else
            this.props.dispatchConsumableNow(50000);
        this.props.navigation.goBack();
    }


    render() {
        const{navigate} = this.props.navigation;

        function onPressPlay() {
            penClick.play();
            navigate('Menu');
        }

        return (
            <ImageBackground
                style={styles.backgroundImage}
                source={HOME_SCREEN_BACKGROUND}>
                <StatusBar hidden={true}/>
                <SafeAreaView style={{flex:1}}>
                <View style={{flex:7, justifyContent:'center', alignItems:'center'}}>
                    <View style={{flex:1, width:'100%', padding:20}}>
                        <Image
                            style={{flex:1, width:'100%', height:'100%', resizeMode:'contain'}}
                            source={NO_BET_NO_WIN}/>
                        <Image
                            style={{flex:1, width:'100%', height:'100%', resizeMode:'contain'}}
                            source={TABLE_SLOT_KING_LOGO}/>
                    </View>
                    <View style={{flex:1,  paddingHorizontal:10, paddingTop:50, justifyContent:'center', alignItems:'center'}}>
                        <View style={{justifyContent:'center', alignItems:'center'}}>
                            <TouchableOpacity
                                onPress={()=> onPressPlay()}>
                                <Image
                                    style={{width:191, height:51}}
                                    source={PLAY_BUTTON_1}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <MenuFooter navigation={navigate} />
                </SafeAreaView>
            </ImageBackground>
        );
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const styles = StyleSheet.create({
    imageContainer:{
        flex: 1,
        alignItems:'stretch'
    },
    container: {
        flex:1,
        paddingTop: 2
    },
    backgroundImage:{
        flex: 1,
        width: undefined,
        height: undefined
    },
    centeredView: {
        flex:1,
        justifyContent: "center",
        alignItems: "center",
      },
      modalView: {
        width:'75%',
        height:'50%',
        margin: 20,
        backgroundColor: '#0f2636',
        borderRadius: 20,
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
      modalText: {
        marginBottom: 15,
        textAlign: "center",
        color:'goldenrod',
        fontFamily:'PlayfairDisplay-BoldItalic'
      },
      switchText: {
        marginBottom: 15,
        color:'goldenrod',
        fontFamily:'PlayfairDisplay-BoldItalic',
        textAlignVertical:'auto'
        },
      switchTextSelected: {
        marginBottom: 15,
        textAlign: "center",
        color:'goldenrod',
        fontFamily:'PlayfairDisplay-BoldItalic'
      },
      textContainerSwitch:{
          justifyContent:'center',
          alignItems:'center',
          textAlignVertical:'center'
        }
});
