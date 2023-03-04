import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
export default () => {
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    import('../../assets/acknowledgement.json').then(d => {
      setData(d.default);
    });
  }, []);

  const ItemSeparatorComponent = useCallback(
    () => <View style={{borderBottomWidth: 1}} />,
    [],
  );

  return (
    <FlatList
      data={data}
      ItemSeparatorComponent={ItemSeparatorComponent}
      renderItem={({item: ack}) => (
        <View key={ack.libraryName}>
          <Text style={styles.name}>{ack.libraryName}</Text>
          <Text>Version: {ack.version}</Text>
          {ack.homepage && <Text>Homepage: {ack.homepage}</Text>}
          {ack._licenseContent && (
            <Text numberOfLines={10}>
              License content: {ack._licenseContent}
            </Text>
          )}
        </View>
      )}
      keyExtractor={item => item.libraryName}
    />
  );
};

const styles = StyleSheet.create({name: {textAlign: 'center'}});
