import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import Section from 'components/reusableComponents/section/Section';
import Button from 'components/reusableComponents/buttons/Button';
import ImagesSet, {
  IImageSetConfig,
} from 'components/reusableComponents/image/Image';

import desk_1x_webp from 'assets/images/people/people-desktop.webp';
import desk_2x_webp from 'assets/images/people/people-desktop@2x.webp';
import desk_1x from 'assets/images/people/people-desktop.jpg';
import desk_2x from 'assets/images/people/people-desktop@2x.jpg';
import tablet_1x_webp from 'assets/images/people/people-tablet.webp';
import tablet_2x_webp from 'assets/images/people/people-tablet@2x.webp';
import tablet_1x from 'assets/images/people/people-tablet.jpg';
import tablet_2x from 'assets/images/people/people-tablet@2x.jpg';
import mobile_1x_webp from 'assets/images/people/people-mobile.webp';
import mobile_2x_webp from 'assets/images/people/people-mobile@2x.webp';
import mobile_1x from 'assets/images/people/people-mobile.jpg';
import mobile_2x from 'assets/images/people/people-mobile@2x.jpg';

const config: IImageSetConfig = {
  alt: 'people in office',
  urls: {
    desk_1x_webp,
    desk_2x_webp,
    desk_1x,
    desk_2x,
    tablet_1x_webp,
    tablet_2x_webp,
    tablet_1x,
    tablet_2x,
    mobile_1x_webp,
    mobile_2x_webp,
    mobile_1x,
    mobile_2x,
  },
};

const Advantages = () => {
  const theme = useContext(ThemeContext);
  return (
    <Section
      backgroundColor={theme.colors.mainBrandColor}
      sectionType={'withImage'}
      Image={<ImagesSet config={config} />}
      supTitle="What you are looking for"
      title="We provide bespoke solutions"
      description="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptate, ipsum dignissimos quae laudantium asperiores nam
              aliquid impedit harum illum dolore explicabo ab dolores itaque
              rerum temporibus doloribus iste maiores deleniti?"
    >
      <Button
        text={'Read More'}
        onClick={() => {}}
        transparent
        type={'button'}
      />
    </Section>
  );
};

export default Advantages;
