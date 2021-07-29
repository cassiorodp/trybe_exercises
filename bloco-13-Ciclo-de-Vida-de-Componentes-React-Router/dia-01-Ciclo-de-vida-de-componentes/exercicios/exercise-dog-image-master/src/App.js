import React from 'react';
import './App.css';
import Loading from './components/Loading';

class App extends React.Component {
  constructor() {
    super();

    this.fetchDogImame = this.fetchDogImame.bind(this);

    this.state = {
      loading: true,
      image: '',
    };
  }

  componentDidMount() {
    this.fetchDogImame();
  }

  async fetchDogImame() {
    this.setState(
      { loading: true }, // First param
      async () => {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const dataJson = await response.json();
        this.setState({
          loading: false,
          image: dataJson.message,
        });
      },
    );
  }

  dogBreed() {
    const { image } = this.state;
    const dogBreedName = image.split('/')[4];
    return dogBreedName;
  }

  render() {
    const { loading, image } = this.state;
    return (
      <div className="App">
        <h1>A dog image</h1>
        <div>{loading ? <Loading /> : <img src={ image } alt="A dog" />}</div>
        <h2>{!loading && this.dogBreed()}</h2>
        <button type="button" onClick={ this.fetchDogImame }>Next dog</button>
      </div>
    );
  }
}

export default App;
