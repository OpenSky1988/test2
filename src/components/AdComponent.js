import React, {Component} from 'react';
import AdForm from './AdForm';

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
                <button onClick={this.showAdEditForm}>Редактировать</button>
                <button onClick={this.deleteAd}>Удалить</button>
                {this.state.isAdEditFormShown && <AdForm
                    hideForm={this.hideAdEditForm}
                    adAction={this.props.editAd}
                    ad={{
                        data: this.props.data,
                        id: this.props.id
                    }}/>}
            </article>
        );
}
}

export default Ad;