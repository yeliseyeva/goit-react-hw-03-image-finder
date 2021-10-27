import React, { Component } from "react";
import Searchbar from "./Components/Searchbar/Searchbar";
import ImageGallery from "./Components/ImageGallery/ImageGallery";
import Loader from "./Components/Loader/Loader";
import Button from "./Components/Button/Button";
import { getPictures } from "./services/apiService";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  state = {
    query: "",
    images: [],
    page: 1,
    loading: false,
    error: null
  };

  componentDidUpdate(prevProps, prevState) {

    if (prevState.query !== this.state.query) {
      this.getPictures();
    }

    if (this.state.page !== 2 && prevState.page !== this.state.page) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
      
    }
  }

  handleSubmit = (query) => {
    this.setState({
      query: query,
      page: 1,
      images: [],
      error: null
    });
  };

  getPictures = () => {

    this.setState({loading: true});

    getPictures(this.state.query, this.state.page)
    .then(res => {
      this.setState((prevState) => ({
        images: [...prevState.images, ...res],
        page: prevState.page + 1
      }))
    })
    .catch(error => this.setState({error: true}))
    .finally(() => this.setState({loading: false}))

  }

  render() {

    const {handleSubmit, getPictures} = this;
    const {images, loading, error, query} = this.state

    return (
      <div className="App">

        <Searchbar handleSubmit={handleSubmit}/>

        {error && toast.error(`Не нашли картинку ${query}:(`)}

        <ImageGallery images={images}/>

        {images.length > 0 && <Button loadMore={getPictures}/>}

        {loading && <Loader />}

        <ToastContainer autoClose={3000}/>

      </div>
    );
  }
}

export default App;