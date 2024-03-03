import React, { FC, useEffect } from 'react'
import './Admin.css'
import Header from '../Header/Header'
import AdminGallery from './Admin-Gallery/Admin/Admin-Gallery'

const Admin = () => {
  const [gallery, setGallery] = React.useState([])
  const [isGallery, setIsGallery] = React.useState(false)
  const [isServices, setIsServices] = React.useState(false)
  const [isOrders, setIsOrders] = React.useState(false)

  useEffect(() => {
    fetch('http://localhost:3001/files')
      .then((res) => res.json())
      .then((data) => setGallery(data))
  },[])

  return (
    <div className="Admin">
      <section className='main-title'>
        <h1>Admin Panel</h1>
      </section>
      <section className="admin-options">
        <ul>
        <li onClick={(e) => { setIsGallery(true); setIsServices(false); setIsOrders(false); }}>Manage Gallery</li>
          <li onClick={(e) => { setIsGallery(false); setIsServices(true); setIsOrders(false); }}>Manage Services</li>
          <li onClick={(e) => { setIsGallery(false); setIsServices(false); setIsOrders(true); }}>Manage Orders</li>
        </ul>
      </section>
      <section>
      {isGallery && <AdminGallery />}
      {isServices && (
        <section>
          <div className="grid-container">
            <div className="grid-item">
              <h2>Manage Gallery</h2>
              {gallery.map((image: any) => {
                return (
                  <div className="grid-item" key={image.id}>
                    <p>${image.filename}</p>
                  </div>
                )
              })}
            </div>
            <div className="grid-item">
              <h2>Manage Services</h2>
              {gallery.map((image: any) => {
                return (
                  <div className="grid-item" key={image.id}>
                    <p>${image.filename + '-service'}</p>
                  </div>
                )
              })}
            </div>
            <div className="grid-item">
              <h2>Manage Orders</h2>
              {gallery.map((image: any) => {
                return (
                  <div className="grid-item" key={image.id}>
                    <p>${image.filename + '-isServices'}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}
      {isOrders && (
        <section>
          <div className="grid-container">
            <div className="grid-item">
              <h2>Manage Gallery</h2>
              {gallery.map((image: any) => {
                return (
                  <div className="grid-item" key={image.id}>
                    <p>${image.filename}</p>
                  </div>
                )
              })}
            </div>
            <div className="grid-item">
              <h2>Manage Services</h2>
              {gallery.map((image: any) => {
                return (
                  <div className="grid-item" key={image.id}>
                    <p>${image.filename + '-order'}</p>
                  </div>
                )
              })}
            </div>
            <div className="grid-item">
              <h2>Manage Orders</h2>
              {gallery.map((image: any) => {
                return (
                  <div className="grid-item" key={image.id}>
                    <p>${image.filename + '-orders'}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}
      </section>
    </div>
  )
}

export default Admin
