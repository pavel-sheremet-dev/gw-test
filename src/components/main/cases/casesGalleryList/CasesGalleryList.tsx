import ImagesSet, {
  IImageSetConfig,
} from 'components/reusableComponents/image/Image';
import { ListStyled } from './CasesGalleryList.styled';

interface IProps {
  imagesConfigArray: IImageSetConfig[];
}

const CasesGalleryList = ({ imagesConfigArray }: IProps) => {
  return (
    <ListStyled>
      {imagesConfigArray.map((imageConfig, idx) => (
        <li key={idx}>
          <ImagesSet config={imageConfig} />
        </li>
      ))}
    </ListStyled>
  );
};

export default CasesGalleryList;
