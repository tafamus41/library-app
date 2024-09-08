import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const EditKitap = () => {
  return (
    
      
      <div
        className="modal show"
        id='editModal'
        style={{ display: "block", position: "initial" }}
      >
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Modal body text goes here.</p>
          </Modal.Body>

          <Modal.Footer>
            
            <Button variant="primary">Save changes</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    
  );
};

export default EditKitap;
