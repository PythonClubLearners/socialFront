import { Post, User } from "./types"

export const mock_user_1: User = {

    id: 3,

    username: "gooduser",

    firstName: "Иван",

    lastName: "Тестович",

    description: "Это пример страницы пользователя",

}


export const mock_user_2: User = {

    id: 4,

    username: "frienduser",

    firstName: "Иван",

    lastName: "Дружелюбный",

    description: "Это пример страницы пользователя",

    avatar: "defaultImage",

}

  
  

export const mock_all_users = [

    mock_user_1, mock_user_2

]

  

export const mock_post_1: Post = {

    id: 1,

    title: "Пост первый",

    description: "Что то тут написано",

    author: 3,

}

  
  

export const mock_post_2: Post = {

    id: 2,

    image: "defaultImage",

    title: "Пост второй",

    description: "Что то тут написано",

    author: 4,

}

  
  

export const mock_posts = [

    mock_post_1,

    mock_post_2

]

  

export const mock_friends_invite = [

    3,

    4

]

  

export const mock_friends = [

    4

]
