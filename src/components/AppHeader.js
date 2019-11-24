import React, { Component } from 'react';

import { Header, Item, Input, Icon } from 'native-base';

class AppHeader extends Component {

    render() {   
        return (
            <Header transparent searchBar rounded >
            <Item>
                <Icon name="ios-search" style={{ color: "#AEAEAE" }} />
                <Input placeholder="Cari nama" onChangeText={this.props.onSearch.bind(this)} />
            </Item>
            </Header>
        )
    }
}

export default AppHeader;
