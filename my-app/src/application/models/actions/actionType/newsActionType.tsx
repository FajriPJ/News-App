export const NEWS_LOADING = "NEWS_LOADING";
export const NEWS_FAIL = "NEWS_FAIL";
export const NEWS_SUCCESS = "NEWS_SUCCESS";

export type NewsType = {
  articles: NewsArticle[]
}

export type NewsArticle = {
  name: string,
  author: string,
  title: string,
  description: string,
  url: string,
  urlToImage: string,
  publishedAt: string,
  content: string
}

export interface NewsLoading {
  type: typeof NEWS_LOADING
}
export interface NewsFail {
  type: typeof NEWS_FAIL
}
export interface NewsSuccess {
  type: typeof NEWS_SUCCESS,
  payload: NewsType
}

export type NewsDispatchTypes = NewsLoading | NewsFail | NewsSuccess