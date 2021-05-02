export interface ILike {
  id: number;
}

export interface ILikeMe {
  id: number;
  photos: string[];
}

export interface IUser {
  id: number;
  name: string;
  title?: string;
  photos: string[];
  sex: 'male' | 'female';
  search: 'male' | 'female' | 'all';
  city: string;
  likeMe: ILikeMe[] | null;
  like: ILike[] | null;
  setLike?: (id: ILike) => void;
  removeLike?: (id: ILike) => void;
}
