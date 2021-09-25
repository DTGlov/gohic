import React from 'react'
import Feed from '../components/Home/Feed';
import LeftSide from '../components/Home/LeftSide';
import RightSide from '../components/Home/RightSide';

function Home() {
    return (
      <section className="bg-gray-100">
        <main className=" md:grid md:grid-cols-4 md:gap-3 md:px-10">
                <LeftSide/>
                    <Feed/>
                <RightSide/>
        </main>
      </section>
    );
}

export default Home
