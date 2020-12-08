import React from 'react';
import { StyleSheet, Text, View, Image, TextInput,TouchableOpacity,Alert,KeyboardAvoidingView, Keyboard } from 'react-native';
import* as firebase from 'firebase';

export default class LoginScreen extends React.Component {
    constructor(){
        super();
        this.state={
            emailId:'',
            password:'',
        }
    }

    login=async(email,password)=>{
        if(email&&password){
            try{
                const responce=await firebase.auth().signInWithEmailAndPassword(email,password)
                if(respoce){
                    this.props.navigation.navigate('Transaction')
                }
            }
            catch(error){
                switch(error.code){
                    case "auth/user-not-found":
                        Alert.alert('user does not exist')
                        console.log('does not exist')
                        break
                        case 'auth/invalid-email':
                            Alert.alert('incorrect email or password')
                            console.log('invalid')
                }
            }
        }
        else{Alert.alert('enter email and password')}
    }
  render(){
    return (
        <KeyboardAvoidingView style={{alignItems:'center', marginTop:20}}>
      <View>
<Image source={require('../assets/booklogo.jpg')}
style={{width:200,height:200}}/>
<Text style={{textAlign:'center', fontSize:30}}> Willy </Text>
      </View>
      <View>
          <TextInput
          style={styles.loginBox}
          placeHolder="abc@example.com"
          keyboardType='email-adress'
          onChangeText={(text)=>{
              this.setState({
                  emailId:text
              })
          }}
          />
      
      <TextInput
          style={styles.loginBox}
          placeHolder="enter password"
          secureTextEntry={true}
          onChangeText={(text)=>{
              this.setState({
                  password:text
              })
          }}
          />
          </View>
          <View>
              <TouchableOpacity style={{height:30,width:90, boderWidth:1,marginTop:20,paddingTop:5,boderRadius:7}} 
              onPress={()=>{
                  this.login(this.state.emailId, this.state.password)
              }}>
                 <Text style={{textAlign:'center'}}> login </Text>
                 </TouchableOpacity>
                   </View> 
                  </KeyboardAvoidingView>
    );
  }
}

const styles=StyleSheet.create({
    loginBox:{
        width:300,
        height:40,
        boderWidth:1.5,
        fontSize:20,
        margin:10,
        paddingLeft:10,
    }
})