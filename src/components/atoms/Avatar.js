import React from 'react';
import { Image } from 'react-bootstrap';

const Avatar = ({ src, alt, size = 140 }) => (
    <Image
        src={src}
        alt={alt}
        roundedCircle
        width={size}
        height={size}
        className="mb-3 shadow border border-3 border-light"
        style={{
            objectFit: 'cover',
            objectPosition: 'center top'
        }}
    />
);

export default Avatar;