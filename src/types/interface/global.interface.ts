export interface BlogInterface {
  id: number;
  title: string;
  body: string;
  userId: number;
  views: number;
  tags: string[];
  reactions: {
    likes: number;
    dislikes: number;
  };
}

export interface AuthorInterface {
  id: number;
  title: string;
  body: string;
  userId: number;
}

// export interface MessageInterface {
//   message: string;
// }

interface Country {
  country: string;
}

interface Temp {
  temp: number;
  feels_like: number;
  humidity: number;
}

interface Desc {
  description: string;
  icon: string;
}

export interface WeatherDataType {
  name: string;
  sys: Country;
  main: Temp;
  weather: Desc[];
}
