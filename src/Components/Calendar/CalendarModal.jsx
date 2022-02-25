
import React, {useState} from 'react';

import Modal from 'react-modal';
import DateTimePicker from 'react-datetime-picker';
import moment from 'moment';

import './modal.css';
import Swal from 'sweetalert2';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};


Modal.setAppElement('#root');

const value = moment();

const value1 = value.clone().add(2, 'hours');



const CalendarModal = () => {
  
  const [modalIsOpen, setIsOpen] = React.useState(true);

  /* Date / Time for Events (Start - End) */

  const [startDate, setStartDate] = useState (value.toDate());

  const [endDate, setEndDate] = useState (value1.toDate());

  const [formValues, setFormValues] = useState ({
    start: value.toDate,
    end: value1.toDate,
    title: 'Event',
    notes: 'Event Description',
  });

  const { start, end, title, notes} = formValues;


  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const onChange = (e) => {
    setStartDate(e);
    setFormValues ({
      ...formValues,
      start: e
    })
  }

  const onEnd = (e) => {
    setEndDate(e);
    setFormValues ({
      ...formValues,
      end: e
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      title: 'Sweet!',
      text: 'Modal with a custom image.',
      imageUrl: 'https://unsplash.it/400/200',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
  })
  }

  const handleChange = ( {target}) => {
    setFormValues ({
      ...formValues,
      [target.name]: target.value
    })
  }






  return (
    <div>
    <button onClick={openModal}> Create Event</button>

      <Modal

        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h1> New Event </h1>
<hr />

<form className="container" onSubmit={ handleSubmit } >
    <div className="form-group">
        <label> Start Date / Hour </label>
        {/* <input className="form-control" placeholder="Start Date / Hour" /> */}

        <DateTimePicker
        onChange= {onChange}
        value= {startDate}
        className= "form-control"

      />

    </div>
    <div className="form-group">
        <label> End Date / Hour </label>
        {/* <input className="form-control" placeholder="End Date / Hour" /> */}

        <DateTimePicker
        onChange= {onEnd}
        value= {endDate}
        className= "form-control"
        minDate= { startDate }
      />

    </div>
    <hr />

    <div className="form-group">
        <label> Event: </label>
        <input
            type="text"
            className="form-control"
            placeholder="Event"
            name="title"
            autoComplete="off"
            onChange= {handleChange}
            value = { title }
        />
        <small id="emailHelp" className="form-text text-muted"> Description </small>
    </div>

    <div className="form-group">
        <textarea
            type="text"
            className="form-control"
            placeholder="Add Notes"
            rows="5"
            name="notes"
            onChange= {handleChange}
            value = { notes }

        ></textarea>

        <small id="emailHelp" className="form-text text-muted"> Add Info </small>
    </div>
    <button
        type="submit"
        className="btn btn-outline-primary btn-block w-100"
    >
        <i className="far fa-save"></i>
        <span> Save! </span>
    </button>

</form>

      </Modal>
  
  </div>

  );
}


export default CalendarModal;
