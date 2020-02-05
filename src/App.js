import React, {Component} from 'react';
import shortid from 'shortid';
import { connect } from 'react-redux';

import AdsList from './components/AdsList';
import AdForm from './components/AdForm';

import { addAd, updateAd, removeAd } from './actions/adsActions';
import getUsers from './actions/usersActions';

class App extends Component {
  constructor(props) {
    super(props);

    this.getUsers();
    this.state = {
      showNewAdForm: false
    }
  }

  getUsers = () => {
    this.props.getUsers();
  }

  createAd = (phone, text, title) => {
    const newAd = {
      date: Date.now(),
      id: shortid.generate(),
      phone,
      text,
      title
    };

    this.props.addAd(newAd);
  }

  editAd = updatedAd => {
    this.props.updateAd(updatedAd);
  };

  deleteAd = adId => {
    this.props.removeAd(adId);
  };

  showForm = () => {
    this.setState({showNewAdForm: true});
  }

  hideForm = () => {
    this.setState({showNewAdForm: false});
  }

  render () {
    const isAuthorized = this.props.users.status === 'received';
    return (
      <div className="App">
        {
          this.props.users.status === 'waiting' ?
            <h4>Загрузка пользовательских данных...</h4> :
            isAuthorized && <button onClick={this.showForm}>Добавить новое</button>
        }
        {this.state.showNewAdForm && <AdForm hideForm={this.hideForm} adAction={this.createAd}/>}
        <AdsList
          ads={this.props.ads}
          editAd={this.editAd}
          deleteAd={this.deleteAd}
          isAuthorized={isAuthorized}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ads: state.ads,
  users: state.users
});

export default connect(mapStateToProps, {
  addAd,
  updateAd,
  removeAd,
  getUsers
})(App);
