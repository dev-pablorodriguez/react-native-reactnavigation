import React from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'

const Inicio = ({ navigation }) => {

    const info = {
        clientId: 20,
        totalPagar: 500
    }

    const irNosotros = () => {
        navigation.navigate('Nosotros', info);
    }

    return (
        <View style={ styles.contenedor }>
            <Text>Inicio</Text>
            <Button 
                title='Ir a Nosotros' 
                onPress={ irNosotros }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Inicio