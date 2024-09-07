import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {useState} from "react"

function KitapForm({postKitap}) {
const [kitap, setKitap] = useState("")
const [yazar, setYazar] = useState("")
const [ISBN, setISBN] = useState("")
const [kapak, setKapak] = useState("")
const [tür, setTür] = useState("")
const [tarih, setTarih] = useState("")

const handleSubmit=(e)=>{
  e.preventDefault()
  postKitap({"title": kitap,
"author": yazar,
"ISBN": ISBN,
"image": kapak,
"genre": tür,
"publicationYear": tarih,
})
setKitap()
setYazar()
setISBN()
setKapak()
setTür()
setTarih()
}

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="kitapAdı">
        <Form.Label>Kitap Adı</Form.Label>
        <Form.Control type="text" placeholder="Kitap Adı" required onChange={(e) => setKitap(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="yazarAdı" >
        <Form.Label>Yazar Adı</Form.Label>
        <Form.Control type="text" placeholder="Yazar Adı" required onChange={(e) => setYazar(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="ISBN" >
        <Form.Label>ISBN</Form.Label>
        <Form.Control type="text" placeholder="ISBN" required onChange={(e) => setISBN(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="kapakResmi" >
        <Form.Label>Kapak Resmi</Form.Label>
        <Form.Control type="text" placeholder="Kapak Resmi" required onChange={(e) => setKapak(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="tür" >
        <Form.Label>Tür</Form.Label>
        <Form.Control type="text" placeholder="Tür" required onChange={(e) => setTür(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="yayınlanmaTarihi" >
        <Form.Label>Yayınlanma Tarihi</Form.Label>
        <Form.Control type="text" placeholder="Yayınlanma Tarihi" required onChange={(e) => setTarih(e.target.value)}/>
      </Form.Group>
      <Button className="d-block mx-auto" variant="danger" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default KitapForm;
