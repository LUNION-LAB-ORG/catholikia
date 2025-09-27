import ArticleList from '@/components/(public)/tribunes/article-list';
import { Contributors } from '@/components/(public)/tribunes/contributors';
import { SubmitText } from '@/components/(public)/tribunes/submit-text';
import TitleBanner from '@/components/common/TitleBanner';
import Content from '@/components/primitives/Content';
import React from 'react';

const Page = () => {
    return (
        <Content>
            <TitleBanner title='TRIBUNES'/>
            <ArticleList/>
            <Contributors/>
            <SubmitText/>
        </Content>
    );
}

export default Page;
