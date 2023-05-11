export type CardPropsType = {
  id: number;
  profession: string;
  payment_from: number;
  currency: string;
  town: string;
  type_of_work: string;
};

export type CardListItemType = {
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
};
