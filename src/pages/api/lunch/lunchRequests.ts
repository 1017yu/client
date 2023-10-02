import { Response } from '@/types/common/response';
import { apiInstance } from '@/pages/api/axios';
import {
  GetMenuReviewsData,
  GetMenusData,
  GetRankingData,
  GetRestListData,
  PostMenuContent,
} from '@/types/lunch/api';

export const getMenus = async (): Promise<Response<GetMenusData[]>> => {
  const response = await apiInstance.get(`menus`);
  return response.data;
};

// 아직 데이터 없음. 사용 불가
// * GET 가장 많이 선택한 메뉴 10위까지의 응답
export const getRanking = async ({
  buildingId,
}: {
  buildingId: number;
}): Promise<Response<GetRankingData[]>> => {
  const response = await apiInstance.get(`menus/buildings/${buildingId}`);
  return response.data;
};

// * GET 특정 메뉴에 대한 리뷰 리스트 응답
export const getMenuReviews = async (
  menuId: number,
): Promise<Response<GetMenuReviewsData[]>> => {
  const response = await apiInstance.get(`reviews/menus/${menuId}`);
  return response.data;
};

// * GET 특정 메뉴를 판매하는 식당 목록 응답
export const getRestList = async (
  menuId: number,
  page?: number,
): Promise<Response<GetRestListData[]>> => {
  const response = await apiInstance.get(
    `restaurants/menus/${menuId}?page=${page}`,
  );
  return response.data;
};

// * GET 최신 리뷰 리스트 응답
export const getReviewList = async ({
  buildingId,
}: {
  buildingId: number;
}): Promise<Response<GetMenuReviewsData[]>> => {
  const response = await apiInstance.get(`reviews/buildings/${buildingId}`);
  return response.data;
};

// * GET 특정 음식점 리뷰 리스트 응답
export const getRestReviewList = async ({
  restaurantId,
  page,
}: {
  restaurantId?: number;
  page?: number;
}): Promise<Response<GetMenuReviewsData[]>> => {
  const response = await apiInstance.get(
    `reviews/restaurants/${restaurantId}?page=${page}`,
  );
  return response.data;
};

// * POST 룰렛 메뉴 선택 완료
export const postMenu = async (content: PostMenuContent) => {
  const response = await apiInstance.post(`menus/choices`, content);
  return response.data;
};
