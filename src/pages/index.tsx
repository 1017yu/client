import Button from '@/components/common/Button';
import Head from 'next/head';
import Header from '@/components/common/Header';
import Toggle from '@/components/common/Toggle';
import RadioBtn from '@/components/common/RadioBtn';
import InvitationFindRoadBtn from '@/components/invitation/view/InvitationFindRoadBtn';
import CheckBox from '@/components/common/CheckBox';
import Roulette from '@/components/Roulette';
import BottomSheet from '@/components/common/BottomSheet';
import useBottomSheetStore from '@/stores/useBottomSheetStore';
import Fnb from '@/components/common/Fnb';

function Home() {
  const onClickHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    alert('onClick Test');
  };

  // RadioBtn 예시 데이터, API 확인 후 변경 예정
  const arr = ['test1', 'test2', 'test3'];

  // BottomSheet 테스트
  const { bottomSheetState, openBottomSheet } = useBottomSheetStore();

  const onClickBottomSheetHandler = () => {
    openBottomSheet(<div>테스트입니다.</div>);
  };

  return (
    <>
      <Head>
        <title>Officener</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Button content="Button" variant="blue" isDisabled />

      <Button content="Button" variant="blue" />
      <Button content="Button" variant="grey" />
      <Button content="Button" variant="grey" isDisabled />
      <Button content="Button" variant="secondaryBlue" />
      <Button content="Button" variant="secondaryGrey" />

      {/* 우측 text가 있는 경우 */}
      <Header title="title" type="text" onClick={onClickHandler} />
      {/* 우측 close 아이콘이 있는 경우 */}
      <Header title="title" type="close" onClick={onClickHandler} />
      {/* title만 있는 경우  */}
      <Header title="title" onClick={onClickHandler} />

      {/* list-데이터 배열, name-데이터 유형) */}
      <RadioBtn list={arr} name="초대 장소" placeholder="장소를 입력하세요" />
      <CheckBox text="테스트 메시지" />
      <CheckBox text="테스트 메시지2" />

      <Toggle />
      <Roulette />
      <InvitationFindRoadBtn />

      <button type="button" onClick={onClickBottomSheetHandler}>
        누르면 바텀시트가 열립니다.
      </button>
      {bottomSheetState.isOpen && <BottomSheet />}
      <Fnb />
    </>
  );
}

export default Home;
