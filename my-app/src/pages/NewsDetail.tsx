import React, {useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import {
  CardText, CardBody, CardImg, CardTitle, CardSubtitle, Container, Row, Col
} from 'reactstrap';
import { RootStore } from "../store"
import { useParams } from "react-router-dom";
import { GetNewsDetail } from "../store/actions/newsDetailAction"
import { NavigasiBar, Loading, Error } from "../components"


export default function NewsDetail() {
  const {newsDetail, loading} = useSelector((state: RootStore)=> state.newsDetailReducer);
  const dispatch = useDispatch();
  const {title} = useParams() 

  useEffect(() => {
    dispatch(GetNewsDetail(title))
  }, [])

  if (loading) {
    return (
      <Loading/>
    )
  }

  if (!newsDetail?.articles[0]) {
    return <Error/>
  }

  return (
    <>
      <NavigasiBar/>
      <Container className="mt-3">
        <CardBody className="mb-3" style={{maxWidth: "100%"}}>
          <Row g-0>
            <Col col-md-3>
              <CardImg src={newsDetail?.articles[0]?.urlToImage} alt="Card image cap"/>
              <CardText className="card-text">Published date: {newsDetail?.articles[0]?.publishedAt.slice(0,10)}</CardText>
            </Col>
            <Col col-md-9>
              <CardBody>
                <CardTitle style={{fontWeight: 'bold'}} tag="h4">{newsDetail?.articles[0]?.title}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">{newsDetail?.articles[0]?.author}</CardSubtitle>
                <CardText className="card-text">{newsDetail?.articles[0]?.content}</CardText>
              </CardBody>
            </Col>
          </Row>
        </CardBody>
      </Container>
    </>
  )
}
