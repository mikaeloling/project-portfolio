import { useState, useEffect } from 'react';
import styled from 'styled-components';


const MywordsTitle = styled.div`
    display: flex;
    font-family: 'Montserrat', sans-serif;
    align-self: center;
    justify-content: center;
    font-size: 2rem;
    font-weight: 600;
    color: #000000;
    margin-bottom: 0.5rem;
    `

const Mywordscontainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    
    
    background-color: #ffffff;
    text-align: center;

   
    `

const Mywords = () => {
    const [articles, setArticles] = useState([]);
    
    useEffect(() => {
        fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mikael.oling')
            .then((response) => response.json())
            .then((data) => setArticles(data))
            .catch((error) => console.error('Error fetching Medium data: ', error));
    }, []);

    return (
        <>
            <MywordsTitle>
                <h1>My Words</h1>
            </MywordsTitle>
            <Mywordscontainer>
            
                {articles.items &&
                    articles.items.map((item) => (
                                        <>
                                    <div key={item.guid}>´
                                        {item.thumbnail && <img src={item.thumbnail} alt={item.title} />}
                                        
                                        <h2>{item.title}</h2>
                                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                                            {item.title}
                                        </a>
                                        </div>
                                
                                        </>
                                ))}
                        
                        {/* <ul>
                            {Array.isArray(articles) && articles.map((article) => (
                                <li key={article.id}>
                                    <img src={article.thumbnail} alt={article.title} />
                                    <h2>{article.title}</h2>
                                    <p>{article.description}</p>
                                    <a href={article.link}>Medium article</a>
                                    <p>Language: {article.language}</p>
                                </li>
                            ))} */}

        </Mywordscontainer>

        </>
    );
    

};


export default Mywords
