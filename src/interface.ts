import { PageProps } from 'gatsby';

export type ITemplateProps<T> = PageProps<object, T> & {
  pageContext: {
    isCreatedByStatefulCreatePages: boolean;
  } & T;
};
