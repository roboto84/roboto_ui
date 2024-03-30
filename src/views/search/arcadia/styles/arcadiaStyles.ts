import styled from 'styled-components';
import { GlobalThemeType } from '@/types';
import { NonListHoverable, Section } from '@/views/styles/appStyles';
import { device } from '@/styles/responsive';
import { Input } from '@/components/Input/Input';
import { InputTextArea } from '@/components/Input/InputTextArea';
import { TagGroupSectionProps } from '@/views/search/arcadia/types/arcadiaTypes';

export const ArcadiaContainer = styled.div`
  width: 75%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;

  @media ${device.laptopL} {
    width: 80%;
  }

  @media ${device.laptop} {
    width: 90%;
  }

  @media ${device.tablet} {
    width: 95%;
  }
`;

export const ColoredHeader = styled.h1`
  color: ${(props: GlobalThemeType) => props.theme.arcadia.search.alphabetHeaderColor};
`;

export const ArcRandomRecordContainer = styled.div`
  width: 100%;
`;

export const AlphabetHeader = styled(ColoredHeader)`
  margin-left: 0;
`;

export const SubTagHeader = styled(NonListHoverable)`
  background-color: ${(props: GlobalThemeType) => props.theme.button.backgroundColor};
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 17px;
  box-shadow: 0 0 0 1px rgba(0,0,0,0.06) ,0 2px 2px rgba(0,0,0,0.04) ,0 4px 4px rgba(0,0,0,0.05) ,0 6px 6px rgba(0,0,0,0.06);
  display: flex;
  justify-content: space-between;

  &.active {
    background-color: ${(props:GlobalThemeType) => props.theme.core.mainThemeColor};
    color: ${(props:GlobalThemeType) => props.theme.button.transitionFontColor};
  }
`;

export const SubTagCount = styled.span`
  background-color: ${(props: GlobalThemeType) => props.theme.pill.circle.backgroundColor};
  color: #010101;
  border-radius: 50%;
  height: 20px;
  width: 20px;
  font-style: unset;
  display: inline-block;
  text-align: center;
  margin: 3px 0 0 5px;
  font-size: 13px;
`;

export const SubTagHeaderContainer = styled.div`
  padding: 25px 0 0;

  a:link, a:visited {
    text-decoration: none;
    color: inherit
  }
`;

export const ArcResultOuterContainer = styled.div`
  padding-left: 25px;

  @media ${device.mobileXL} {
    padding-left: 0;
  }
`;

export const InnerLinks = styled.div`
  margin: 24px 0 43px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 16px 5px;

  a:link, a:visited {
    text-decoration: none;
    color: inherit
  }
`;
export const InlineHeader = styled.span`
  font-size: 25px;
  color: ${(props: GlobalThemeType) => props.theme.arcadia.search.alphabetHeaderColor};
`;

export const ArcResultContainer = styled(Section)`
  display: flex;
  flex-direction: row;
  border: 0;
  margin: 20px 0;
  font-size: 20px;
  box-shadow: 0 0 0 1px rgba(0,0,0,0.06) ,0 2px 2px rgba(0,0,0,0.04) ,0 4px 4px rgba(0,0,0,0.05) ,0 6px 6px rgba(0,0,0,0.06);

  a:link, a:visited {
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

export const ArcAddContainer = styled(ArcResultContainer)`
  flex-direction: column;
  margin-bottom: 0;
`;

export const TagsSection = styled(ArcResultContainer)<TagGroupSectionProps>`
  max-height: 170px;
  flex-direction: column;
  padding: 10px;
  font-size: 16px;
  border: ${(props: TagGroupSectionProps) => (
    props.isHighLight ? '3px' : '0px')} solid ${(props: TagGroupSectionProps) => (props.isHighLight ? props.theme.core.mainThemeColor : props.theme.air.weatherSubcategory.borderColor)};
`;

export const ArcImageContainer = styled.div`
  margin: 10px 0 0 0;
  display: inherit;

  @media ${device.tablet} {
    display: none;
  }
`;

export const ArcEditFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
`;

export const ArcEditFormInputGroupContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
`;

export const ArcEditFieldContainer = styled.div`
  flex-grow: 1;
`;

export const ArcEditButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
`;

export const ArcRecordFormContainer = styled.form<{ show: boolean }>`
  display: ${(props) => (props.show ? 'block' : 'none')};
`;

export const ArcAddFieldContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const ArcAddThrobberContainer = styled.div`
  height: 200px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ArcEditThrobberContainer = styled(ArcAddThrobberContainer)`
  height: 150px;
`;

export const ArcAddInputContainer = styled.div`
  margin-top: 10px;
  flex-grow: 1;
  position: relative;
`;

export const ArcResultTextContainer = styled.div`
  width: 100%;
