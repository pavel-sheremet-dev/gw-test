import Container from 'components/reusableComponents/container/Container';
import { Element } from 'react-scroll';

import {
  ContentWrapper,
  Description,
  ImageWrapper,
  StyledSection,
  SupTitle,
  Title,
} from './Section.styled';

interface IProps {
  id: string;
  as?: 'section' | 'article';
  sectionType?: 'basic' | 'withImage';
  title?: string;
  supTitle?: string;
  description?: string;
  isHidden?: boolean;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  sectionClass?: string;
  containerClass?: string;
  Image?: JSX.Element;
  imagePosition?: 'left' | 'right';
  backgroundColor?: string;
}

const Section = ({
  id,
  as = 'section',
  sectionType = 'basic',
  supTitle,
  title,
  description,
  children,
  style = {},
  sectionClass,
  containerClass,
  Image,
  imagePosition = 'left',
  backgroundColor,
}: IProps) => {
  return (
    <StyledSection
      as={as}
      style={style}
      className={sectionClass}
      sectionType={sectionType}
    >
      <Element name={id}>
        <Container
          sectionType={sectionType}
          classNames={
            containerClass ? [containerClass, imagePosition] : [imagePosition]
          }
          backgroundColor={backgroundColor}
        >
          {Image && sectionType === 'withImage' && (
            <ImageWrapper>{Image}</ImageWrapper>
          )}
          <ContentWrapper sectionType={sectionType}>
            {supTitle && <SupTitle className="suptitle">{supTitle}</SupTitle>}
            {title && <Title className="title">{title}</Title>}
            {description && (
              <Description className="description">{description}</Description>
            )}
            {children}
          </ContentWrapper>
        </Container>
      </Element>
    </StyledSection>
  );
};

export default Section;
