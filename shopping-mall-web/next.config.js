/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: (() => {
    let compilerConfig = {
      styledComponents: true,
    }
    if (process.env.NODE_ENV !== 'production') {
      compilerConfig = {
        ...compilerConfig,
        reactRemoveProperties: { properties: ['^data-testid$'] },
      }
    }
    return compilerConfig
  })(),
  // 교차 출처 리소스 공유(CORS) 에서의 쿠키 전송을 피하기 위해 Next.js 의 Rewrites 기능을 사용해 프락시를 설정합니다.
  // Next.js 의 엔트포인트에 요청을 전송하면 json-server 라는 엔드포인트로 변환되어 요청이 전송됩니다.
  async rewrites() {
    return [
      {
        source: `${process.env.NEXT_PUBLIC_API_PATH}/:match*`,
        destination: `${process.env.API_BASE_URL}/:match*`,
      },
    ]
  },
}

module.exports = nextConfig
