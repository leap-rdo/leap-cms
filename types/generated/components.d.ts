import type { Schema, Struct } from '@strapi/strapi';

export interface SharedContactIcons extends Struct.ComponentSchema {
  collectionName: 'components_shared_contact_icons';
  info: {
    displayName: 'Contact Icons';
    icon: 'paperPlane';
  };
  attributes: {};
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedMetaSocial extends Struct.ComponentSchema {
  collectionName: 'components_shared_meta_socials';
  info: {
    description: '';
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    ogDescription: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    ogImage: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    ogTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    twitterDescription: Schema.Attribute.Text;
    twitterImage: Schema.Attribute.Media<'images' | 'files'>;
    twitterTitle: Schema.Attribute.String;
  };
}

export interface SharedPartner extends Struct.ComponentSchema {
  collectionName: 'components_shared_partners';
  info: {
    displayName: 'Partner';
  };
  attributes: {
    Icon: Schema.Attribute.Media<'images' | 'files'>;
    Name: Schema.Attribute.String;
  };
}

export interface SharedPointText extends Struct.ComponentSchema {
  collectionName: 'components_shared_point_texts';
  info: {
    displayName: 'Point Text';
  };
  attributes: {
    point: Schema.Attribute.Text;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
        minLength: 50;
      }>;
    metaImage: Schema.Attribute.Media<'images' | 'files' | 'videos'> &
      Schema.Attribute.Required;
    metaRobots: Schema.Attribute.String;
    metaSocial: Schema.Attribute.Component<'shared.meta-social', false>;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaViewport: Schema.Attribute.String;
    structuredData: Schema.Attribute.JSON;
  };
}

export interface SharedServicesSummary extends Struct.ComponentSchema {
  collectionName: 'components_shared_services_summaries';
  info: {
    displayName: 'Services Summary';
  };
  attributes: {
    Development: Schema.Attribute.Text;
    Operation: Schema.Attribute.Text;
    Research: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.contact-icons': SharedContactIcons;
      'shared.media': SharedMedia;
      'shared.meta-social': SharedMetaSocial;
      'shared.partner': SharedPartner;
      'shared.point-text': SharedPointText;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.services-summary': SharedServicesSummary;
    }
  }
}
