import styled from 'styled-components';
import { GlobalThemeType } from '@/types';
import { device } from '@/styles/responsive';

export const DebugHomeContainer = styled.div`
  margin: auto;
  width: calc(100vw - 100px);
  min-width: 400px;
  font-size: 14px;

  @media ${device.tabletS} {
    width: 95%;
    min-width: 335px;
  }
`;

export const DebugSectionContainer = styled.section`
  margin-top: 40px;

  @media ${device.mobileXL} {
    margin-top: 20px;
  }
`;

export const LatestMessage = styled.ul`{
  border: ${(props: GlobalThemeType) => props.theme.debug.latestMessageBorder} 5px solid;
  border-radius: 5px;
  padding: 20px;
  margin: 20px 50px;
  min-height: 25px;
  box-shadow: 0 0 0 1px rgba(0,0,0,0.06) , 0 2px 2px rgba(0,0,0,0.04) , 0 4px 4px rgba(0,0,0,0.05) , 0 6px 6px rgba(0,0,0,0.06);
  background-color: ${(props: GlobalThemeType) => props.theme.debug.messageBackgroundColor};

  li {
    list-style: none;
  }
  
  @media ${device.tabletS} {
    margin: 0;
  }
}`;

export const MessageHistory = styled.ul`{
  border: ${(props: GlobalThemeType) => props.theme.debug.messageHistoryBorder} 5px solid;
  border-radius: 5px;
  padding: 20px;
  margin: 20px 50px 0 50px;
  overflow: auto;
  min-height: 100px;
  height: calc(90vh - 325px);
  box-shadow: 0 0 0 1px rgba(0,0,0,0.06) , 0 2px 2px rgba(0,0,0,0.04) , 0 4px 4px rgba(0,0,0,0.05) , 0 6px 6px rgba(0,0,0,0.06);
  background-color: ${(props: GlobalThemeType) => props.theme.debug.messageBackgroundColor};

  li {
    list-style: none;
  }
  
  @media ${device.tabletS} {
    margin: 0;
  }
}`;

export const MessageContainer = styled.li`
    margin-bottom: 5px;
    white-space: break-spaces;
    word-break: break-word;
  
  .appTitle{
    color: ${(props: GlobalThemeType) => props.theme.debug.messageTitleColor};
    
    .messageId{
      color: ${(props: GlobalThemeType) => props.theme.debug.messageId};
    }
    .messageCategory{
      color: ${(props: GlobalThemeType) => props.theme.debug.messageCategory};
    }
    .messageTime{
      color: ${(props: GlobalThemeType) => props.theme.debug.messageTime};
    }
  }
  .appMessage{
    color: ${(props: GlobalThemeType) => props.theme.debug.messageTextColor}
  }
`;
