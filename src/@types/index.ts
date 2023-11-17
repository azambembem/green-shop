export interface HeroItemType {
  id: number;
  title: string;
  subTitle: string;
  description: string;
  buttonText: string;
  big_image_url: string;
  small_image_url: string;
}

export interface TrendItem {
  id: number;
}

export interface UserType {
  _id?: string;
  create_account_limit?: number;
  profile_photo?: string;
  surname?: string;
  email?: string;
  name?: string;
}

export interface AuthResponseType {
  message: "success" | "error";
  data: {
    token: string;
    user: UserType;
  };
}
