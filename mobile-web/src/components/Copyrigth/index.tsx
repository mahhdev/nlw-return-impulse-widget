import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';

export function Copyrigth() {
    return (
        <View>
            <Text style={styles.text}>
                Feito com ♥ pela Rocketseat
            </Text>
        </View>
    );
}