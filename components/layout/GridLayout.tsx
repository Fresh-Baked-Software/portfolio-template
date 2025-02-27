import React from 'react';
import styled from 'styled-components';

interface ImageProps {
    images: {
      sys: {
        id: string;
      };
      altText: string;
      image: {
        url: string;
        width: number;
        height: number;
      };
    }[];
  }

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
    gap: 2rem;
`;

const Image = styled.img`
    width: 100%;
    height: auto;
`;

const GridLayout: React.FC<ImageProps> = ({ images }) => {
    return (
        <GridContainer>
            {images.map((image) => (
                <Image key={image.sys.id} src={image.image.url} alt={image.altText} />
            ))}
        </GridContainer>
    );
};

export default GridLayout;