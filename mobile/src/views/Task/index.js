import React, { useState } from 'react'
import {
    View,
    ScrollView,
    Image,
    Text,
    TextInput,
    KeyboardAvoidingView,
    TouchableOpacity,
    Switch
} from 'react-native'

import styles from '../Task/style'

// COMPONENTES 
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import typeIcons from '../../utils/typeIcons'
import DateTimeInput from '../../components/DateTimeInput'

export default function Task({ navigation }){
    const [done, setDone] = useState(false)
    const [type, setType] = useState()
    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [date, setDate] = useState()
    const [hour, setHour] = useState()
    const [macaddress, setMacaddress] = useState('11:11:11:11:11:11')


    return(
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <Header showBack={true} navigation={navigation}/>
            <ScrollView style={{width: '100%'}}>

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginVertical: 10}}>
                {
                    typeIcons.map((icon, index) => (
                        icon != null &&
                        <TouchableOpacity onPress={() => setType(index)}>
                            <Image source={icon} style={[styles.imageIcon, type && type != index && styles.typeIconInative]}/>
                        </TouchableOpacity>

                    ))
                }
                </ScrollView>

                <Text style={styles.label}>Título</Text>
                <TextInput style={styles.input} 
                    maxLength={30} 
                    placeholder='Lembre-me de fazer...'
                    onChangeText={(text) => setTitle(text)}
                    value={title}
                />
              
                <Text style={styles.label}>Detalhes</Text>
                <TextInput style={styles.inputArea} 
                    maxLength={200}
                    multiline={true} 
                    placeholder='Detalhes da atividade que eu tenho que lembrar...'
                    onChangeText={(text) => setDescription(text)}
                    value={description}
                />

                <DateTimeInput type={'date'} save={setDate} />
                <DateTimeInput type={'hour'} save={setHour} />

                <View style={styles.inLine}>
                    <View style={styles.inputInline}>
                        <Switch onValueChange={() => setDone(!done)} value={done} thumbColor={done?'#00761B' : '#DD6F20'}/>
                        <Text style={styles.switchLabel}>Concluído</Text>
                    </View>
                    <TouchableOpacity>
                        <Text style={styles.removeLabel}>EXCLUÍR</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
            <Footer icon={'save'}/>
        </KeyboardAvoidingView>
    )
}