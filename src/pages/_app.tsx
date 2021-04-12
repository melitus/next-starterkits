import {DefaultSeo} from 'next-seo';
import React from 'react';
import seo from '../seo.config';
import {ProvideAuth} from '../utils/auth';
import {ProvideSearch} from '../utils/search';

export default ({Component, pageProps}) => (
    <ProvideAuth>
                <ProvideSearch>
                    <DefaultSeo {...seo} />
                    <Component {...pageProps} />
                </ProvideSearch>
    </ProvideAuth>
);
