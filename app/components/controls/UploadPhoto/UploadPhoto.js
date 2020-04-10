import React from "react";
import styled from "styled-components";

import {
  c_black,
  c_brand_primary,
  c_brand_secondary,
  c_grey_medium
} from "../../../constants/styles/colors";
import { f_margin_bottom } from "../../../constants/styles/format";
import { t_font_family_title } from "../../../constants/styles/typography";
import colorHexRGB from "../../../utils/color-hex-rgb";

const Root = styled.div`
  background-color: ${props =>
    props.photoSrc
      ? `rgb(${colorHexRGB(c_brand_secondary, "rgb")}, 0.4)`
      : "white"};
  border-radius: 4px;
  box-shadow: 0 0 3px ${c_brand_primary};
  display: flex;
  flex-wrap: wrap;
  height: fit-content;
  justify-content: center;
  padding: 1rem;
  position: relative;
  width: 12rem;

  svg {
    height: 12rem;
    width: 12rem;
  }

  ${props => props.marginBottom && f_margin_bottom};
`;

const Image = styled.img`
  height: 100%;
  object-fit: cover;
  width: 100%;
`;

const PhotoInput = styled.input`
  height: 0.1px;
  margin: 1rem auto 0;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  text-align: center;
  width: 0.1px;
  z-index: -1;
`;

const PhotoLabel = styled.label`
  align-items: center;
  background-color: ${c_black};
  border-radius: 0.25rem;
  color: white;
  cursor: pointer;
  display: flex;
  font-size: 0.9rem;
  font-weight: bold;
  height: 20px;
  justify-content: center;
  margin-top: 1rem;
  padding: 5px 0 3px;
  text-align: center;
  width: 166px;

  span {
    font-family: ${t_font_family_title}
    height: fit-content;
  }

  &:hover {
      background-color: ${c_grey_medium};
  }
`;

export default ({ label, marginBottom, name, photoSrc, upload }) => {
  const uploadFile = e => {
    const file = e.target.files[0];

    Object.assign(file, {
      src: URL.createObjectURL(file)
    });

    upload({ name, value: file });
  };

  return (
    <Root
      className="upload-photo"
      marginBottom={marginBottom}
      photoSrc={photoSrc}
    >
      <Image
        className="profilePicture"
        src={
          photoSrc ||
          "https://agora-networker.s3-us-west-2.amazonaws.com/placeholder.jpg"
        }
      />
      <PhotoInput
        id={`profilePhotoFile_${name}`}
        name="profilePhotoFile"
        onChange={uploadFile}
        type="file"
      />
      <PhotoLabel
        className="replacePhotoLabel"
        htmlFor={`profilePhotoFile_${name}`}
      >
        <span>{label}</span>
      </PhotoLabel>
    </Root>
  );
};
