export interface Book {
  book?: Label;
  series_label?: Label;
  genre_label?: Label ;
  publicationDate?: Label ;
  bookLabel?: Label;
  authorLabel?: Label;
}

export interface Label {
  type: string;
  value: string;
}

