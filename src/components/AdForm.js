import React, { Component } from 'react';
import { connect } from 'react-redux';

import './AdForm.css';

class AdForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.id,
            phone: '',
            text: '',
            title: '',
            error: ''
        }
    }

    onChange = (event) => {
        const { name, value } = event.target;
    
        this.setState({
            [name]: value
        });
    }
    
    onSubmit = (event) => {
        event.preventDefault();
        const {phone, text, title} = this.state;
        const isFormValid = this.validateForm();
        
        if (isFormValid) {
            if (this.props.ad) {
                console.log(this.props.ad)
                const ad = {
                    ...this.props.ad,
                    phone,
                    text,
                    title
                };
    
                this.props.adAction(ad);
            } else {
                this.props.adAction(phone, text, title);
            }
            
            this.props.hideForm();
        }
    }

    validateForm = () => {
        const {phone, text, title} = this.state;
        const phoneRegExp = /(\+7|8)[- _]*\(?[- _]*(\d{3}[- _]*\)?([- _]*\d){7}|\d\d[- _]*\d\d[- _]*\)?([- _]*\d){6})/g;

        if (title.length === 0 || title.length > 100) {
            this.setState({error: 'Введите заголовок длительностью е более 100 символов'});
            return false;
        } else if (phone.length === 0 || !phoneRegExp.test(phone)) {
            this.setState({error: 'Введите телефн в формате +7 999 888 7766'});
            return false;
        } else if (text.length > 300) {
            this.setState({error: 'Длительность текста не должна превышать 300 символов'});
            return false;
        }

        this.setState({error: ''});
        return true;
    }

    hideForm = () => {
        this.props.hideForm();
    }
    
    render() {    
        return (
            <form onSubmit={this.onSubmit}>
                <input
                    onChange={this.onChange}
                    className="forms title"
                    id="title"
                    name="title"
                    type="title"
                    placeholder="Заголовок"
                />
                <input
                    onChange={this.onChange}
                    className="forms phone"
                    id="phone"
                    name="phone"
                    type="phone"
                    placeholder="Телефон"
                    value={this.props.users.data[0].phone}
                />
                <textarea
                    onChange={this.onChange}
                    className="forms text"
                    name="text"
                    placeholder="Текст объявления"
                />
                <p>{this.state.error}</p>
                <div className="buttons">
                    <button
                        className="btn submit-btn"
                        id="submit-btn"
                        type="submit"
                        name="submit"
                    >
                        Отправить
                    </button>
                    <button onClick={this.hideForm}>
                        Отмена
                    </button>
                </div>
            </form>
        );
    }
}

const mapStateToProps = (state) => ({
    users: state.users
  });

export default connect(mapStateToProps, {})(AdForm);