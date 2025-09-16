// __mocks__/nextImageMock.js
import * as React from 'react';

// Mock do next/image para testes
const NextImage = ({ src = '', alt = '', ...props }) => {
    // Renderiza uma img normal
    return <img src={src} alt={alt} {...props} />;
};

export default NextImage;