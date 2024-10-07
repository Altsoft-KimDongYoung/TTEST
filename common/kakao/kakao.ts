/**@COMMON 카카오톡 공유하기 API 모듈
 * https://developers.kakao.com/sdk/reference/js/release/Kakao.Share.html
 */
export interface KakaoShareOptions {
  objectType: 'feed';
  content: {
    title: string;
    description?: string;
    imageUrl: string;
    imageWidth?: number;
    imageHeight?: number;
    link: {
      mobileWebUrl: string;
      webUrl: string;
    };
  };
  buttons?: {
    title: string;
    link: {
      mobileWebUrl: string;
      webUrl: string;
    };
  }[];
}

/**@COMMON 카카오 기능 관련 필수 요소를 담은 공통 모듈
 * https://developers.kakao.com/sdk/reference/js/release/Kakao.html
 */
export interface KakaoSDK {
  init: (appKey: string) => void;
  isInitialized: () => boolean;
  Share: {
    sendDefault: (settings: KakaoShareOptions) => void;
  };
}
