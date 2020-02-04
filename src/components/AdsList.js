import React, {Component} from 'react';
import Ad from './AdComponent';

class AdsList extends Component {
    renderAds = () => {
        return this.props.ads.map(ad => (
            <Ad
                date={ad.date}
                id={ad.id}
                title={ad.title}
                text={ad.text}
                phone={ad.phone}
                key={ad.id}
                editAd={this.props.editAd}
                deleteAd={this.props.deleteAd}
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