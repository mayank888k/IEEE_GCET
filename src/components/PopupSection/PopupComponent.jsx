import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './popupComponent.css'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import bell from './bell.png'

export default () => (
    <Popup trigger={<button className="popup_btn"> <img src={bell} style = {{height:"25px", width:"35px"}} />  </button>} position="top left"
    modal
    >
    
    {close => (
        <div className="mdl">
            <button className="close" onClick={close}>
            &times;
            </button>

            <div className="header_popup"> Important Message </div>
            
            <div className="content_popup">
                <p class="has-text-align-justify">
                1. ICAC3N conference organizers have zero tolerance against plagiarism and paper formatting as per IEEE template. If author found violating registration guidelines and instructions provided from time to time at any stage during publication the registration of paper will be cancelled.
                <br /> <br />
                2. Transfer of e-copyright and presenting paper in conference is mandatory, without this paper will not be published on IEEE explore.
                <br /> <br />
                3. Corresponding author (as per CMT) keep checking their e-mail regularly (including spam) in this regard and for supplying any other desired information on time.
                <br /> <br />
                4. Registration fee once paid is non refundable.
                </p>
            </div>
      </div>
    )}
  </Popup>
);