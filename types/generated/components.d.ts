import type { Schema, Attribute } from '@strapi/strapi';

export interface ObjetFeatureFeatures extends Schema.Component {
  collectionName: 'components_objet_feature_features';
  info: {
    displayName: 'features';
    icon: 'filter';
  };
  attributes: {
    feature: Attribute.String;
  };
}

export interface ObjetSpecificationSpecifications extends Schema.Component {
  collectionName: 'components_objet_specification_specifications';
  info: {
    displayName: 'specifications';
    icon: 'bulletList';
  };
  attributes: {
    name: Attribute.String;
    values: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'objet-feature.features': ObjetFeatureFeatures;
      'objet-specification.specifications': ObjetSpecificationSpecifications;
    }
  }
}
