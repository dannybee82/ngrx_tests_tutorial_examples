export interface BookInterface {
    id: string;
    volumeInfo: {
      title: string;
      authors: Array<string>;
    };
}