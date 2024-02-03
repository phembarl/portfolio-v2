import style from './style.module.scss';

interface TagProps {
  text: string;
}

const Tag = ({ text }: TagProps) => {
  return <div className={style.tag}>{text}</div>;
};

export default Tag;
