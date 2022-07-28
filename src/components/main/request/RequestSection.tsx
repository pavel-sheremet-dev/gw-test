import Section from 'components/reusableComponents/section/Section';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { Title } from 'components/reusableComponents/section/Section.styled';
import ImagesSet, {
  IImageSetConfig,
} from 'components/reusableComponents/image/Image';

import desk_1x_webp from 'assets/images/contact/contact-desktop.webp';
import desk_2x_webp from 'assets/images/contact/contact-desktop@2x.webp';
import desk_1x from 'assets/images/contact/contact-desktop.jpg';
import desk_2x from 'assets/images/contact/contact-desktop@2x.jpg';
import tablet_1x_webp from 'assets/images/contact/contact-tablet.webp';
import tablet_2x_webp from 'assets/images/contact/contact-tablet@2x.webp';
import tablet_1x from 'assets/images/contact/contact-tablet.jpg';
import tablet_2x from 'assets/images/contact/contact-tablet@2x.jpg';
import mobile_1x_webp from 'assets/images/contact/contact-mobile.webp';
import mobile_2x_webp from 'assets/images/contact/contact-mobile@2x.webp';
import mobile_1x from 'assets/images/contact/contact-mobile.jpg';
import mobile_2x from 'assets/images/contact/contact-mobile@2x.jpg';
import CallbackForm from 'components/forms/callbackForm/CallbackForm';
import { NavId } from 'data/navigation';

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

const RequestSection = () => {
  const theme = useContext(ThemeContext);
  return (
    <Section
      id={NavId.CONTACT}
      backgroundColor={theme.colors.backgroundColor2}
      sectionType={'withImage'}
      Image={<ImagesSet config={config} />}
    >
      <Title style={{ color: theme.colors.defaultFontColor }}>
        Request Callback
      </Title>
      <CallbackForm />
    </Section>
  );
};

export default RequestSection;
