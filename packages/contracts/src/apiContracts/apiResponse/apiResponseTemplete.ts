/*
 *   ApiResponseTemplete : this templete will be use to send a consistant response
 */
type A = undefined;
export type ApiResponseType<T extends A = undefined> = T extends undefined
  ? {
      success: true;
      message: string;
    }
  : {
      success: true;
      message: string;
      data: T;
    };
