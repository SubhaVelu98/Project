import { Content, Toast, Card } from "native-base";
import React, { Component } from "react";
import { AsyncStorage, FlatList, Text, View, Image, TouchableOpacity } from "react-native";
import SmoothPinCodeInput from "react-native-smooth-pincode-input";
import Colors from "../constants/Colors";
import { PinScreen} from "../constants/Style";
import screenSize, { normalize } from "../utils/screenSize";
import { ImageBackgroundOnlyComponent} from "./background";
import NavigationHeaderComponent from "./NavigationHeader";
import { ScrollView } from "react-native-gesture-handler";
import { Confirm } from "./Loader";
import pinImage from "../assets/images/pin.png";
import success from "../assets/images/success.png";

export class PinUnlock extends Component {

    state = {
        pin: "",
        pinInput: "",
        newPinInput: "",
        confirmPinInput: "",
        mnemonic: [],
        displayText: "",
        showConfirm: false,
        modalAction: () => { },
        resetMode: false,
        isSet: true,
        confirmed:false,
        mnemonicSet:true,
    };

    pinInput = React.createRef();
    newPinInput = React.createRef();
    confirmPinInput = React.createRef();

    constructor() {
        super();
        this.onPinInput = this.onPinInput.bind(this);
        this.onNewPinInput = this.onNewPinInput.bind(this);
        this.onFulfill = this.onFulfill.bind(this);
        this.onConfirmPinInput = this.onConfirmPinInput.bind(this);
        this.onNewPinInputFulfill = this.onNewPinInputFulfill.bind(this);
        this.onConfirmPinInputFulfill = this.onConfirmPinInputFulfill.bind(this);
        this.setNewPIN = this.setNewPIN.bind(this)
        this.cancelAction = this.cancelAction.bind(this)
    }

    async componentDidMount() {
        let mnemonic = await AsyncStorage.getItem("mnemonic");
        let pin = await AsyncStorage.getItem("pin");
        let resetMode = await AsyncStorage.getItem("resetMode");
        if (resetMode) {
            this.setState({ resetMode: true })
        }
        if (mnemonic) {
            mnemonic = JSON.parse(mnemonic);
        } else {
            mnemonic = "- - - - - - - - - - - -";
        }
        if (pin) {
            this.setState({ isSet: true, pin, mnemonic: mnemonic.split(" ") });
        } else {
            this.setState({ isSet: false });
            this.setState({ confirmed: false });
            this.setState({ mnemonicSet: true });
        }
    }

    async onFulfill() {
        let pinInput = this.state.pinInput;
        let pin = await AsyncStorage.getItem("pin");
        const { navigation, screenTo, checkHere } = this.props;
        console.log(pin, pinInput);
        if(screenTo === 'send'){
            if (pinInput === pin) {
                checkHere(true);
                return true
            }else{
                checkHere(false);
                return false
            }
        }

        if (pinInput === pin) {
            const navigateTo = navigation.getParam("navigateTo", "PlayIntro");
            navigation.navigate(navigateTo);
        } else {
            this.pinInput.current.shake().then(() => this.setState({ pinInput: "" }));
            Toast.show({
                duration: 3000,
                position: "top",
                text: "Incorrect PIN entered",
                buttonText: "Try Again",
                type: "warning"
            });
        }
    }

    async onPinInput(pinInput) {
        if ((pinInput > 0 && pinInput <= 9999) || !pinInput)
            this.setState({ pinInput });
    }

    async onNewPinInput(newPinInput) {
        if ((newPinInput > 0 && newPinInput <= 9999) || !newPinInput)
            this.setState({ newPinInput });
    }

    async onConfirmPinInput(confirmPinInput) {
        if ((confirmPinInput > 0 && confirmPinInput <= 9999) || !confirmPinInput)
            this.setState({ confirmPinInput });
    }


    async onNewPinInputFulfill() {
        if(this.state.newPinInput){
            this.setState({confirmed:true})
        }
        console.log("onNewPinInputFulfill");
    }

    async setNewPIN() {
        const { navigation } = this.props;
        await AsyncStorage.setItem("pin", this.state.confirmPinInput);
        this.onFulfill(this.state.confirmPinInput);
        Toast.show({
            duration: 3000,
            position: "top",
            text: "PIN has been set successfully",
            type: "success",
            buttonText: "Okay"
        });
        const navigateTo = navigation.getParam("navigateTo", "PlayIntro");
        navigation.navigate(navigateTo);
    }

