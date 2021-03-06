// Dependencies
import React, { useState, useEffect } from 'react';
import * as Style from './styled';
import { Link } from 'gatsby';

// Components
import BorderBox from '../../UI/BorderBox';

interface NodeType {
  node: {
    excerpt: string;
    frontmatter: {
      category: string;
      date: string;
      title: string;
    };
  };
}

interface ListPageProps {
  data: {
    allMarkdownRemark: {
      edges: NodeType[];
    };
  };
}

const ALL_POSTS = 'all';

function ListPage({
  data: {
    allMarkdownRemark: { edges },
  },
}: ListPageProps): React.ReactElement {
  const [categorys, setCategorys] = useState<string[]>([]);
  const [currentCategory, setCurrentCategory] = useState<string>(ALL_POSTS);

  const getCategory = () => {
    const uniqCategory = new Set<string>();
    edges.map(({ node }) => uniqCategory.add(node.frontmatter.category));
    setCategorys(Array.from(uniqCategory));
  };

  const handleCurrentCategory = (category: string) => {
    setCurrentCategory(category);
  };

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <Style.Wrapper>
      <Style.BackButton>
        <Link to="/">홈으로</Link>
      </Style.BackButton>
      <Style.ListWrapper>
        <Style.ListName
          key={ALL_POSTS}
          onClick={() => handleCurrentCategory(ALL_POSTS)}
        >
          {currentCategory === ALL_POSTS && <Style.Select>▶</Style.Select>}
          {ALL_POSTS}
        </Style.ListName>
        {categorys.map((category) => (
          <Style.ListName
            key={category}
            onClick={() => handleCurrentCategory(category)}
          >
            {currentCategory === category && <Style.Select>▶</Style.Select>}
            {category}
          </Style.ListName>
        ))}
      </Style.ListWrapper>
      <Style.ItemWrapper>
        {edges.map(({ node }) => {
          if (
            node.frontmatter.category === currentCategory ||
            currentCategory === ALL_POSTS
          )
            return (
              <Style.ItemContainer key={node.frontmatter.title}>
                <Link
                  to={`/${node.frontmatter.category}/${node.frontmatter.title}`}
                >
                  <Style.ItemCategory>
                    [{node.frontmatter.category}]
                  </Style.ItemCategory>
                  <Style.ItemTitle>{node.frontmatter.title}</Style.ItemTitle>
                  <Style.ItemContent>{node.excerpt}</Style.ItemContent>
                </Link>
              </Style.ItemContainer>
            );
        })}
      </Style.ItemWrapper>
    </Style.Wrapper>
  );
}

export default ListPage;
