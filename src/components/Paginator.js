import React from 'react';
import {
  View, 
  FlatList, 
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import { type } from './Main.styles';
import { styles } from './Paginator.styles';

export default function Paginator(props) {

  const { page, setPage, totalPages } = props;

  return(
    <>
      <View style={styles.paginator}>

        {/* Left press */}
        <TouchableOpacity 
          style={[
            styles.jumpButtom,
            page <= 1 ? styles.jumpButtomDisabled : null
          ]}
          activeOpacity={0.3}
          onPress={() => {
            page > 0 ? setPage(page-1) : null;
          }}
        >
          <Image style={[styles.jumpButtomImage, styles.jumpButtomImageLeft]} source={require('../assets/arrow_right.png')} />
        </TouchableOpacity>

        {/* Paging buttons */}
        <FlatList style={styles.pageButtonList}
          data={totalPages}
          horizontal={true}
          keyExtractor={(item, index) => `${index}`}
          renderItem={({item, index}) => {
            return(
              <TouchableOpacity 
                style={[ 
                  styles.pageButton, 
                  index === page ? styles.pageButtonSelected : null
                ]}
                activeOpacity={0.3}
                onPress={() => {
                  setPage(index);
                }}
              >
                <Text 
                  style={[
                    type.pageButtonText,
                    index === page ? type.pageButtonTextSelected : null
                  ]}
                >
                  {`${index + 1}`}
                </Text>
              </TouchableOpacity>
            );
          }}
        />

        {/* Right press */}
        <TouchableOpacity 
          style={[
            styles.jumpButtom,
            page >= totalPages.length ? styles.jumpButtomDisabled : null
          ]}
          activeOpacity={0.3}
          onPress={() => {
            page < totalPages.length ? setPage(page+1) : null;
          }}
        >
          <Image style={[styles.jumpButtomImage]} source={require('../assets/arrow_right.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.footer} />
    </>
  );
}