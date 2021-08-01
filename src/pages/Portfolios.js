import React, { useState } from 'react';
import { MainLayout, InnerLayout } from '../styles/layout';
import { Title, Menu, Button } from '../components';
import portfolios from '../data/portfolios';

const allButtons = ['All', ...new Set(portfolios.map(item => item.category))]

function PortfoliosPage() {
    const [menuItem, setMenuItems] = useState(portfolios);
    const [button, setButtons] = useState(allButtons);

    const filter = (button) => {

        if (button === 'All') {
            setMenuItems(portfolios);
            return;
        }

        const filteredData = portfolios.filter(item => item.category === button);
        setMenuItems(filteredData);
    }
    return (
        <MainLayout>
            <Title title={'Portfolios'} span={'portfolios'} />
            <InnerLayout>

                <Button filter={filter} button={button} />
                <Menu menuItem={menuItem} />
            </InnerLayout>
        </MainLayout>
    )
}

export default PortfoliosPage;