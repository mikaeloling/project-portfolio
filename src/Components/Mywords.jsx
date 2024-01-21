

import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Divider from './Divider';


const Container = styled.div`
    display: flex;
    background-color: #ffffff;
    flex-direction: column;
    background-color: #ffecea;
    padding: 128px 143px 143px 128px;
`;
const MyWordsTitle = styled.div`

h1 {
    color: #ff4575;
    font-family: "Montserrat-Bold", Helvetica;
    font-size: 80px;
    font-weight: 700;
    
`;

const MyWordsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: #ffecea;
    text-align: center;
`;

const Article = styled.div`
    align-items: flex-start;
    display: inline-flex;
    flex-direction: column;
    background-color: #ffecea;
`;

const ArticleImage = styled.img`
    height: 340px;
    position: relative;
    width: 564px;
    border-left: 1px solid #FF4575;
    border-bottom: 1px solid #FF4575;

`;

const ArticleTitle = styled.h2`
    color: #000000;
    font-family: 'Montserrat-SemiBold', Helvetica;
    font-size: 32px;
    font-weight: 600;
    letter-spacing: 0;
`;

const ReadArticleLink = styled.a`
    color: #000000;
    font-family: 'Hind-Regular', Helvetica;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0;
    
    `;

const MyWords = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        // Fetch article data
        fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mikael.oling')
            .then(response => response.json())
            .then(data => setArticles(data))
            .catch(error => console.error('Error fetching Medium data: ', error));
    }, []);

    return (
        <>
        <Divider/>
        <Container>
            <MyWordsTitle>
                <h1>My Words</h1>
            </MyWordsTitle>
            <MyWordsContainer>
                {articles.items && articles.items.map(item => (
                    <Article key={item.guid}>
                        <ArticleImage src="public/0_JzmjbMls7ngqJfJr.webp" alt={item.title} />
                        <ArticleTitle>{item.title}</ArticleTitle>
                        <ReadArticleLink href={item.link} target="_blank" rel="noopener noreferrer">
                            Read Article
                        </ReadArticleLink>
                    </Article>
                ))}
            </MyWordsContainer>
            </Container>
        </>
    );
};

export default MyWords;