import * as React from 'react';
import { Text, View, Button, Alert } from 'react-native';


const orders = (val)=>{
  Alert.alert('OOPS', 'No '+val+ ' found', [
        {text: 'Back'}
      ]);
}


export default function Feed() {

  return (
    <View style={{flex:1, paddingTop:40}}>
      <View style={{height:80, justifyContent:'center', alignItems:'center', backgroundColor: 'coral' }}>
        <Text style={{fontSize:25, fontWeight:'bold', color:'blue'}}>Vaidya Healthcare Pvt. Ltd.</Text>
      </View>
      <View style ={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginTop:10,paddingHorizontal:10}}>
        <Button title='Lab Order' 
         onPress={() => orders('Lab Orders')}
        /> 
        <Button title='Reports' onPress={()=>orders('reports')}/> 
        <Button title='Reimbursements' onPress={()=>orders('reimbursements')}/> 
      </View>
      <View style={{paddingHorizontal:20}}>
          <Text style={{fontSize:25, fontWeight:'bold', color:'blue'}}>About Us</Text>
          <Text>Vaidya Enterprise Limited is an Indian multinational healthcare group headquartered in Mumbai. Apart from the eponymous hospital chain, the company also operates pharmacies, primary care and diagnostic centres, and telehealth clinics through its subsidiaries</Text>
          <Text style={{fontSize:25, fontWeight:'bold', color:'blue'}}>Contacts</Text>
          <Text>+91 11111111111</Text>
          <Text>+91 11111111111</Text>
          <Text>+91 11111111111</Text>
          <Text>+91 11111111111</Text>
          <Text>iitb.hospital@iitb.ac.in</Text>
          <Text style={{fontSize:25, fontWeight:'bold', color:'blue'}}>About Us</Text>
          <Text> Vaidya Enterprise Limited is an Indian multinational healthcare group headquartered in Mumbai. Apart from the eponymous hospital chain, the company also operates pharmacies, primary care and diagnostic centres, and telehealth clinics through its subsidiaries</Text>
      </View>

    </View>
  );
}