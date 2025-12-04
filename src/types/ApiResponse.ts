export interface LoginResponse {
  token: string;
  userId: string;
}

export interface RegisterResponse {
  message: string;
}

export interface GalleryResponse {
  photos: {
    _id: string;
    url: string;
    createdAt?: string;
  }[];
}
