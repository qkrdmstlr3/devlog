import * as Style from './style.css';

interface PostCardProps {
  title: string;
  src: string;
}

export function PostCard({ title, src }: PostCardProps) {
  return (
    <div>
      <img className={Style.CoverImage} src={src} alt="" />
    </div>
  );
}
