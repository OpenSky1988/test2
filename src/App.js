import React, {Component} from 'react';
import shortid from 'shortid';

import AdsList from './components/AdsList';
import AdForm from './components/AdForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.populateLocalStorage();

    this.state = {
      showNewAdForm: false,
      ads: []
    }
  }

  ads = [
    {
      date: 1580817591901,
      id: 'r8j4h84g',
      phone: '+7 (987) 654-3210',
      text: 'Кот большой и вредный, но очень хороший!',
      title: 'Продам кота'
    },
    {
      date: 1580817634096,
      id: 'bv8f4kl',
      phone: '+7 (987) 654-3210',
      text: 'Кот большой и вредный, но очень хороший!',
      title: 'Продам кота 1'
    },
    {
      date: 1580817656313,
      id: '9fjew5m3',
      phone: '+7 (987) 654-3210',
      text: 'Кот большой и вредный, но очень хороший!',
      title: 'Продам кота 2'
    }
  ];

  componentDidMount() {
    const ads = [];

    for (let i=0; i<localStorage.length; i++) {
        let key = localStorage.key(i);
        ads.push(JSON.parse(localStorage.getItem(key)));
    }

    ads.sort((oldAd, newAd) => (newAd.data - oldAd.data));

    this.setState({ads});
  }

  // Только чтобы наполнить localStorage при первом входе
  populateLocalStorage = () => {
    this.ads.map(ad => localStorage.setItem(ad.id, JSON.stringify(ad)));
  }

  createAd = (phone, text, title) => {
    const newAd = {
      date: Date.now(),
      id: shortid.generate(),
      phone,
      text,
      title
    };

    localStorage.setItem(newAd.id, JSON.stringify(newAd));
    this.setState({
      ads: [
        newAd,
        ...this.state.ads,
      ]
    });
  }

  editAd = updatedAd => {
    const ads = this.state.ads.map(ad => {
      return ad.id === updatedAd.id ?
        updatedAd :
        ad;
    });
    
    localStorage.setItem(updatedAd.id, JSON.stringify(updatedAd));
    this.setState({ads});
  };

  deleteAd = adId => {
    localStorage.removeItem(adId);
    const newAds = this.state.ads.filter(ad => (ad.id !== adId));
    this.setState({ads: newAds});
  };

  showForm = () => {
    this.setState({showNewAdForm: true});
  }

  hideForm = () => {
    this.setState({showNewAdForm: false});
  }

  render () {
    return (
      <div className="App">
        <button onClick={this.showForm}>Добавить новое</button>
        {this.state.showNewAdForm && <AdForm hideForm={this.hideForm} adAction={this.createAd}/>}
        <AdsList ads={this.state.ads} editAd={this.editAd} deleteAd={this.deleteAd}/>
      </div>
    );
  }
}

export default App;
