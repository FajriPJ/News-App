import React from 'react'
import {
  CardText, CardBody, CardLink,
  CardTitle, Row, Col, CardImg
} from 'reactstrap';
import { useHistory } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { GetNewsDetail } from '../../application/models/actions/action/newsDetailAction'

export default function ArticleList(props: any) {
  const dispatch = useDispatch();

  let history = useHistory();
    
  const toDetail = (title: any) => {
    dispatch(GetNewsDetail(title))
    history.push(`/news/${title}`)
  }

  return (
    <Col sm="6">
      <CardBody>
        <Row className="p-3">       
          <Col xs="8">
            <CardTitle tag="h6">{props.author} in {props.source.id}</CardTitle>
              <CardTitle style={{fontWeight: 'bold'}} tag="h4">{props.title}</CardTitle>
              <CardText style={{fontSize: "10px"}} className="mb-2 text-muted">{props.description}</CardText>
            <CardLink style={{textDecoration: "none"}} onClick={() =>toDetail(props.title)}>Read more...</CardLink>
          </Col>
          <Col xs="4">
            <CardImg src={props.urlToImage} style={{height: "150px", width: "150px"}}/>
          </Col>
        </Row>
      </CardBody>
    </Col>
  )
}
