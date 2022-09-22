import React from 'react';
import Img from './CardWidgets/Img';
import Text from './CardWidgets/Text';

const ItemListContainer = () => {
    return (
            <>
    <div className="card mb-3" style={{maxWidth: '100vh'}}>
        <div className="row g-0">
            <Img/>
            <Text/>                
        </div>
    </div>

        </>
    );
}

export default ItemListContainer;
