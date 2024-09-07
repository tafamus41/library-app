import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function KitapForm() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="kitapAdı">
        <Form.Label>Kitap Adı</Form.Label>
        <Form.Control type="text" placeholder="Kitap Adı" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="yazarAdı" >
        <Form.Label>Yazar Adı</Form.Label>
        <Form.Control type="text" placeholder="Yazar Adı" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="ISBN" >
        <Form.Label>ISBN</Form.Label>
        <Form.Control type="text" placeholder="ISBN" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="kapakResmi" >
        <Form.Label>Kapak Resmi</Form.Label>
        <Form.Control type="text" placeholder="Kapak Resmi" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="tür" >
        <Form.Label>Tür</Form.Label>
        <Form.Control type="text" placeholder="Tür" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="yayınlanmaTarihi" >
        <Form.Label>Yayınlanma Tarihi</Form.Label>
        <Form.Control type="text" placeholder="Yayınlanma Tarihi" required />
      </Form.Group>
      <Button className="d-block mx-auto" variant="danger" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default KitapForm;
