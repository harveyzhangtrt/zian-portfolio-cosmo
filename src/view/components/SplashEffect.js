import React, { Component } from 'react';
import Script from 'react-load-script'

class SplashEffect extends Component {

    handleScriptCreate() {
        this.setState({ scriptLoaded: false })
       }
       
       handleScriptError() {
        this.setState({ scriptError: true })
       }
       
       handleScriptLoad() {
        this.setState({ scriptLoaded: true })
       }

render() {
 return (
   <Script
     url="./demo.js"
     onCreate={this.handleScriptCreate.bind(this)}
     onError={this.handleScriptError.bind(this)}
     onLoad={this.handleScriptLoad.bind(this)}
   />
 )
}

}

export default SplashEffect;