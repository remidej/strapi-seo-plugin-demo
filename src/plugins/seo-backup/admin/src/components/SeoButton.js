import React from 'react';
import { Button } from '@strapi/design-system'
import Search from '@strapi/icons/Search';
import { useCMEditViewDataManager } from '@strapi/helper-plugin';

const SeoButton = () => {
  const { slug, modifiedData } = useCMEditViewDataManager();

  if (slug === 'api::global.global') {
    return null;
  }

  const handleClick = () => {
    const urlFriendlyTitle = encodeURIComponent(modifiedData.metadata.metaTitle)
    const searchUrl = `https://www.google.com/search?q=${urlFriendlyTitle}`;
    window.open(searchUrl, '_blank').focus();
  }

  return (
    <Button
      variant='secondary'
      startIcon={<Search />}
      onClick={handleClick}
    >
      Check SEO
    </Button>
  )
}

export default SeoButton;
