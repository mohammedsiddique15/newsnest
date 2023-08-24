import React from 'react'
import { useEffect, useState } from 'react';

export const Content = () => {

    const [category, setCategory] = useState("general")
    const [news, setNews] = useState(null);

    const handleButtons = (e) => {
        const newCategory = e.target.value;
        setCategory(newCategory);
        fetchNews(newCategory)
    }

    console.log(news);

    const fetchNews = (category) => {

        // Fetching News from API
        var url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=644b2797fe6f46cfbd8568d6084a3524`
        fetch(url)
            .then((response) => response.json())
            .then(json => setNews((json)))
            .catch((error)=> console.log('Error while fetching news : ', error));
    }


    useEffect(() => {
        fetchNews(category);
    }, [category]); // Add category as a dependency

    return (
        <div>

            <div className='container buttons' style={{ display: 'flex', justifyContent: 'space-around', margin: '20px 0', flexWrap: 'wrap', gap: '10px'}}>
                <button className={`btns  ${category === 'general' ? 'category' : ''}`} onClick={(e) => handleButtons(e)} value={'general'}>General</button>
                <button className={`btns  ${category === 'business' ? 'category' : ''}`} onClick={(e) => handleButtons(e)} value={'business'}>Business</button>
                <button className={`btns  ${category === 'entertainment' ? 'category' : ''}`} onClick={(e) => handleButtons(e)} value={'entertainment'}>Entertainment</button>
                <button className={`btns  ${category === 'health' ? 'category' : ''}`} onClick={(e) => handleButtons(e)} value={'health'}>Health</button>
                <button className={`btns  ${category === 'science' ? 'category' : ''}`} onClick={(e) => handleButtons(e)} value={'science'}>Science</button>
                <button className={`btns  ${category === 'sports' ? 'category' : ''}`} onClick={(e) => handleButtons(e)} value={'sports'}>Sports</button>
                <button className={`btns  ${category === 'technology' ? 'category' : ''}`} onClick={(e) => handleButtons(e)} value={'technology'}>Technology</button>
            </div>

            {
                news && news.articles.map((item) => {
                    return (
                        <div className='container mt-5'>
                            <div class="card mb-3">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <img src={item.urlToImage} class="img-fluid rounded-start" style={{ height: '100%', objectFit:'cover'}} alt="Image not available" />
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h4 class="card-title">{item.title}</h4>
                                            <p class="card-text"><b class="text">News by : </b><small class="text">{item.author}</small></p>
                                            <p class="card-text">{item.description}</p>
                                            <p class="card-text"><b>publishedAt : </b><small class="text-muted">{new Date(item.publishedAt).toLocaleDateString()}</small></p>
                                            <a href={item.url} target='_blank' rel='noopener noreferrer' type='button' className='btn btn-dark'>Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}