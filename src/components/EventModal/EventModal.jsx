import ReactDom from 'react-dom';
import EventForm from './EventForm/EventForm';
import { GrClose } from 'react-icons/gr';

import './EventModal.scss';

export const EventModal = ({ open, onClose, title, event }) => {
	if (!open) return null;

	return ReactDom.createPortal(
		<>
			<div className='event__overlay' onClick={onClose} />
			<div className='event__modal'>
				<div className='modal__item_flex'>
					<div className='modal__text'>{title}</div>
					<GrClose className='modal_close-btn' onClick={onClose} />
				</div>
				{event && <div className='modal__info'>{event.info}</div>}
				<EventForm closeModal={onClose} event={event} />
			</div>
		</>,
		document.getElementById('portal')
	);
};
