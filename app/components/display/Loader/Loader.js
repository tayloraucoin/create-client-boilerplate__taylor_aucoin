import { CheckCircle, CheckCircleOutline } from "@material-ui/icons";
import { RotateSpinner } from "react-spinners-kit";
import React from "react";
import styled from "styled-components";

import {
  c_brand_primary,
  c_brand_secondary
} from "../../../constants/styles/colors";

const Root = styled.div`
  bottom: 0;
  display: none;
  display: ${props => props.active && "flex"};
  height: 100vh;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  width: 100vw;
  z-index: 15;
`;

const Background = styled.div`
  background-color: ${c_brand_primary};
  height: 100vh;
  left: 0;
  opacity: 0.6;
  position: fixed;
  right: 0;
  top: 0;
  width: 100vw;
  z-index: 15;
`;

const SpinnerWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 100vw;
  z-index: 20;
`;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 240px;
`;

const ProgressMessages = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: 32px;
  position: absolute;
  top: 80px;

  div {
    margin-bottom: 8px;
  }

  div:last-child {
    margin-bottom: 0;
  }
`;

const Progress = styled.div`
  align-items: center;
  display: flex;

  svg {
    fill: ${c_brand_secondary};
    margin-right: 8px;
  }

  h4 {
    color: ${c_brand_secondary};
    margin: 0;
  }
`;

export default ({ loading, progressMessages }) => (
  <Root active={loading} className="loader">
    <Background />
    <SpinnerWrapper>
      <SpinnerContainer>
        <RotateSpinner
          id="loadingSpinner"
          size={80}
          color="#e8d5b4"
          loading={loading}
        />
        {progressMessages && Object.keys(progressMessages).length ? (
          <ProgressMessages>
            {Object.keys(progressMessages).map((key, index) => {
              const progressMessage = progressMessages[key];

              return (
                <Progress key={index}>
                  {progressMessages.length > 1 &&
                    (progressMessage.progress === progressMessage.total ? (
                      <CheckCircle />
                    ) : (
                      <CheckCircleOutline />
                    ))}
                  <h4>
                    {progressMessage.progress}/{progressMessage.total}
                    {progressMessage.message}
                  </h4>
                </Progress>
              );
            })}
          </ProgressMessages>
        ) : null}
      </SpinnerContainer>
    </SpinnerWrapper>
  </Root>
);
