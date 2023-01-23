import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import * as Style from './styled';
import SEO from '../../../../utils/SEO';
import { gamePageRoute, generatePostPageRoute } from '../../../../route';
import Layout from '../../layout';

export interface PostMetaDataType {
  title: string;
  date: string;
  excerpt: string;
  category: string;
  summary: string;
  id: string;
}

interface MainProps {
  postMetaData: PostMetaDataType[];
}

function Main({ postMetaData }: MainProps) {
  const ALL_POSTS = 'all';
  const [categorys, setCategorys] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>(ALL_POSTS);

  const getCategory = () => {
    const uniqCategory = new Set<string>([ALL_POSTS, ...postMetaData.map((data) => data.category)]);
    setCategorys(Array.from(uniqCategory));
  };

  const handleCurrentCategory = (category: string) => setSelectedCategory(category);

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <Layout>
      <SEO />
      <Style.Wrapper>
        <Style.BackButton>
          <Link to={gamePageRoute}>게임으로</Link>
        </Style.BackButton>
        <Style.CategoryList>
          {categorys.map((category) => (
            <Style.CategoryItem key={category} onClick={() => handleCurrentCategory(category)}>
              {selectedCategory === category && <Style.Select>▶</Style.Select>}
              {category.toUpperCase()}
            </Style.CategoryItem>
          ))}
        </Style.CategoryList>
        <Style.ItemWrapper>
          {postMetaData.map((data) =>
            selectedCategory === ALL_POSTS || selectedCategory === data.category ? (
              <Style.ItemContainer key={data.title}>
                <Link to={generatePostPageRoute(data.category, data.id)}>
                  <Style.ItemCategory>[{data.category}]</Style.ItemCategory>
                  <Style.ItemTitle>{data.title}</Style.ItemTitle>
                  <Style.ItemContent>{data.summary}</Style.ItemContent>
                </Link>
              </Style.ItemContainer>
            ) : (
              <></>
            )
          )}
        </Style.ItemWrapper>
      </Style.Wrapper>
    </Layout>
  );
}

export default Main;
