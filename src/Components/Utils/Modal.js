import Classes from './Modal.module.css';

const Modal = ({ id, title, content, actionText, modalAction }) => {
  const handleModalAction = (action) => {
    modalAction(id, action);
  };

  return (
    <div className={`modal absolute top-0 right-0 bottom-0 left-0 z-10 ${Classes['modal']}`}>
      <div className="modal-overlay absolute top-0 right-0 bottom-0 left-0 bg-black bg-opacity-50 "></div>
      <div className="modal-content fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg p-8 w-[400px] bg-white">
        <h2 className="text-2xl font-medium">{title}</h2>
        <p className="mt-5">{content}</p>
        <div className="modal-controls mt-5">
          <button
            className={`button button-normal rounded-lg mr-3.5 py-3.5 px-6 text-base text-medium leading-none text-white uppercase transition-all ${Classes['modal-controls-normal']}`}
            onClick={() => handleModalAction('cancel')}
          >
            No, Cancel
          </button>
          <button
            className={`button button-normal rounded-lg py-3.5 px-6 text-base text-medium leading-none text-white uppercase transition-all ${Classes['modal-controls-danger']}`}
            onClick={() => handleModalAction('delete')}
          >
            Yes, {actionText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
