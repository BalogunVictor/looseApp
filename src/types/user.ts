export interface RootObject {
  message: string;
  status: string;
  payload: Payload;
}
export interface Payload {
  user: DashboardPayload;
  token: string;
}

export interface DashboardPayload {
  id: string;
  firstName: string;
  lastName: string;
  userType: string;
  username: string;
  isActive: boolean;
  showProfileImg: boolean;
  country: string;
  gender: string;
  email: string;
  password: string;
  online: boolean;
  profileImage: string;
  topics: string[];
  feeling: Feeling;
  language: string[];
  bio: null;
  emailVerified: boolean;
  allowNotification: boolean;
  averageRating: number;
  createdAt: string;
  updatedAt: string;
}

interface Feeling {}
