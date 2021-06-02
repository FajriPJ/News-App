import React, {useEffect} from 'react'
import {
  Container, Row, 
} from 'reactstrap';
import {useDispatch, useSelector} from "react-redux";
import {RootStore} from "../store"
import { GetNews } from "../store/actions/newsAction"
import { Loading, ArticleList } from "../components"

export default function News() {

  const dispatch = useDispatch();
  const {news, loading} = useSelector((state: RootStore) => state.newsReducer)

  useEffect(() => {
    dispatch(GetNews())
  }, [])

  if (loading) {
    return (
      <Loading/>
    )
  }

  return (
    <Container className="mt-3">
      <Row>
        {
          news?.articles.map(article => {
            return <ArticleList {...article} key={article.title}></ArticleList>
          })
        }
      </Row>
    </Container>
  )
}
