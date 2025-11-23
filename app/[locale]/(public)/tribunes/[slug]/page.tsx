import Publicite from '@/components/(public)/publicites';
import TribuneDetailsContent from '@/components/(public)/tribunes/details/tribune-details-content';
import Content from '@/components/primitives/Content';
import { prefetchTribuneQuery } from '@/features/tribunes/queries/tribune-detail.query';

export default async function TribuneDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  prefetchTribuneQuery(slug);
  return (
    <Content fullWidth className='mt-[4rem]'>
      <Publicite position='TRIBUNES_DETAILS_TOP' orientation='horizontal' />
      <TribuneDetailsContent
        slug={slug}
      />
    </Content>
  )
}
