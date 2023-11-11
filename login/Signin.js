// import {React, useEffect, useState } from 'react';
// import {View, Text, TextInput, Image,TouchableOpacity,Pressable} from "react-native";
// import navigation from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// export default function Signin({navigation}) {
   
//   const route = useRoute([]);
//   const [email, setEmail]=useState([]);;
//   const [password, setPassword] = useState([]);
//   useEffect(() => {
//     // Kiểm tra xem route.params có tồn tại và có giá trị không
//     if (route.params && route.params.email && route.params.password) {
//       // Nếu có dữ liệu từ route.params, cập nhật state
//       setEmail(route.params.email);
//       setPassword(route.params.password);
//     }
//   }, [route.params]);
//   const tk = (text) => {
//     setEmail(text);
//   };

//   const mk = (text) => {
//     setPassword(text);
//   };
//   const handleLogin = () => {
//     if (!email || !password) {
//       alert("Vui lòng nhập tên người dùng và mật khẩu");
//       return;
//     }
//     // Gửi yêu cầu GET đến API để lấy danh sách người dùng
//     fetch("https://654ee7e9358230d8f0cce45b.mockapi.io/taikhoan")
//       .then((response) => response.json())
//       .then((data) => {
//        // Kiểm tra xem có người dùng nào khớp với thông tin đăng nhập không
//         const userFound = data.find(
//           (user) => user.email === email && user.password === password
//         );

//         if (userFound) {
//           alert("Đăng nhập thành công!");
//           navigation.navigate("ND");
//         } else {
//           alert("Tên người dùng hoặc mật khẩu không đúng");
//         }
//        })
//       .catch((error) => {
//         console.error("Lỗi khi gửi yêu cầu lấy danh sách người dùng:", error);
//         alert("Đã xảy ra lỗi khi kiểm tra đăng nhập");
//       });
//  };
//     return(
//        <View style={{flex:1,gap:20}}>
//         <Image source={require('../assets/logo_ATD.png')} style={{ width:310,height:100,alignSelf:'center'}} />
//         <Text style={{fontSize:25,fontFamily:'roboto',alignSelf:'center'}}> hệ thống bãi giử xe thông minh </Text>
//         <View style={{gap:10,alignItems:'center'}}>
//         <Text style={{fontSize:28,fontWeight:600,color:'black'}} >
//         LOGIN
//         </Text>
//         <Text style={{fontSize:18,fontFamily:'roboto',}} >
//         Please enter your e-mail and password:
//         </Text>
//         {/* data.map((item)=>{ */}
//         <TextInput style={{width:300, height: 50,margin: 12, borderWidth: 1,padding: 10,backgroundColor:'white',borderRadius:10}}
//         placeholder="email" //value={user.email} onChangeText={tk}
//         ></TextInput>
//         <TextInput style={{ width:300,height: 50,margin: 12, borderWidth: 1,padding: 10,backgroundColor:'white',borderRadius:10}}
//           placeholder="password" //value={user.password} onChangeText={mk}
//           ></TextInput>
//         <TouchableOpacity style={{flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}} 
//         //onPress={handleLogin}
//         >
//           <Pressable style={{backgroundColor:"cyan", width: 200, height: 50, justifyContent:'center', alignItems: 'center', borderRadius: 10 }} 
//         onPress={() => { navigation.navigate('ND')}}>
//           <Text style={{fontWeight:700,fontSize:20}}>Continue</Text>
//           </Pressable>
//          </TouchableOpacity>
//          <Text>
//             -----------------or-----------------
//          </Text>
//          <TouchableOpacity style={{flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
//           <Pressable style={{backgroundColor:"cyan", width: 200, height: 50, justifyContent:'center', alignItems: 'center', borderRadius: 10 }} 
//         onPress={() => { navigation.navigate('Creat')}}>
//           <Text style={{fontWeight:700,fontSize:20}}>Create Account</Text>
//           </Pressable>
//          </TouchableOpacity>
//         </View>
//        </View> 
//     )
// }
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, Pressable } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function Signin({ navigation }) {
  const route = useRoute();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const tk = (text) => {
    setEmail(text);
  };

  const mk = (text) => {
    setPassword(text);
  };

  const handleLogin = () => {
    if (!email || !password) {
      alert('Vui lòng nhập tên người dùng và mật khẩu');
      return;
    }

    // Gửi yêu cầu GET đến API để lấy danh sách người dùng
    fetch('https://654ee7e9358230d8f0cce45b.mockapi.io/taikhoan')
      .then((response) => response.json())
      .then((data) => {
        // Kiểm tra xem có người dùng nào khớp với thông tin đăng nhập không
        const userFound = data.find((user) => user.email === email && user.password === password);

        if (userFound) {
          alert('Đăng nhập thành công!');
          navigation.navigate('ND');
        } else {
          alert('Tên người dùng hoặc mật khẩu không đúng');
        }
      })
      .catch((error) => {
        console.error('Lỗi khi gửi yêu cầu lấy danh sách người dùng:', error);
        alert('Đã xảy ra lỗi khi kiểm tra đăng nhập');
      });
  };

  return (
    <View style={{ flex: 1, gap: 20 }}>
      <Image source={require('../assets/logo_ATD.png')} style={{ width: 310, height: 100, alignSelf: 'center' }} />
      <Text style={{ fontSize: 25, fontFamily: 'roboto', alignSelf: 'center' }}> Cửa hàng  </Text>
      <View style={{ gap: 10, alignItems: 'center' }}>
        <Text style={{ fontSize: 28, fontWeight: 600, color: 'black' }}>
          LOGIN
        </Text>
        <Text style={{ fontSize: 18, fontFamily: 'roboto' }}>
          Please enter your e-mail and password:
        </Text>
        <TextInput
          style={{ width: 300, height: 50, margin: 12, borderWidth: 1, padding: 10, backgroundColor: 'white', borderRadius: 10 }}
          placeholder="email"
          value={email}
          onChangeText={tk}
        />
        <TextInput
          style={{ width: 300, height: 50, margin: 12, borderWidth: 1, padding: 10, backgroundColor: 'white', borderRadius: 10 }}
          placeholder="password"
          value={password}
          onChangeText={mk}
          secureTextEntry={true}
        />
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
          <Pressable
            style={{ backgroundColor: 'cyan', width: 200, height: 50, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}
            onPress={handleLogin}>
            <Text style={{ fontWeight: 700, fontSize: 20 }}>Continue</Text>
          </Pressable>
        </TouchableOpacity>
        <Text>-----------------or-----------------</Text>
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
          <Pressable
            style={{ backgroundColor: 'cyan', width: 200, height: 50, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}
            onPress={() => navigation.navigate('Creat')}>
            <Text style={{ fontWeight: 700, fontSize: 20 }}>Create Account</Text>
          </Pressable>
        </TouchableOpacity>
      </View>
    </View>
  );
}
