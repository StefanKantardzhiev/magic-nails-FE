import React from 'react'
import './Admin-Gallery.css'
import { IonIcon } from '@ionic/react' // Import the IonIcon component
import { PencilOutline, TrashOutline } from 'react-ionicons'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import 'react-photo-view/dist/react-photo-view.css'
const env = require('../../../../.env.json')

const AdminAdminGallery = () => {
  const [images, setImages] = React.useState([])

  async function deleteImage(e: any, id: string) {
    e.preventDefault()
    await fetch('http://localhost:3001/files/' + id, {
      method: 'DELETE',
    }).then((res) => res.json())
    // Refresh the images after deletion
    fetch('http://localhost:3001/files')
      .then((res) => res.json())
      .then((data) => setImages(data))
  }

  React.useEffect(() => {
    fetch('http://localhost:3001/files')
      .then((res) => res.json())
      .then((data) => setImages(data))
  }, [setImages])

  return (
    <div className="Admin-Gallery">
      <section>
        <div className="grid-container">
          <div className="grid-item">
            <h2>Image Name</h2>
            {images.map((image: any) => {
              return (
                <div className="grid-item" key={image.id}>
                  <p>${image.filename}</p>
                </div>
              )
            })}
          </div>
          <div className="grid-item">
            <h2>Image Link</h2>
            {images.map((image: any) => {
              return (
                <div className="grid-item" key={image.id}>
                  <p>{env.REST_API.url + '/files/' + image._id}</p>
                </div>
              )
            })}
          </div>
          <div className="grid-item">
            <h2>Preview</h2>
            {images.map((image: any) => {
              return (
                <div className="grid-item" key={image.id}>
                  <PhotoProvider>
                    <PhotoView src={env.REST_API.url + '/files/' + image._id}>
                      <img
                        src={env.REST_API.url + '/files/' + image._id}
                        alt={image.filename}
                      />
                    </PhotoView>
                  </PhotoProvider>
                </div>
              )
            })}
          </div>
          <div className="grid-item">
            <h2>Update / Remove</h2>
            {images.map((image: any) => {
              return (
                <div className="grid-item" key={image._id + '1'}>
                  <p id="admin-icons">
                    <PencilOutline
                      color={'#00000'}
                      title={'Edit'}
                      height="30px"
                      width="30px"
                    />
                    <TrashOutline
                      color={'#00000'}
                      title={'Remove'}
                      onClick={(e: Event) => deleteImage(e, image._id)}
                      height="30px"
                      width="30px"
                    />
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
export default AdminAdminGallery
