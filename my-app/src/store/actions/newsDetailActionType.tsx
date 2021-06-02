export const NEWS_DETAIL_LOADING = "NEWS_DETAIL_LOADING";
export const NEWS_DETAIL_FAIL = "NEWS_DETAIL_FAIL";
export const NEWS_DETAIL_SUCCESS = "NEWS_DETAIL_SUCCESS";

export type NewsDetailType = {
  articles: NewsDetailArticle[]
}

export type NewsDetailArticle = {
  name: string,
  author: string,
  title: string,
  description: string,
  url: string,
  urlToImage: string,
  publishedAt: string,
  content: string
}

export interface NewsDetailLoading {
  type: typeof NEWS_DETAIL_LOADING
}
export interface NewsDetailFail {
  type: typeof NEWS_DETAIL_FAIL
}
export interface NewsDetailSuccess {
  type: typeof NEWS_DETAIL_SUCCESS,
  payload: NewsDetailType 

}

export type NewsDetailDispatchTypes = NewsDetailLoading | NewsDetailFail | NewsDetailSuccess

