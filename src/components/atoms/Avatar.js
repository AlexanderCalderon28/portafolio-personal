import React from 'react';
import { Image } from 'react-bootstrap';

const Avatar = ({ src, alt, size = 140 }) => (
    <Image
        src={src}
        alt={alt}
        roundedCircle
        width={size}
        height={size}
        className="mb-3"
    />
);

export default Avatar;