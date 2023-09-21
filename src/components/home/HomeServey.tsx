import HomeCard from '@/components/home/HomeCard';
import { HOME_TEXTS } from '@/constants/home/homeTexts';
import { css } from '@emotion/react';
import Icons from '@/components/common/Icons';
import theme from '@/styles/theme';

function HomeServey() {
  const { servey } = HOME_TEXTS;
  return (
    <HomeCard>
      <div css={containerStyles}>
        <Icons icon="coin" size="70" />
        <div css={wrapperStyles}>
          <span css={titleStyles}>{servey.title}</span>
          <span css={bodyStyles}>{servey.body}</span>
        </div>
      </div>
    </HomeCard>
  );
}

const containerStyles = css`
  display: flex;
  padding: 20px 0;
  align-items: center;
  gap: 16px;
  align-self: stretch;
`;

const wrapperStyles = css`
  display: flex;
  flex-direction: column;
`;

const titleStyles = css`
  font: ${theme.font.body.body3_400};
  color: ${theme.palette.greyscale.grey50};
  line-height: 21px;
`;

const bodyStyles = css`
  font: ${theme.font.body.body2_600};
  line-height: 21px;
`;

export default HomeServey;
