import React, {Component} from 'react';
import AdForm from './AdForm';

import './AdComponent.css';

class Ad extends Component  {
    constructor(props) {
        super(props);

        this.state = {
            isAdEditFormShown: false
        }
    }

    showAdEditForm = () => this.setState({isAdEditFormShown: true});

    hideAdEditForm = () => this.setState({isAdEditFormShown: false});

    deleteAd = () => this.props.deleteAd(this.props.id);

    render() {
        const {phone, text, title} = this.props;
        return (
            <article className="ad">
                <h3>{title}</h3>
                <p>{text}</p>
                <p>Тел: {phone}</p>
                {
                    this.props.isAuthorized &&
                    <div>
                        <button onClick={this.showAdEditForm}>Редактировать</button>
                        <button onClick={this.deleteAd}>Удалить</button>
                    </div>
                }
                {this.state.isAdEditFormShown && <AdForm
                    hideForm={this.hideAdEditForm}
                    adAction={this.props.editAd}
                    ad={{
                        date: this.props.date,
                        id: this.props.id
                    }}/>}
            </article>
        );
}
}

export default Ad;