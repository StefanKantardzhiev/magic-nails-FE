import React, { FC, useEffect, useState } from 'react'
import styles from './Main.module.css'
import { PhotoProvider, PhotoView } from 'react-photo-view'
const env = require('../../.env.json')

const Main = () => {
  const [images, setImages] = useState([])
  const [email, setEmail] = useState('')
  const [title, setTitle] = useState('')
  const [message, setMessage] = useState('')
  const [serviceType, setServiceType] = useState('')

  useEffect(() => {
    fetch(env.REST_API.url + '/files')
      .then((res) => res.json())
      .then((data) => {
        setImages(data)
      })
  }, [])

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()

    const emailString = email.trim()
    const titleString = title.trim()
    const messageString = message.trim()
    const serviceTypeString = serviceType.trim()

    // Use the strings as needed
    console.log(emailString, titleString, messageString, serviceTypeString)

    // Rest of the code...
  }

  return (
    <div className={styles.Main}>
      <section className="hero">
        <div className="title_container">
          <h1>Julia Nails Studio</h1>
          <h2>
            Julia Nails Studio is a nail salon located in the heart of the city
            of San Francisco. We specialize in manicures, pedicures, and waxing.
            Our goal is to provide a relaxing and enjoyable experience for all
            of our clients. We offer a variety of services including gel
            manicures, acrylic nails, and nail art. Our staff is friendly and
            professional, and we strive to make your visit as pleasant as
            possible. We look forward to seeing you soon!
          </h2>
        </div>
      </section>
      <section className="services">
        <div className="services_container">
          <div className="service">
            <h2>Manicure</h2>
            <p>
              Our manicures are designed to give you the perfect look for any
              occasion. We offer a variety of manicure services, including gel
              manicures, acrylic nails, and nail art. Our manicurists are
              trained in the latest techniques to ensure that your nails look
              their best.
            </p>
            <button onClick={() => setServiceType('Manicure')}>
              Reserve now!
            </button>
          </div>
          <div className="service">
            <h2>Pedicure</h2>
            <p>
              Our manicures are designed to give you the perfect look for any
              occasion. We offer a variety of manicure services, including gel
              manicures, acrylic nails, and nail art. Our manicurists are
              trained in the latest techniques to ensure that your nails look
              their best.
            </p>
            <button>Reserve now!</button>
          </div>
          <div className="service">
            <h2>Design</h2>
            <p>
              Our manicures are designed to give you the perfect look for any
              occasion. We offer a variety of manicure services, including gel
              manicures, acrylic nails, and nail art. Our manicurists are
              trained in the latest techniques to ensure that your nails look
              their best.
            </p>
            <button onClick={() => setServiceType('Design')}>
              Reserve now!
            </button>
          </div>
        </div>
      </section>
      <h1 className="main-title">Latest Designs</h1>
      <section className="gallery">
        <PhotoProvider>
          {images.map((image: any, index) => (
            <PhotoView
              key={index}
              src={env.REST_API.url + '/files/' + image?._id}
            >
              {index < images.length ? (
                <img src={env.REST_API.url + '/files/' + image?._id} alt="" />
              ) : undefined}
            </PhotoView>
          ))}
        </PhotoProvider>
      </section>
      <h1>Contact Us</h1>
      <form onSubmit={(ev) => onSubmit(ev)}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="title"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
          />
        </div>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(ev) => setTitle(ev.target.value)}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(ev) => setMessage(ev.target.value)}
          ></textarea>
        </div>
        <div>
          <label htmlFor="serviceType">Type of Service:</label>
          <select
            id="serviceType"
            onChange={(ev) => setServiceType(ev.target.value)}
          >
            <option value="">Select a service type</option>
            <option value="Manicure">Manicure</option>
            <option value="Pedicure">Pedicure</option>
            <option value="Design">Design</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Main