    cancelAction() {
        this.confirmPinInput.current.shake().then(() => this.setState({ confirmPinInput: "" }));
        this.newPinInput.current.shake().then(() => this.setState({ newPinInput: "" }));
    }
    setUpPin(){
        this.setState({isSet:false});
        this.setState({confirmed:false});
        this.setState({mnemonicSet:false});
    }
    async onConfirmPinInputFulfill() {
        if (this.state.confirmPinInput === this.state.newPinInput) {
            Toast.show({
                duration: 3000,
                position: "top",
                text: "PIN is not erorr",
                buttonText: "Try Again",
                type: "warning"
            });
            // this.setState({ displayText: 'Entered PIN has been accepted. Please confirm the PIN', showConfirm: true, modalAction: this.setNewPIN })
            this.setNewPIN();
            // this.setState({mnemonicSet:true});
        } else {
            this.confirmPinInput.current.shake().then(() =>{
                this.setState({ confirmPinInput: "" })
                this.setState({ newPinInput: "" });
                this.setState({isSet:false});
                this.setState({confirmed:false});
                // this.setState({mnemonicSet:true});
            });
            Toast.show({
                duration: 3000,
                position: "top",
                text: "PIN is not matching",
                buttonText: "Try Again",
                type: "warning"
            });
        }
    }


