import React, {Component} from 'react';

class Ad extends Component  {
    render() {
        const {phone, text, title} = this.props;
        return (
            <div className="ad">
                <h3>{title}</h3>
                <p>{text}</p>
                <p>Тел: {phone}</p>
                <button onClick={this.props.editAd}>Редактировать</button>
            </div>
        );
}
}

export default Ad;