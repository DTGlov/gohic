import React,{useEffect, useState} from 'react';
import { useParams } from 'react-router';
import {getSinglePost } from '../components/Home/FeedData';
import Middle from '../components/Post/Middle';
import PostLeft from '../components/Post/PostLeft';
import PostRight from '../components/Post/PostRight';

function PostDetail() {
    const [feed,setFeed] = useState({})
    const { id } = useParams();
    let newId = parseInt(id);

    useEffect(() => {
        const post = getSinglePost(newId);
       setFeed(post)
    }, [newId]);

    console.log(feed)
  
    return (
        <section>
            <main className="grid grid-cols-6 gap-3 mt-3">
                <PostLeft likes={ feed.reactions} />
                <Middle heading={feed.heading} tags={feed.tags} profile={feed.profile} name={feed.name} date={feed.date} read={feed.read} description={feed.description} image={ feed.image}/>
                <PostRight profile={feed.profile} name={feed.name} color={feed.color} bio={feed.bio} work={feed.Work} education={feed.Education} location={feed.Location} joined={ feed.Joined}/>
            </main>
           
        </section>
           
        
    )
}

export default PostDetail
