import React, {Component} from 'react';
import Ad from './AdComponent';

class AdsList extends Component {
    renderAds = () => this.props.ads.map(ad => (
        <Ad
            date={ad.date}
            id={ad.id}
            title={ad.title}
            text={ad.text}
            phone={ad.phone}
            key={ad.id}
            editAd={this.props.editAd}
            deleteAd={this.props.deleteAd}
            isAuthorized={this.props.isAuthorized}
        />
    ));
    
    render() {
        return (
            <>
                {this.renderAds()}
            </>
        );
    }
}

export default AdsList;