import ImagesSet from 'components/reusableComponents/image/Image';
import SocialList from 'components/socialList/SocialList';
import { IListData } from '../OurTeamSection';
import { ListStyled } from './TeamList.styled';

interface IProps {
  listData: IListData[];
}

const TeamList = ({ listData }: IProps) => {
  return (
    <ListStyled>
      {listData.map(({ imageConfig, id, name, position, socialsLinks }) => (
        <li className="item" key={id}>
          <div className="image-wrapper">
            <ImagesSet config={imageConfig} />
            <div className="image-mask"></div>
            <SocialList socialsLinks={socialsLinks} className="socials" />
          </div>
          <p className="name">{name}</p>
          <p className="position">{position}</p>
        </li>
      ))}
    </ListStyled>
  );
};

export default TeamList;
