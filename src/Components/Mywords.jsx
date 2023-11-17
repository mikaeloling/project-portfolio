import { useState, useEffect } from 'react';

const Mywords = () => {
    const [articles, setArticles] = useState([]);
    
    useEffect(() => {
        fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mikael.oling')
            .then((response) => response.json())
            .then((data) => setArticles(data))
            .catch((error) => console.error('Error fetching Medium data: ', error));
    }, []);

    return (
        <div>
            <h1>My Words</h1>
            <ul>
                {articles.items &&
                    articles.items.map((item) => (
                                    <div key={item.guid}>´
                                    <div>
                                        {item.thumbnail && <img src={item.thumbnail} alt={item.title} />}
                                        </div>
                                        <h2>{item.title}</h2>
                                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                                            {item.title}
                                        </a>
                                
                                    </div>
                                    
                                ))}
                        </ul>
                        <ul>
                            {Array.isArray(articles) && articles.map((article) => (
                                <li key={article.id}>
                                    <img src={article.thumbnail} alt={article.title} />
                                    <h2>{article.title}</h2>
                                    <p>{article.description}</p>
                                    <a href={article.link}>Medium article</a>
                                    <p>Language: {article.language}</p>
                                </li>
                            ))}
                        
            </ul>
        </div>
    );


};


export default Mywords
