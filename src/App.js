import React, {Component} from 'react';
import shortid from 'shortid';

import AdsList from './components/AdsList';
import AdForm from './components/AdForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.populateLocalStorage();
  }

  ads = [
    {
      id: 'r8j4h84g',
      phone: '+7 (987) 654-3210',
      text: 'Кот большой и вредный, но очень хороший!',
      title: 'Продам кота'
    },
    {
      id: 'bv8f4kl',
      phone: '+7 (987) 654-3210',
      text: 'Кот большой и вредный, но очень хороший!',
      title: 'Продам кота 1'
    },
    {
      id: '9fjew5m3',
      phone: '+7 (987) 654-3210',
      text: 'Кот большой и вредный, но очень хороший!',
      title: 'Продам кота 2'
    }
  ];

  // Только чтобы наполнить localStorage при первом входе
  populateLocalStorage = () => {
    this.ads.map(ad => localStorage.setItem(ad.id, JSON.stringify(ad)));
  }

  createAd = (phone, text, title) => {
    const newAd = {
      id: shortid.generate(),
      phone,
      text,
      title
    };

    localStorage.setItem(newAd.id, JSON.stringify(newAd));
  }

  editAd = ad => localStorage.setItem(ad.id, JSON.stringify(ad));

  deleteAd = ad => localStorage.removeItem(ad.id);

  render () {
    return (
      <div className="App">
        <AdForm />
        <AdsList editAd={this.editAd}/>
      </div>
    );
  }
}

export default App;
