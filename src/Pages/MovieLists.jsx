import React from 'react';
import Cart from '../Components/Cart';
export default function MovieLists() {
  return (
    <main>
      <section className='max-w-7xl mx-auto py-7'>
        <div className='flex justify-start flex-wrap'>
         <Cart/>
         <Cart/>
         <Cart/>
         <Cart/>
         <Cart/>
         <Cart/>
        </div>
      </section>
    </main>
  );
}
