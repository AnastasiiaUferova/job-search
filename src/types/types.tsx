export type CardPropsType = {
  id: number;
  profession: string;
  payment_from: number;
  currency: string;
  town: string;
  type_of_work: string;
};

export interface CardListItemType {
  id: number;
  profession: string;
  payment_from: number;
  currency: string;
  town: {
    title: string;
  };
  type_of_work: {
    title: string;
  };
}

export interface CardListType {
  objects: CardListItemType[];
}

export type catalogueItemType = {
  key: number;
  positions: object[];
  title: string;
  title_rus: string;
  title_trimmed: string;
  url_rus: string;
};

export interface vacDetailsType extends CardListItemType {
  vacancyRichText: string;
}

export type detailsProps = {
  details: vacDetailsType;
};
