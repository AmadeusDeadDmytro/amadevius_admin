import type { NextPage } from 'next'
import {AdminLayout} from "@/layout/AdminLayout";

interface IHomeProps {
  articles: IArticle[];
  comments: IComment[];
}

const Home: NextPage<IHomeProps> = ({ articles = [], comments:defaultComments = []  }) => {
  return (
    <AdminLayout>

    </AdminLayout>
  )
}

export default Home
