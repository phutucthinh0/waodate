import React, { Component } from 'react';
import {View, Text, Image, PixelRatio, StyleSheet } from 'react-native';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('./logo.png')}
        ></Image>
        <Text style={styles.titlePrivacy} >
          Bằng cách bấm vào Đăng Nhập, bạn đồng ý với Điều Khoản của chúng tôi.{"\n"} Tìm hiều về cách chúng tôi xử lý dữ liệu của bạn trong Chính Sách Quyền Riêng Tư và Chính sách về Cookie của chúng tôi.
        </Text>
        <View style={styles.loginView}>
          <Image style={styles.loginLogo} source={require('./phone.png')}/>
          <Text style={styles.loginTitle}>Đăng nhập bằng số điện thoại</Text>
        </View>
        <View style={styles.loginView}>
          <Image style={styles.loginLogo} source={require('./fb.png')}/>
          <Text style={styles.loginTitle}>Đăng nhập qua Facebook</Text>
        </View>
        <View style={styles.loginView}>
          <Image style={styles.loginLogo} source={require('./google.png')}/>
          <Text style={styles.loginTitle}>Đăng nhập qua Google</Text>
        </View>
        <Text style={styles.titleProblem}>Sự cố khi đăng nhập?</Text>
        <Text style={styles.titleDeclare}>Chúng tôi không đăng bất kỳ thông tin nào lên Facebook</Text>
      </View >
    );
  }
}

export default App;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4E37D3',
    flex: 1,
  },
  logo: {
    width: PixelRatio.getPixelSizeForLayoutSize(40),
    height: undefined,
    aspectRatio: 189 / 242,
    marginStart: "auto",
    marginEnd: "auto",
    marginTop: 30
  },
  titlePrivacy: {
    marginStart: 40,
    marginEnd: 40,
    marginTop: 30,
    marginBottom:30,
    fontSize: 14,
    lineHeight: 24,
    textAlign: 'center',
    color: "#FFFFFF",
    fontFamily: 'SVN-PF Din Text Pro'
  },
  loginView: {
    flexDirection:'row',
    backgroundColor: '#FFFFFF',
    width: PixelRatio.getPixelSizeForLayoutSize(100),
    height: undefined,
    aspectRatio: 332 / 50,
    borderRadius: 30,
    marginStart: "auto",
    marginEnd: "auto",
    marginTop: 10,
    paddingEnd:20
  },
  loginLogo:{
    justifyContent:'center',
    marginTop:'auto',
    marginBottom:'auto',
    marginStart:20
  
  },
  loginTitle: {
    position:'relative',
    fontSize: 16,
    lineHeight: 23.76,
    textAlign: 'center',
    color: "#000000",
    fontWeight:"400",
    justifyContent:'center',
    marginTop:'auto',
    marginBottom:'auto',
    marginStart:'auto',
    marginEnd:'auto'
  },
  titleProblem: {
    fontSize: 15,
    lineHeight: 24,
    textAlign: 'center',
    marginTop:10,
    lineHeight:24,
    textDecorationLine:'underline',
    color: "#FFFFFF"
  },
  titleDeclare: {
    fontSize: 14,
    textAlign: 'center',
    marginTop:10,
    color: "#FFFFFF",
    marginStart:30,
    marginEnd:30
  }
});
