import { connect } from "react-redux";
import React from "react";
import styled, { css } from "styled-components";

import { c_brand_primary, c_white } from "../../../constants/styles/colors";
import { setModalToggle } from "../../../store/actions/actions-application";
import { tabletProWidth } from "../../../constants/styles/devices";
import Clear from "../../icons/Clear";

const Root = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  bottom: 0;
  display: ${props => (props.visible ? "block" : "none")};
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1;
`;

const noPaddingBoxStyle = css`
  @media screen and (max-width: ${tabletProWidth}px) {
    height: 100%;
    max-height: 100vh;
    max-width: 100%;
    width: 100%;
  }
`;

const Box = styled.div`
  aling-items: center;
  background-color: ${c_white};
  border-radius: 8px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.25);
  display: flex;
  flex-wrap: wrap;
  jusitfy-content: center;
  left: 50%;
  max-height: 90vh;
  max-width: 90%;
  min-height: 700px;
  min-width: 600px;
  overflow: hidden;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: ${props =>
    props.fixedWidth ? "600px" : props.noPadding ? "1200px" : "fit-content"};

  @media screen and (max-width: 640px) {
    min-width: calc(100% - 40px);
  }

  ${props => props.noPadding && noPaddingBoxStyle};
`;

const noPaddingHeaderStyle = css`
  @media screen and (max-width: ${tabletProWidth}px) {
    display: none;
  }
`;

const Header = styled.header`
  background-color: ${c_brand_primary};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  height: 32px;
  width: 100%;

  svg {
    cursor: pointer;
    fill: ${c_white};
    height: 24px;
    position: absolute;
    right: 6px;
    top: 4px;
    width: 24px;
  }

  ${props => props.noPadding && noPaddingHeaderStyle};
`;

const noPaddingContentStyle = css`
  padding: 0;
  width: 100%;

  @media screen and (max-width: ${tabletProWidth}px) {
    height: 100%;
    max-height: 100%;
    width: 100%;
  }
`;

const Content = styled.div`
  height: calc(100% - 96px);
  max-height: 79vh;
  min-height: calc(700px - 96px);
  overflow-y: auto;
  padding: 32px;
  position: relative;
  width: calc(100% - 64px);

  ${props => props.noPadding && noPaddingContentStyle};
`;

const noPaddingChildWrapperStyle = css`
  @media screen and (max-width: ${tabletProWidth}px) {
    height: 100%;
  }
`;

const ChildWrapper = styled.div`
  display: flex;
  min-height: calc(700px - 96px);
  width: 100%;

  ${props => props.noPadding && noPaddingChildWrapperStyle};
`;

const Modal = props => {
  const {
    children,
    header,
    fixedWidth,
    noPadding,
    setModalToggle,
    visible
  } = props;
  let boxRef = null;

  const handleRootOnClick = event => {
    if (!boxRef.contains(event.target)) {
      setModalToggle(false);
    }
  };

  return (
    <Root onClick={event => handleRootOnClick(event)} visible={visible}>
      <Box
        fixedWidth={fixedWidth}
        noPadding={noPadding}
        ref={box => {
          boxRef = box;
        }}
      >
        {header && (
          <Header id="modal-header" noPadding={noPadding}>
            <a
              href="#dismiss"
              onClick={event => {
                event.preventDefault();
                setModalToggle(false);
              }}
            >
              <Clear />
            </a>
          </Header>
        )}
        <Content noPadding={noPadding}>
          <ChildWrapper noPadding={noPadding}>{children}</ChildWrapper>
        </Content>
      </Box>
    </Root>
  );
};

const mapDispatchToModalProps = dispatch => {
  return {
    setModalToggle: boolean => {
      dispatch(setModalToggle(boolean));
    }
  };
};

const mapStateToModalProps = ({ application }) => {
  return {
    ...application.modal
  };
};

export default connect(
  mapStateToModalProps,
  mapDispatchToModalProps
)(Modal);
