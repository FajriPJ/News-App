import React from 'react'
import {
  Container,
} from 'reactstrap';
import {NavigasiBar} from './index'

export default function Error() {
  return (
    <div className="App">
      <NavigasiBar />
      <Container>
        <h1
          className="text-center"
          style={{ marginTop: "35vh", color: "#333333" }}
        >
          Sorry, News Not Found
        </h1>
      </Container>
    </div>
  )
}
