import type { Attribute, Schema } from '@strapi/strapi';

export interface SectionsColumn extends Schema.Component {
  collectionName: 'components_sections_columns';
  info: {
    displayName: 'Column';
  };
  attributes: {
    className: Attribute.String;
    content: Attribute.Blocks;
    groupId: Attribute.String;
  };
}

export interface SectionsHero extends Schema.Component {
  collectionName: 'components_sections_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    backgroundImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    className: Attribute.String;
    subtitle: Attribute.Blocks;
    title: Attribute.String;
  };
}

export interface SectionsImageBlock extends Schema.Component {
  collectionName: 'components_sections_image_blocks';
  info: {
    displayName: 'imageBlock';
  };
  attributes: {
    caption: Attribute.String;
    className: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Attribute.Required;
  };
}

export interface SectionsRow extends Schema.Component {
  collectionName: 'components_sections_rows';
  info: {
    displayName: 'row';
  };
  attributes: {
    className: Attribute.String;
    groupId: Attribute.String;
  };
}

export interface SectionsTextBlock extends Schema.Component {
  collectionName: 'components_sections_text_blocks';
  info: {
    displayName: 'textBlock';
  };
  attributes: {
    className: Attribute.String;
    text: Attribute.Blocks;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'sections.column': SectionsColumn;
      'sections.hero': SectionsHero;
      'sections.image-block': SectionsImageBlock;
      'sections.row': SectionsRow;
      'sections.text-block': SectionsTextBlock;
    }
  }
}
