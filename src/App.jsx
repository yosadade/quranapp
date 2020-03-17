import React, { Component } from 'react';
import './App.css';
import Header from './component/Header/index';
import Content from './component/Content/index';
import Searchbar from './component/Searchbar/index';

import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSeluruhSurah: [],
      searchValue: '',
      newData: null,
      judulSurah: '',
      isiSurah: null,
    }
  }

  componentDidMount() {
    this.getDataSeluruhSurah()
  }

  getDataSeluruhSurah = () => {
    axios.get(`https://api.banghasan.com/quran/format/json/surat`)
      .then(result => {
        // console.log(result, this.getDataSeluruhSurah)
        this.setState({
          dataSeluruhSurah: result.data.hasil
        }, () => {
          // console.log(this.state.dataSeluruhSurah, 'new dataseluruhsurah')
        })
      }).catch(err => console.log(err, 'fetch API failed'))
  }

  onHandleInput = (e) => {
    console.log('sedang mengetik ...', e.target.value)
    this.setState({
      searchValue: e.target.value,
      isiSurah: null
    }, () => {
      console.log(this.state.searchValue, 'searhValue')
      // jika dataSeluruhSuah ada isinya
      if (this.state.dataSeluruhSurah) {
        const searchSurah = this.state.dataSeluruhSurah.filter((item) => {
          return (
            item.nama.toLowerCase().indexOf(this.state.searchValue.toLowerCase()) > -1
          )
        })
        this.setState({
          newData: searchSurah,
        })
      }
    })
  }

  bacaSurah = (nomor, namaSurah) => {
    axios.get(`https://api.banghasan.com/quran/format/json/surat/${nomor}/ayat/1-10`)
    .then(res => {
      // console.log(res.data.ayat.data.ar)
      this.setState({
        searchValue: '',
        isiSurah : res.data.ayat.data.ar,
        judulSurah: namaSurah
      }, () => {
        console.log(this.state.judulSurah)
        console.log(this.state.isiSurah)
      })
    })
  }

  backHome = () => {
    // console.log('backhome')
    this.setState({
      isiSurah : null,
      newData: null
    })
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Searchbar
          onHandleInput={this.onHandleInput}
          searchValue={this.state.searchValue}
        />
        <Content
          dataSeluruhSurah={this.state.dataSeluruhSurah}
          dataSeluruh={this.state.newData}
          isiSurah={this.state.isiSurah}
          bacaSurah={this.bacaSurah} 
          backHome={this.backHome}
          namaSurah={this.state.judulSurah}
        />
      </div>
    )
  }
}

export default App;
