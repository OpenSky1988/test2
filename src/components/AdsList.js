import React, {Component} from 'react';
import Ad from './AdComponent';

class AdsList extends Component {
    renderAds = () => {
        const ads = [];

        for (let i=0; i<localStorage.length; i++) {
            let key = localStorage.key(i);
            ads.push(JSON.parse(localStorage.getItem(key)));
        }
        
        return ads.map(ad => (
            <Ad
                id={ad.id}
                title={ad.title}
                text={ad.text}
                phone={ad.phone}
                key={ad.id}
                editAd={this.props.editAd}
            />
        ));
    };
    
    render() {
        return (
            <>
                {this.renderAds()}
            </>
        );
    }
}

export default AdsList;