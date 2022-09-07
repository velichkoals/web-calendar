import ReactDom from 'react-dom';
import { GrClose } from 'react-icons/gr';
import './AddEventModal.scss';
import AddEventForm from './AddEventForm/AddEventForm';

export const Modal = ({ open, onClose }) => {
	if (!open) return null;

	return ReactDom.createPortal(
		<>
			<div className='add-event__overlay' onClick={onClose} />
			<div className='add-event__modal'>
				<div className='modal__item_flex'>
					<div className='modal__text'>Add new idea item</div>
					<GrClose className='modal_close-btn' onClick={onClose} />
				</div>
				<AddEventForm closeModal={onClose} />
			</div>
		</>,
		document.getElementById('portal')
	);
};
