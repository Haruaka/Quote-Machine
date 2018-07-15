import React from 'react';
import {
    Button,
    ImageBackground,
    Text,
    StatusBar,
    StyleSheet,
    View
  } from 'react-native'

const QuoteInfo = {
  quotes: ["The more you have to lose, the worse it hurts when you do.", "If you find yourself troubled by something mysterious or a problem that's hard to solve, there's a place you can go where you always find help. You just need to look for it", "There's no such thing as a limit on being the best. You can always go for more. That's what it means to be human. No... That's what it means to be me.", "Never forget the people you kill, because they will never forget you.", "Don't let yourself be blinded by fear or anger. Everything is only as it is." ],

  authors: ["Alphonse", "Baron", "Claire Stanfield", "Solf J. Kimblee","Nui"],

  backgroundImg: [require('./assets/winter.jpg'), require('./assets/wolf.jpg'), require('./assets/reflection.jpg'),require('./assets/forest.jpg'),require('./assets/galaxy.jpg'),require('./assets/metal.jpg'),require('./assets/star.jpg')],
}

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      quoteText: "Welcome to the Amazing Quote Machine. Click on the left button to get a quote. Click on the right button to change the background.",
      quoteAuthor: "- The App Creator",
      backgroundUrl: require('./assets/winter.jpg'),
    }
  }
  
  changeQuote = () => {
    const randomValue = Math.floor(Math.random()*Math.floor(5))
    const chosenQuote = QuoteInfo.quotes[randomValue];
    const chosenAuthor = QuoteInfo.authors[randomValue];

    this.setState({
      quoteText: chosenQuote,
      quoteAuthor: chosenAuthor,
    })
  }

  changeBackground = () => {
    const randomValue = Math.floor(Math.random()*Math.floor(6));
    const chosenImg = QuoteInfo.backgroundImg[randomValue];

    this.setState({
      backgroundUrl: chosenImg
    })
  }

  render() {
    return (
      <View style= {styles.container}>
        <StatusBar hidden={true}></StatusBar>
        <ImageBackground  style={styles.imgBackground}
                          resizeMode="cover"
                          source={this.state.backgroundUrl}>
          <View style={styles.overlay}>
            <View style={styles.innerBorder}>
              <Text style={styles.quoteBox}>{this.state.quoteText}</Text>
              <Text style={styles.authorBox}>{this.state.quoteAuthor}</Text>
              <View style={styles.btnSection}>
                <Button title="Next Quote" color="rgba(158, 158, 158, 0.5)" style={styles.changeBtn} onPress={this.changeQuote}></Button>
                <Button title="Background" color="rgba(158, 158, 158, 0.5)" onPress={this.changeBackground}></Button>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  overlay: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(160, 160, 160, 0.5)",
    justifyContent: "center",
    alignItems: "center"
  },

  innerBorder: {
    width: "95%",
    height: "97%",
    borderColor: "white",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  
  imgBackground: {
    flex: 1,
    width: "100%",
    height: "100%"
  },

  quoteBox: {
    color:"#F8F8FF",
    width: "80%",
    height: "15%",
    textAlign: "center",
    fontSize: 15,
    fontStyle: "italic",
  },

  authorBox: {
    marginBottom: 40,
    color:"#F8F8FF",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 15,
  },

  btnSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%"
  },
});
