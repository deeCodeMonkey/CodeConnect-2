import React from 'react';
import Modal from 'react-modal';
import ProfileForm from './ProfileForm';

const OptionModal = (props) => {
    return(
        <Modal
            isOpen={!props.selectModal}
            ariaHideApp={false}
            contentLabel="Edit Profile Modal">
            <ProfileForm onProfileSubmit={props.onProfileSubmit} />
        </Modal>
    );
};

export default OptionModal;