`;

export const ArcResultFirstLine = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${device.laptop} {
    flex-direction: column;
  }
`;

export const ArcResultTitle = styled.span`
  color: ${(props: GlobalThemeType) => props.theme.arcadia.search.subTitleColor};
  font-size: 20px;
`;

export const ArcResultDescription = styled.span`
  font-size: 16px;
  white-space: break-spaces;
`;

export const ArcResultTimeStamp = styled.span`
  font-size: 16px;
  color: ${(props: GlobalThemeType) => props.theme.arcadia.search.timeColor};
`;

export const ArcResultDeleteQuestionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const ArcResultDeleteMessage = styled.div``;

export const ArcResultDeleteConfirmContainer = styled(ArcResultDeleteQuestionContainer)``;

export const ArcResultDeleteURL = styled.a`
  margin-top: 5px;
`;

export const ArcResultDeleteButtonContainer = styled.div`
  margin-top: 5px;
`;

export const ArcInputTitle = styled.div`
  font-size: 16px;
  margin: 2px;
`;

export const ArcInput = styled(Input)`
  font-size: 12px;
  width: calc(100% - 26px);
  border-radius: 5px;

  :focus{
    border-color: #696969;
    background-color: ${(props: GlobalThemeType) => props.theme.lexicon.searchBar.inputBackgroundColor};
    color: ${(props: GlobalThemeType) => props.theme.wh00t.miniWh00t.inputColor};
  }

  @media ${device.tabletS} {}
`;

export const AutoCompleteContainer = styled.ul<{ show: boolean }>`
  display: ${(props) => (props.show ? 'block' : 'none')};
  width: calc(100% - 12px);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border: 2px solid #696969;
  border-top: 0;
  background-color: ${(props: GlobalThemeType) => props.theme.input.autocompleteOptions.backgroundColor};
  color: ${(props: GlobalThemeType) => props.theme.input.autocompleteOptions.fontColor};
  font-size: 16px;
  position: absolute;
  padding: 10px 3px;
  margin: -3px 0;
  max-height: 225px;
  overflow-y: scroll;

  li {
    list-style: none;
    padding: 5px;
    display: flex;
    justify-content: space-between;

    .left {
      margin-left: 3px;
    }

    .right {
      margin-right: 5px;
    }
  }

  .active{
    background-color: ${(props: GlobalThemeType) => props.theme.input.autocompleteOptions.activeBackground};
    color: ${(props: GlobalThemeType) => props.theme.input.autocompleteOptions.activeFontColor
};
    border-radius: 3px;
  }
`;

export const ArcInputTextArea = styled(InputTextArea)`
  border-width: 2px;
  border-radius: 5px;
  width: calc(100% - 26px);
  font-size: 12px;
  font-family: Open Sans,Helvetica,Verdana,sans-serif;
  letter-spacing: 2px;

  :focus {
    border-color: #696969;
    background-color: ${(props: GlobalThemeType) => props.theme.lexicon.searchBar.inputBackgroundColor};
    color: ${(props: GlobalThemeType) => props.theme.wh00t.miniWh00t.inputColor};
  }
`;

export const ArcInitialDataContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  column-gap: 20px;
  justify-content: center;

  @media ${device.tablet} {
    flex-wrap: wrap;
  }
`;

export const ArcadiaSearchHomeContainer = styled.div`
  font-size: 17px;
  margin: 0 30px;
  color: ${(props:GlobalThemeType) => props.theme.lexicon.textColor};
`;

export const ArcChangeStatusContainer = styled.div`
  color: ${(props: GlobalThemeType) => props.theme.arcadia.search.subTitleColor};
  margin-top: 15px;
  border-top: 1px dotted;
  padding-top: 5px;
`;

export const ArcadiaStatsContainer = styled.div`
  min-width: 230px;

  @media ${device.tablet} {
    width: 100%;
  }
`;

export const ArcadiaStatsDataContainer = styled(ArcResultContainer)`
  flex-direction: column;
  flex-grow: 1;
  text-align: center;
  align-items: center;
`;

export const ArcadiaStatsCircle = styled.div`
  font-size: 30px;
  width: 110px;
  height: 110px;
  border-radius: 50%;
  line-height: 110px;
  text-align: center;
  color: ${(props: GlobalThemeType) => props.theme.button.backgroundColor};
  background-color: ${(props: GlobalThemeType) => props.theme.arcadia.search.subTitleColor};
`;

export const ArcadiaStatsLabel = styled.div`
  margin-top: 14px;
  font-size: 18px;
`;

export const ArcadiaNoResults = styled.div`
  display: flex;
  margin: 2rem 0;
  width: 100%;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
`;

export const ArcadiaNoResultsText = styled.div`
  margin: 0 1rem;
`;

export const ArcadiaMoreResultsButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 4rem 0;
`;
