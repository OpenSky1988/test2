import React, {Component} from 'react';

class AdForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.id,
            phone: '',
            text: '',
            title: ''
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

        if (this.props.ad) {
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
                />
                <textarea
                    onChange={this.onChange}
                    className="forms text"
                    name="text"
                    placeholder="Текст объявления"
                />
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
            </form>
        );
    }
}

export default AdForm;