import { createSEOPageTitle } from '@/utils/content/metadata'
import NotFound from 'gatoapp/app/not-found';

const pageTitle = '404'
export const metadata = {
  title: createSEOPageTitle(pageTitle),
  description: "Oops, this page doesn't exist",
}

export default NotFound