import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ArthaContinueButton from '../../fields/ArthaContinueButton';
import ArthaClearButton from '../../fields/ArthaClearButton';
import logo from '../../Login/public/logo.svg';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function BasicModal ( props ) {
    const [ open, setOpen ] = React.useState( props.isOpen );
    const handleOpen = () => setOpen( true );
    const handleClose = () => setOpen( false );

    return (

        <Modal
            open={props.isOpen}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <div className='row'>
                    <div className='col-md-12 mx-auto'>
                        <img className="mainLogo mx-auto" alt="" src={logo} />
                    </div>
                    <div className='col-md-12'>
                        <h4>Oops! we are yet to start services in your area</h4>
                    </div>
                    <div className='col-md-12'>
                        <h6>Be assured we will keep you posted when we expand to your location</h6>
                    </div>
                    <div className='col-md-6'>
                        <ArthaContinueButton
                            variant="contained"
                        >
                            Continue
                        </ArthaContinueButton>
                    </div>
                    <div className='col-md-6'>
                        <ArthaClearButton
                            variant="contained"
                        >
                            Clear
                        </ArthaClearButton>
                    </div>
                </div>
            </Box>
        </Modal>
    );
}
