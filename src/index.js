import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './component/App';
import BrandContextProvider from './component/store/BrandContextProvider ';
import MaincategoryContextProvider from './component/store/MainCategoryContextProvider';
import SubcategoryContextProvider from './component/store/SubCategoryContextProvider';
import ProductContextProvider from './component/store/ProductContextProvider';
import UserContextProvider from './component/store/UserContextProvider';
import ContactContextProvider from './component/store/ContactContextProvider';
import NewslatterContextProvider, { Newslatter } from './component/store/NewslatterContextProvider';
import CartContextProvider from './component/store/CartContextProvider';
import WishlistContextProvider from './component/store/WishlistContextProvider';
import CheckoutContextProvider from './component/store/CheckoutContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <MaincategoryContextProvider>
      <SubcategoryContextProvider>
        <BrandContextProvider>
          <ProductContextProvider>
            <UserContextProvider>
              <ContactContextProvider>
                <NewslatterContextProvider>
                  <CartContextProvider>
                    <WishlistContextProvider>
                   <CheckoutContextProvider>
                   <App/>
                   </CheckoutContextProvider>
                    </WishlistContextProvider>
                  </CartContextProvider>
                </NewslatterContextProvider>
              </ContactContextProvider>
            </UserContextProvider>
          </ProductContextProvider>
        </BrandContextProvider>
      </SubcategoryContextProvider>
    </MaincategoryContextProvider>
  </>
);


