import React from 'react';
import { MainLayout } from '../styles/layout';
import { Skills, Resume } from '../components';

function Resumer() {
    return (
        <MainLayout>
            <Skills />
            <Resume />
        </MainLayout>
    )
}

export default Resumer;
