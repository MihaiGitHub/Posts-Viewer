import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import axios from 'axios';

export default class PostsViewer extends Component {
  state = {
    posts: [],
    index: 1
  }

  componentDidMount(){
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
          .then(response => {

              this.setState({
                posts: response.data
              })
          })
          .catch(function (error) {
              console.log(error);
          });
  }

  render() {
    return (
      <Text>Posts Viewer</Text>
    );
  }
}