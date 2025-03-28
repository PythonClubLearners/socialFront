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