    render() {
        const { pinInput, newPinInput, confirmPinInput, isSet,confirmed, mnemonicSet, resetMode } = this.state;
        let { mnemonic = "", screenTo, checkHere } = this.props;
        console.log(screenTo, '111111111111111111111111111111111111111111111111111111111111111');
        mnemonic = mnemonic.split(" ");
        return (

            <ImageBackgroundOnlyComponent>
                {/*<StatusBar hidden />*/}

                <NavigationHeaderComponent
                    title={""}
                    navigation={this.props.navigation}
                />
                <Confirm
                    displayText={this.state.displayText}
                    visible={this.state.showConfirm}
                    confirmAction={() => {
                        this.setState({ showConfirm: false });
                        this.state.modalAction();
                    }}
                    cancelAction={() => {
                        this.setState({ showConfirm: false });
                        this.cancelAction()
                    }}
                />
                <Content
                    contentContainerStyle={{
                        flex: 1,
                        width:'100%'
                    }}>
                    {!isSet && !confirmed && !mnemonicSet?
                        <View style={[PinScreen.top]}>
                            <Image source={pinImage} style={[PinScreen.pin]}/>
                            <Text style={[PinScreen.pinHead]}>Set up PIN</Text>
                            <Text style={[PinScreen.subText]}>
                                Set your pin for ATROMG8. You will need this PIN to access wallet and validate
                                transactions
                            </Text>
                        </View> :
                        <View>
                            { confirmed && !mnemonicSet && !isSet ?
                                <View style={[PinScreen.top]}>
                                    <Image source={pinImage} style={[PinScreen.pin]}/>
                                    <Text style={[PinScreen.pinHead]}>Confirm PIN</Text>
                                    <Text style={[PinScreen.subText]}>
                                        Re-enter the previously entered PIN for confirming
                                    </Text>
                                </View> :
                                <View>
                                    { !confirmed && mnemonicSet && !isSet && (
                                        <View style={[PinScreen.top]}>
                                            <Image source={success} style={[PinScreen.pin]}/>
                                            <Text style={[PinScreen.pinHead]}>Success</Text>
                                            <Text style={[PinScreen.subTextMn]}>
                                                Your registration is successfully completed
                                            </Text>
                                        </View>
                                    ) }

                                </View>
                            }
                        </View>
                    }
                    {isSet ? <View
                            style={{
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                        >
                            <View style={[PinScreen.top]}>
                                <Image source={pinImage} style={[PinScreen.pin]}/>
                                <Text style={[PinScreen.pinHead]}>Enter PIN</Text>
                                {
                                    screenTo ? <Text style={[PinScreen.subText]}>
                                        Please enter your PIN to Send
                                    </Text> :
                                        <Text style={[PinScreen.subText]}>
                                            Please enter your PIN to login here
                                        </Text>
                                }

                            </View>

                          {/*<Text*/}
                                {/*style={{*/}
                                    {/*color: Colors.noticeText,*/}
                                    {/*fontSize: normalize(16),*/}
                                    {/*textAlign: "center",*/}
                                    {/*fontFamily: "ubuntu",*/}
                                    {/*marginBottom: 10,*/}
                                    {/*marginTop: 10*/}
                                {/*}}*/}
                            {/*>*/}
                                {/*Please enter your PIN to login here*/}
                            {/*</Text>*/}
                      <View style={[PinScreen.formPin]}>
                          <SmoothPinCodeInput
                                ref={this.pinInput}
                                password
                                mask="*"
                                placeholder=""
                                cellSpacing={15}
                                cellStyle={{
                                    borderBottomWidth: 2,
                                    borderRadius: 0,
                                    borderColor: Colors.pinColor,
                                    backgroundColor: 'none',
                                }}
                                cellStyleFocused={{
                                    borderColor: "none",
                                    backgroundColor: "none"
                                }}
                                textStyle={{
                                    fontSize: 24,
                                    color: '#76797c'
                                }}
                                textStyleFocused={{
                                    color: Colors.textTintColor
                                }}
                                autoFocus={false}
                                value={pinInput}
                                // onFulfill={this.onFulfill}
                                onTextChange={this.onPinInput}
                            />
                            <TouchableOpacity style={[PinScreen.touch]} onPress={this.onFulfill}>
                                <Card style={[PinScreen.button]} >
                                    <Text  style={[PinScreen.text]}>Next</Text>
                                </Card>
                            </TouchableOpacity>
                      </View>
                        </View> :
                        <View>
                            {!confirmed && !mnemonicSet?
                                <View style={[PinScreen.formPin]}>
                                    <SmoothPinCodeInput
                                        ref={this.newPinInput}
                                        password
                                        mask="*"
                                        placeholder=""
                                        cellSpacing={15}
                                        cellStyle={{
                                            borderBottomWidth: 2,
                                            borderRadius: 0,
                                            borderColor: Colors.pinColor,
                                            backgroundColor: 'none',
                                        }}
                                        cellStyleFocused={{
                                            borderColor: "none",
                                            backgroundColor: "none"
                                        }}
                                        textStyle={{
                                            fontSize: 24,
                                            color: '#76797c'
                                        }}
                                        textStyleFocused={{
                                            color: Colors.textTintColor
                                        }}
                                        autoFocus={false}
                                        value={newPinInput}
                                        // onFulfill={this.onFulfill}
                                        onTextChange={this.onNewPinInput}
                                    />
                                    <TouchableOpacity style={[PinScreen.touch]} onPress={this.onNewPinInputFulfill}>
                                        <Card style={[PinScreen.button]} >
                                            <Text  style={[PinScreen.text]}>Next</Text>
                                        </Card>
                                    </TouchableOpacity>
                                </View> :
                                <View>
                                    { confirmed && !mnemonicSet ?
                                        <View style={[PinScreen.form]}>
                                            <SmoothPinCodeInput
                                                ref={this.confirmPinInput}
                                                password
                                                mask="*"
                                                placeholder=""
                                                cellSpacing={15}
                                                cellStyle={{
                                                    borderBottomWidth: 2,
                                                    borderRadius: 0,
                                                    borderColor: Colors.pinColor,
                                                    backgroundColor: 'none',
                                                }}
                                                cellStyleFocused={{
                                                    borderColor: "none",
                                                    backgroundColor: "none"
                                                }}
                                                textStyle={{
                                                    fontSize: 24,
                                                    color: '#76797c'
                                                }}
                                                textStyleFocused={{
                                                    color: Colors.textTintColor
                                                }}
                                                autoFocus={false}
                                                value={confirmPinInput}
                                                // onFulfill={this.onConfirmPinInputFulfill}
                                                onTextChange={this.onConfirmPinInput}
                                            />
                                            <TouchableOpacity style={[PinScreen.touch]} onPress={this.onConfirmPinInputFulfill}>
                                                <Card style={[PinScreen.button]} >
                                                    <Text  style={[PinScreen.text]}>Confirm PIN</Text>
                                                </Card>
                                            </TouchableOpacity>
                                        </View> :
                                        <View></View>

                                    }
                                </View>
                            }



                        </View>}
                    {!isSet && !resetMode && mnemonicSet && (
                        <View>
                            <View style={[PinScreen.form]}>
                                <Text
                                    style={[PinScreen.mnemonicHead]}>
                                    Your Mnemonic Phrase
                                </Text>
                                <Text
                                    style={[PinScreen.mnemonicText]}
                                >
                                    Please note down this Mnemonic seed in the below order to
                                    recover account.
                                </Text>
                                <View style={[PinScreen.list]}>
                                    <FlatList
                                        contentContainerStyle={{
                                            justifyContent: "center",
                                            alignItems: "center",
                                            flexGrow: 1
                                        }}
                                        data={mnemonic}
                                        // keyExtractor={this._keyExtractor} //has to be unique
                                        renderItem={(data, index) => (
                                            <View style={[PinScreen.listStyle]}>
                                                <Text
                                                    style={{
                                                        color: '#5c6a74',
                                                        fontSize: normalize(17),
                                                        borderBottomColor: Colors.tintColor,
                                                        marginBottom: normalize(3),
                                                        textAlign: "center",
                                                        fontFamily: "Quicksand-Regular"
                                                    }}>
                                                    {data.item}
                                                </Text>
                                                {/*<Text*/}
                                                    {/*style={{*/}
                                                        {/*color: Colors.tintColor,*/}
                                                        {/*fontSize: normalize(16),*/}
                                                        {/*textAlign: "center",*/}
                                                        {/*fontFamily: "ubuntu"*/}
                                                    {/*}}*/}
                                                {/*>*/}
                                                    {/*{data.index + 1}*/}
                                                {/*</Text>*/}
                                            </View>
                                        )}
                                        horizontal={false}
                                        numColumns={3}
                                    />
                                </View>
                                <TouchableOpacity style={[PinScreen.touch2]} onPress={this.setUpPin.bind(this)}>
                                    <Card style={[PinScreen.button]} >
                                        <Text  style={[PinScreen.text]}>Set Up PIN</Text>
                                    </Card>
                                </TouchableOpacity>
                            </View>
                            <View style={{alignItems:'center',justifyContent:'center'}}>
                                <Text style={[PinScreen.mnemonicText2]}>
                                    A PIN number will help you preventing unauthorised usage from your phone
                                </Text>
                            </View>
                        </View>
                    )}
                </Content>
            </ImageBackgroundOnlyComponent>

    );
    }
}

export default PinUnlock;
