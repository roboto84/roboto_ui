import {
  formatUrl,
  getLocalStandardDateTime,
  imageUrlCompletion,
  substringDotted,
  urlArrowSplit,
} from '@/utils/formatting';
import {
  ArcImageContainer,
  ArcChangeStatusContainer,
  ArcResultDescription,
  ArcResultFirstLine,
  ArcResultTextContainer,
  ArcResultTimeStamp,
  ArcResultTitle,
} from '@/views/search/arcadia/styles/arcadiaStyles';
import React from 'react';
import { Link } from 'react-router-dom';
import { ArcResultViewProps, ArcResultDisplay } from '@/views/search/arcadia/types/arcadiaTypes';
import { Pill, PillContainer } from '@/views/styles/appStyles';
import { Button } from '@/components/Nav/Button';
import { BsFillImageFill } from 'react-icons/bs';
import { BiCopy } from 'react-icons/bi';
import { ImageWithPlaceHolder } from '@/components/Images/ImageWithPlaceHolder';
import { copyToClipboard } from '@/utils/utils';

export function ArcResultView(props: ArcResultViewProps) {
  const { _ref, arcResultPackage, onEdit, onDelete, navigate, displayMessage } = props;
  const { timeStamp, data, tags, title, description, image } = arcResultPackage;
  const formattedTimeStamp: string = timeStamp && timeStamp.indexOf('Z') > -1
    ? getLocalStandardDateTime(true, timeStamp, true)
    : timeStamp;

  const isImageValid = image && image !== 'None';
  const resultImage: JSX.Element = isImageValid
    ? (
      <ImageWithPlaceHolder
        borderRadius="5px"
        maxWidth="175px"
        height="75"
        src={imageUrlCompletion(data, image)}
        alt="img"
        placeHolderImage={<BsFillImageFill style={{ fontSize: '60px' }} />}
        lazyLoad
      />
    )
    : null;

  const tagsView = tags ? tags.map((tag: string) => (
    <Link key={'resultTagListItem'.concat(tag)} to={navigate.concat(tag)}>
      <Pill>
        {tag}
      </Pill>
    </Link>
  )) : <span />;

  const descriptionView: JSX.Element = description !== 'None'
    ? <ArcResultDescription><span>{`${description}`}</span></ArcResultDescription>
    : null;

  const changeMessage: JSX.Element = displayMessage !== ''
    ? <ArcChangeStatusContainer ref={_ref}>{displayMessage}</ArcChangeStatusContainer>
    : null;

  return (
    <>
      <ArcImageContainer>
        {resultImage}
      </ArcImageContainer>
      <ArcResultTextContainer style={isImageValid ? { paddingLeft: '20px' } : {}}>
        <ArcResultFirstLine>
          <span>
            <ArcResultTitle>{title === 'None' ? 'No title' : title}</ArcResultTitle>
            <span> | </span>
            <ArcResultTimeStamp>{formattedTimeStamp}</ArcResultTimeStamp>
          </span>
          <span>
            <span style={{ display: 'flex' }}>
              <Button
                fontSize="12px"
                letterSpacing="2px"
                padding="2px 8px 0 8px"
                margin="3px"
                borderRadius="5px"
                onClick={() => copyToClipboard(data)}
                title="Copy Link"
              >
                <BiCopy />
              </Button>
              <Button
                fontSize="12px"
                letterSpacing="2px"
                padding="2px 8px"
                margin="3px"
                borderRadius="5px"
                onClick={() => onEdit(ArcResultDisplay.EDIT)}
                title="Edit Item"
              >
                Edit
              </Button>
              <Button
                fontSize="12px"
                letterSpacing="2px"
                padding="2px 8px"
                margin="3px"
                borderRadius="5px"
                onClick={() => onDelete(ArcResultDisplay.DELETE)}
                title="Delete Item"
              >
                Delete
              </Button>
            </span>
          </span>
        </ArcResultFirstLine>
        <div>
          <a style={{ fontSize: '16px' }} href={data} rel="noreferrer" target="_blank">
            {substringDotted(urlArrowSplit(formatUrl(data)), 100)}
          </a>
        </div>
        {descriptionView}
        <PillContainer>
          {tagsView}
        </PillContainer>
        {changeMessage}
      </ArcResultTextContainer>
    </>
  );
}
