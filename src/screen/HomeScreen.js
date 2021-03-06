import React from 'react'
import {
    StyleSheet,
    View,
    Button,
    Text,
    FlatList,
    TouchableOpacity
} from 'react-native'

import colors from "../config/colors"

export default function HomeScreen(props){
    const {navigation} = props
    menu = [
        {title: "Text Component", nav: "text"},
        {title: "list Component", nav: "list"},
        {title: "Number Component", nav: "number"},
        {title: "Random Color", nav: "color"},
        {title: "Color Adjuster", nav: "colorAdd"},
        {title: "colorAdd-Reduce", nav: "colorReducer"},
        {title: "NumberCounter-Reducer", nav: "numberReducer"},
        {title: "Text input", nav: "input"},
        {title: "Style box", nav: "style"},
    ]

    return (
        <View style = {styles.container}>
            <FlatList
                keyExtractor = {(item) => item.id}
                data = {menu}
                showsVerticalScrollIndicator = {false}
                keyExtractor = {(item) => item}
                renderItem = {({item}) => {
                    return(
                        <TouchableOpacity onPress = {() => navigation.navigate(item.nav)}>
                            <View style = {styles.textContainer}>
                                <Text style = {styles.textStyle}>{item.title}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                }}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.secundario,
        flexDirection: "row",
        flex: 1,
        justifyContent:"center"
      },
  textContainer:{
      backgroundColor: colors.gris,
      marginVertical: 5,
      paddingVertical: 15,
      alignItems: "center",
      marginHorizontal: 30,
      borderRadius: 20
  },
  textStyle:{
      marginVertical: 10,
      color: colors.texto,
      fontSize: 20,
      fontWeight: "bold"
  }
})
