import React from 'react'
import styled from 'styled-components';
import { MainLayout } from '../styles/layout';

import {
    Title,
    ImageSection,
    ServicesSection,
    ReviewsSetion
} from '../components';

function About() {
    return (
        <MainLayout>
            <AboutStyled>
                <Title title={'About Me'} span={'About Me'} />
                <ImageSection />
                <ServicesSection />
                <ReviewsSetion />
            </AboutStyled>
        </MainLayout>
    )
}


const AboutStyled = styled.section`

`

export default About;

