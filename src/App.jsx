import React, { Component } from 'react';
import './App.css';
import Header from './component/Header/index';
import Content from './component/Content/index';

import axios from 'axios';

// function App() {
//   return (
//     <div className="App">
//       <Header />
//     </div>
//   );
// }

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      dataSeluruhSurah : []
    }
  }

  componentDidMount(){
    this.getDataSeluruhSurah()
  }

  getDataSeluruhSurah = () => {
    axios.get(`https://api.banghasan.com/quran/format/json/surat`)
    .then(result => {
      console.log(result, this.getDataSeluruhSurah)
      this.setState({
        dataSeluruhSurah : result.data.hasil
      }, ()=> {
        console.log(this.state.dataSeluruhSurah, 'new dataseluruhsurah')
      })
    }).catch(err => console.log(err, 'fetch API failed'))
  }

  render () {
    return (
      <div className="app">
        <Header />
        <Content 
          dataSeluruhSurah = {this.state.dataSeluruhSurah}
        />
      </div>
    )
  }
}

export default App;
