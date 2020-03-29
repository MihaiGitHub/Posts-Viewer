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

  handlePrevious = () => {

    let index = this.state.index === 0 ? this.state.posts.length-1 : this.state.index-1;

    this.setState({
      index
    })
  }

  handleNext = () => {

      let index = this.state.index === this.state.posts.length-1 ? 0 : this.state.index+1;

      this.setState({
        index
      })
  }

  render() {
    if(this.state.posts.length < 1){
      return <Text>Loading...</Text>;
    }

    return (
      <Container>
      <Header />
      <Content>
        <Card>
        <CardItem>
            <Left>
              <Thumbnail source={{uri: 'Image URL'}} />
              <Body>
                <Text>{this.state.posts[this.state.index].title}</Text>
                <Text note>{this.state.posts[this.state.index].id}</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Text>{this.state.posts[this.state.index].body}</Text>
          </CardItem>
          <CardItem>
            <Left>
              <Button 
                onPress={this.handlePrevious}
                primary>
                  <Text> Previous </Text>
              </Button>
            </Left>
            <Body>
              
            </Body>
            <Right>
            <Button 
                onPress={this.handleNext}
                primary>
                  <Text> Next </Text>
              </Button>
            </Right>
          </CardItem>
        </Card>
      </Content>
    </Container>
    );
  }
}