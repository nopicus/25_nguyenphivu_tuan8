// import {React, useEffect, useState } from 'react';
// import {View, Text, TextInput, Image,TouchableOpacity,Pressable,Button} from "react-native";
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { useNavigation } from '@react-navigation/native';
// export default function Create_account({}) {
//     const route = useRoute();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [name, setName] = useState('');
//   const tk = (text) => {
//     setEmail(text);
//   };

//   const mk = (text) => {
//     setPassword(text);
//   };
//     const ten = (text) => {
//     setName(text);
//     };
//   const handleLogin = () => {
//     if (!email || !password || !name) {
//       alert('Vui lòng nhập tên người dùng và mật khẩu');
//       return;
//     }

//     // Gửi yêu cầu POST đến API để tạo mới người dùng
//     fetch('https://654ee7e9358230d8f0cce45b.mockapi.io/taikhoan', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ email, password,name }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         alert('Tạo tài khoản thành công!');
//         // Đăng nhập ngay sau khi tạo tài khoản (có thể thay đổi cách xử lý này theo yêu cầu)
//         handleLogin();
//       })
//       .catch((error) => {
//         console.error('Lỗi khi tạo tài khoản:', error);
//         alert('Đã xảy ra lỗi khi tạo tài khoản');
//       });
//   };
//     return(
//         <View style={{flex:1, }}>
//             <Image source={require('../assets/logo_ATD.png')} style={{ width: 310, height: 100, alignSelf: 'center' }} />
//             <View style={{borderRadius:10,margin: 12, borderWidth: 1,padding:10,width:400,height:700}}>
//                 <View style={{paddingHorizontal:10 ,gap:10}}>
//                 <Text style={{fontSize: 28,fontFamily:'roboto',fontWeight:600}}>Create Account</Text>
//                 <Text style={{fontSize: 18,fontFamily:'roboto',}}>Your Name</Text>
//                 <TextInput style={{ width: 350, height: 50, margin: 12, borderWidth: 1, padding: 10, backgroundColor: 'white', borderRadius: 10}}
//                 placeholder="Name" value={name} onChangeText={ten}
                
//                 ></TextInput>
//                 <Text style={{fontSize: 18,fontFamily:'roboto',}}>Email</Text>
//                 <TextInput style={{ width: 350, height: 50, margin: 12, borderWidth: 1, padding: 10, backgroundColor: 'white', borderRadius: 10}}
//                 placeholder="Email" value={email} onChangeText={tk}
//                 ></TextInput>
//                 <Text style={{fontSize: 18,fontFamily:'roboto',}}>Password</Text>
//                 <TextInput style={{ width: 350, height: 50, margin: 12, borderWidth: 1, padding: 10, backgroundColor: 'white', borderRadius: 10}}
//                 placeholder="Password" value={password} onChangeText={mk}
//                 ></TextInput>
//                 <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
//              <Pressable
//                     style={{ backgroundColor: 'cyan', width: 200, height: 50, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}
//                      onPress={() => navigation.navigate('Login')} >
//                     <Text style={{ fontWeight: 700, fontSize: 20 }}>Create Account</Text>
//                     </Pressable>
//                     </TouchableOpacity>
//                     <Text style={{fontSize:15,fontFamily:'roboto'}}> 
//                         bạn đã có tài khoản?    
//                     <Pressable onPress={() => navigation.navigate('Login')}>
//                         <Text style={{fontWeight:700,fontSize:15,color:'blue'}}> Signin</Text>
//                     </Pressable>
//                     </Text>
//                 </View>
//             </View>
//         </View>
//     )
// }
import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, Pressable } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function Create_account({ navigation }) {
  const route = useRoute();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const tk = (text) => {
    setEmail(text);
  };

  const mk = (text) => {
    setPassword(text);
  };

  const ten = (text) => {
    setName(text);
  };

  const handleCreateAccount = () => {
    if (!email || !password || !name) {
      alert('Vui lòng điền đầy đủ thông tin');
      return;
    }

    // Gửi yêu cầu POST đến API để tạo mới người dùng
    fetch('https://654ee7e9358230d8f0cce45b.mockapi.io/taikhoan', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password, name }),
    })
      .then((response) => response.json())
      .then((data) => {
        alert('Tạo tài khoản thành công!');
        // Trở về màn hình đăng nhập sau khi tạo tài khoản thành công (có thể thay đổi cách xử lý này theo yêu cầu)
        navigation.navigate('Login');
      })
      .catch((error) => {
        console.error('Lỗi khi tạo tài khoản:', error);
        alert('Đã xảy ra lỗi khi tạo tài khoản');
      });
  };

  return (
    <View style={{ flex: 1 }}>
      <Image source={require('../assets/logo_ATD.png')} style={{ width: 310, height: 100, alignSelf: 'center' }} />
      <View style={{ borderRadius: 10, margin: 12, borderWidth: 1, padding: 10, width: 400, height: 700 }}>
        <View style={{ paddingHorizontal: 10, gap: 10 }}>
          <Text style={{ fontSize: 28, fontFamily: 'roboto', fontWeight: 600 }}>Create Account</Text>
          <Text style={{ fontSize: 18, fontFamily: 'roboto' }}>Your Name</Text>
          <TextInput
            style={{ width: 350, height: 50, margin: 12, borderWidth: 1, padding: 10, backgroundColor: 'white', borderRadius: 10 }}
            placeholder="Name"
            value={name}
            onChangeText={ten}
          />
          <Text style={{ fontSize: 18, fontFamily: 'roboto' }}>Email</Text>
          <TextInput
            style={{ width: 350, height: 50, margin: 12, borderWidth: 1, padding: 10, backgroundColor: 'white', borderRadius: 10 }}
            placeholder="Email"
            value={email}
            onChangeText={tk}
          />
          <Text style={{ fontSize: 18, fontFamily: 'roboto' }}>Password</Text>
          <TextInput
            style={{ width: 350, height: 50, margin: 12, borderWidth: 1, padding: 10, backgroundColor: 'white', borderRadius: 10 }}
            placeholder="Password"
            value={password}
            onChangeText={mk}
            secureTextEntry={true}
          />
          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
            <Pressable
              style={{ backgroundColor: 'cyan', width: 200, height: 50, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}
              onPress={handleCreateAccount}>
              <Text style={{ fontWeight: 700, fontSize: 20 }}>Create Account</Text>
            </Pressable>
          </TouchableOpacity>
          <Text style={{ fontSize: 15, fontFamily: 'roboto' }}>
            Bạn đã có tài khoản?
            <Pressable onPress={() => navigation.navigate('Login')}>
              <Text style={{ fontWeight: 700, fontSize: 15, color: 'blue' }}> Sign in</Text>
            </Pressable>
          </Text>
        </View>
      </View>
    </View>
  );
}
