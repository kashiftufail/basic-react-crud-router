import React, {Component} from 'react'


class App extends Component {
  state = {
    data: [],
  }

  // Code is invoked after the component is mounted/inserted into the DOM tree.
  componentDidMount() {
    const url =
      'https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0'

    fetch(url)
      .then((result) => result.json())
      .then((result) => {
        console.log(result.dataseries)
        this.setState({
          data: result.dataseries,
        })
      })
  }

  render() {
    const {data} = this.state
    const result= data.map((key,index) => {
      return <li key={index}>timepoint: {key["timepoint"]}</li>
    });

    
    return <ul>{result}</ul>

  }
}

export default App