import Modal from '../components/Modal';
import Button from '../components/Button';

function ModalPage() {

  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  }

  return (
    <div>
      <button onClick={ handleClick} primary>Open Modal</button>
      <Modal />
    </div>
  )
}

export default Modal;