import React from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import { identifier } from '@babel/types';


class ShopPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: SHOP_DATA,
        }
    }

    render() {        
        const  {collections} = this.state;
        console.log(collections);

        return (
            <div className="shop-page">
                {collections.map((collection) => (
                    <CollectionPreview key={collection.id}
                        title={collection.title} items={collection.items} />
                ))}
            </div>
        )
    }
}
export default ShopPage;
