export class WebResponse<T> {
  success: boolean;
  message?: string;
  statusCode: number;
  data?: T;
  errors?: string;
}
