import { motion } from 'framer-motion';
import { Link } from 'gatsby';
import { Spacing } from '../../../components/v3/Spacing';

import { Stitch } from '../../../components/v3/Stitch';
import { generatePostPageRoute } from '../../../route';
import SEO from '../../../utils/SEO';
import * as Style from './style.css';

export interface PostMetaDataType {
  title: string;
  date: string;
  excerpt: string;
  category: string;
  summary: string;
  id: string;
}

interface Props {
  postMetaData: PostMetaDataType[];
}

const LIST_ANIMATION_DEFAULT_DELAY = 1.5;

export function BlogContainer({ postMetaData }: Props) {
  return (
    <>
      <SEO title="조개소년 개발블로그" description="조개소년 개발블로그 | 목차" />
      <div className={Style.StitchWrapper}>
        <Stitch showing defaultMenuOpened initialAnimation="menu" />
      </div>
      <Spacing size={150} />
      <ul className={Style.ListContainer}>
        {postMetaData.map((post, index) => (
          <motion.li
            initial={{ translateY: 50, opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            transition={{ delay: LIST_ANIMATION_DEFAULT_DELAY + 0.1 * index, duration: 0.5 }}
            className={Style.ListItem}
          >
            <motion.div
              whileTap={{
                color: 'red',
                scale: 0.96,
              }}
              whileHover={{
                opacity: 0.6,
              }}
            >
              <Link to={generatePostPageRoute(post.category, post.id)}>
                <div className={Style.ItemHeader}>
                  <h2 className={Style.Title}>{post.title}</h2>
                  {/* <span>{post.date}</span> */}
                </div>
                <Spacing size={7} />
                <p className={Style.Summary}>{post.summary}</p>
              </Link>
            </motion.div>
          </motion.li>
        ))}
      </ul>
      <Spacing size={200} />
      <div className={Style.Footer}>
        <span className={Style.CopyRight}>Copyright © 2021 Shellboy</span>
        <a href="https://github.com/qkrdmstlr3" className={Style.Github}>
          Github
        </a>
      </div>
      <Spacing size={20} />
    </>
  );
}
