interface UniqueObject{
    id: number;
}

export interface User extends UniqueObject{
    username: string;
    firstName: string;
    lastName: string;
    description: string;
    avatar?: string;
}

export interface Post extends UniqueObject{
    image?: string;
    title: string;
    description: string;
    author: number;
}