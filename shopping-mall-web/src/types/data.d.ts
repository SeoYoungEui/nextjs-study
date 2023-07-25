// 상품 카테고리
export type Category = 'shoes' | 'clothes' | 'book'
// 상품 상태
export type Condition = 'new' | 'used'
// 사용자
export type User = {
  id: number
  username: string
  displayName: string
  email: string
  profilemageUrl: string
  description: string
}

// 상품
export type Product = {
  id: number
  category: string
  title: string
  description: string
  imageUrl: string
  blurDataUrl: string
  price: number
  condition: string
  owner: string
}

// API 컨텍스트
export type ApiContext = {
  apiRootUrl: string
}
