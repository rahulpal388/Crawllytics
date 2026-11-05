/*
 *   ApiResponseTemplete : this templete will be use to send a consistant response
 */
export type ApiResponseType<T = undefined> = T extends undefined
  ? {
      success: true;
      message: string;
    }
  : {
      success: true;
      message: string;
      data: T;
    };
