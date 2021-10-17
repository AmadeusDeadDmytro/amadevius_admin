import type { AppProps } from 'next/app'
import 'antd/dist/antd.less';
import '@/theme/antd.less';
import '@/theme/reset.scss';
import '@/theme/markdown.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
