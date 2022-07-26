import { ListStyled } from './SocialList.styled';

export interface SocialItemData {
  id: string;
  iconUrl: string;
  link: string;
  alt: string;
}

interface IProps {
  listData: SocialItemData[];
  className?: string;
}

const SocialList = ({ listData, className }: IProps) => {
  return (
    <>
      {!!listData.length && (
        <ListStyled className={className}>
          {listData.map(({ id, iconUrl, link, alt }) => (
            <li key={id}>
              <a
                href={link}
                target={'_blank'}
                rel="noreferrer noopener nofollow"
                className="link"
              >
                <img src={iconUrl} className="icon" alt="icon" />
              </a>
            </li>
          ))}
        </ListStyled>
      )}
    </>
  );
};

export default SocialList;
