import { Col } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { useState } from "react";
import EditKitap from "./EditKitap";

const KitapList = ({books,deleteKitap,putKitap}) => {
    // console.log(books);
    const[editItem,setEditItem]=useState("")
  return (
    <Col>
<table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">ISBN</th>
            <th scope="col">Kapak Resmi</th>
            <th scope="col">Kitap Adı</th>
            <th scope="col">Yazar Adı</th>
            <th scope="col">Tür</th>
            <th scope="col">Yayınlanma Yılı</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {books.map(({title,ISBN,image,genre,id,author,publicationYear }) => (
            <tr key={id}>
              <td>{ISBN}</td>
              <td><img src={image} alt={title} style={{ width: '100px', height:'100px'}}/></td>
              <td>{title}</td>
              <td>{author}</td>
              <td>{genre}</td>
              <td>{publicationYear}</td>
              <td className="text-center ">
                <AiFillDelete
                  type="button"
                  size={22}
                  className="text-danger cursor-pointer mx-3"
                  onClick={() => deleteKitap(id)}
                />
                <FaEdit
                  data-bs-toggle="modal"
                  data-bs-target="#editModal"
                  size={20}
                  type="button"
                  className="me-2 text-warning cursor-pointer"
                  onClick={() => setEditItem({title,ISBN,image,genre,id,author,publicationYear})}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <EditKitap editItem={editItem} setEditItem={setEditItem} putKitap={putKitap} />
    </Col>
  )
}

export default KitapList