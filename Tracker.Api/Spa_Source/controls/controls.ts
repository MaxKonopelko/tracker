export enum Patterns
{
  ImageUrl = 'https?:\\/\\/.*\\.(?:png|jpg|jpeg|gif)',
  MusicUrl = 'https?:\\/\\/.*\\.(?:mp3)',
  FilmUrl  = 'https?:\\/\\/.*\\.(?:mp4)',
  Name     = '[A-Za-zА-Яа-яЁё0-9 ]{6,15}',
  Email    = '\\S+@\\S+\\.\\S+',

}