import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './component/App';
import BrandContextProvider from './component/store/BrandContextProvider ';
import MaincategoryContextProvider from './component/store/MainCategoryContextProvider';
import SubcategoryContextProvider from './component/store/SubCategoryContextProvider';
import ProductContextProvider from './component/store/ProductContextProvider';
import UserContextProvider from './component/store/UserContextProvider';
import ContactContextProvider from './component/store/ContactContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <MaincategoryContextProvider>
  <SubcategoryContextProvider>
   <BrandContextProvider>
 <ProductContextProvider>
 <UserContextProvider>
<ContactContextProvider>
<App/>
</ContactContextProvider>
 </UserContextProvider>
 </ProductContextProvider>
   </BrandContextProvider>
  </SubcategoryContextProvider>
  </MaincategoryContextProvider>
  </>
);


