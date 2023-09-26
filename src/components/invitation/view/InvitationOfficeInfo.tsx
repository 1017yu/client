import Header from '@/components/common/Header';
import { INVITATION_VIEW_TEXTS } from '@/constants/invitation/viewTexts';
import { css } from '@emotion/react';
import mq from '@/utils/mediaquery';
import InvitationVisitTip from './InvitationOfficeVisitTip';
import InvitationOfficeMap from './InvitationOfficeMap';
import InvitationOfficeLocation from './InvitationOfficeLocation';

function InvitationOfficeInfo() {
  return (
    <div css={OfficeInfoStyles}>
      <Header title={INVITATION_VIEW_TEXTS.header.office} />

      <InvitationOfficeLocation />

      <InvitationOfficeMap />

      <InvitationVisitTip />
    </div>
  );
}

const OfficeInfoStyles = css`
  margin: 0 auto;
  ${mq.md} {
    max-width: 360px;
  }
  ${mq.lg} {
    max-width: 480px;
  }
  ${mq.tab} {
    max-width: 640px;
  }

  & > div {
    margin-bottom: 40px;
  }
`;

export default InvitationOfficeInfo;
