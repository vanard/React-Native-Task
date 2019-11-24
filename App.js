import React, { Component } from 'react';
import {
  StatusBar, Alert, ActivityIndicator, FlatList
} from 'react-native';

import { Container, Text } from 'native-base';
import { getData } from './src/service/dataFlip';
import AppHeader from './src/components/AppHeader';
import ListItem from './src/components/ListItem';
import { DateTime } from 'luxon'


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      data: null,
      query: "",
      fullData: [],
      fullName: []
    };
  };

  handleSearch = (text) => {
    const formatQuery = text.trim().toLowerCase();
    this.setState({ query: formatQuery });
    
    const newData = this.state.fullName.filter(l => {

      return l.toLowerCase().match( formatQuery );
      // console.log(l.toLowerCase());
    });

    this.setState.data = newData
  };

  

  componentDidMount() {
    getData().then(data => {
      this.setState({
        data: data,
        fullData: data,
        isLoading: false,
      });
    }, error => {
      Alert.alert('Error', 'Something went wrong!');
    })
  }

  render() {
    function currencyFormat(num) {
      return 'Rp' + num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    }

    const formatDate = (dateObject, dateFormat) =>
      DateTime.fromSQL(dateObject)
        .toFormat(dateFormat)


    let view = this.state.isLoading ? (
      <Container style={{alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator animating={this.state.isLoading} size="large" />
        <Text style={{marginTop: 10,}}>Please Wait!!!</Text>
      </Container>
    ) : (

      <FlatList style={{ paddingHorizontal: 12 }}
          keyExtractor={(item, index) => index.toString()}
          data={Object.keys(this.state.data)} 
          renderItem={itemData => 
            <ListItem
              id={itemData.item}
              sender={this.state.data[itemData.item].sender_bank}
              receive={this.state.data[itemData.item].beneficiary_bank}
              title={this.state.data[itemData.item].beneficiary_name}
              date={formatDate(this.state.data[itemData.item].completed_at, "d MMMM yyyy")}
              amount={currencyFormat(this.state.data[itemData.item].amount)}
              buttonStats={this.state.data[itemData.item].status}
            />
          } />
          
    )
    
    return (
      <Container style={{ backgroundColor: '#EEEDF3' }}>
        <StatusBar backgroundColor="#fc6542" barStyle="light-content" />
        <AppHeader onSearch={this.handleSearch} />

        {view}
        {Object.keys(this.state.fullData).map(item => {
        this.state.fullName = [...this.state.fullName, this.state.fullData[item].beneficiary_name]
      })}
      </Container>
    );
  }
  
};

const styles = {
  
};

export default App;
