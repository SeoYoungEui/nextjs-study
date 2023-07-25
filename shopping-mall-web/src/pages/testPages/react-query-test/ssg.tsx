// import { QueryClient, dehydrate } from '@tanstack/react-query'
// import { NextPageContext } from 'next'

// const QUERY_KEY = {
//   testKey1: 'testKey1',
// }
// const testApi = () => {
//   const getDetail = (id, query) => {}
// }
// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       staleTime: 1000 * 60,
//     },
//   },
// })

// export const getServerSideProps = async (context: NextPageContext) => {
//   const { id, mainCategory, subCategory } = context.query
//   const questionId = Number(id)

//   //.. 생략

//   try {
//     const query = { mainCategory, subCategory }

//     await queryClient.prefetchQuery(
//       [QUERY_KEY.testKey1, questionId, query],
//       () => testApi.getDetail(questionId, query)
//     )

//     return {
//       props: {
//         questionId,
//         query,
//         dehydratedState: dehydrate(queryClient),
//       },
//     }
//   } catch (e) {
//     return {
//       notFound: true,
//     }
//   }
// }

// const QuestionDetail = ({ questionId, query }: QuestionDetailProps) => {
//   const { detailData } = useQuestionDetail(questionId, query)

//   // 생략
// }
