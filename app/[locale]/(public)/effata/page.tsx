import { ArticlesPage } from '@/components/(public)/effata/article-page';
import { EffataSection } from '@/components/(public)/effata/effata-section';
import Content from '@/components/primitives/Content';
import React from 'react';

const EffataPage = () => {
    return (
        <Content>
            <EffataSection/>
            <ArticlesPage />
        </Content>
    );
}

export default EffataPage;
