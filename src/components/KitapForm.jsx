import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function KitapForm() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Kitap Adı</Form.Label>
        <Form.Control type="text" placeholder="Kitap Adı" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Yazar Adı</Form.Label>
        <Form.Control type="text" placeholder="Yazar Adı" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>ISBN</Form.Label>
        <Form.Control type="TEXT" placeholder="ISBN" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Kapak Resmi</Form.Label>
        <Form.Control type="text" placeholder="Kapak Resmi" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Tür</Form.Label>
        <Form.Control type="text" placeholder="Tür" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Yayınlanma Tarihi</Form.Label>
        <Form.Control type="text" placeholder="Yayınlanma Tarihi" />
      </Form.Group>
      <Button className="d-block mx-auto" variant="danger" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default KitapForm;
