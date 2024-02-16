import React from 'react';
import { useWh00tWebsocket } from '@/context/wh00tContext';
import Wh00tConnect from '@/views/wh00t/components/Wh00tConnect/Wh00tConnect';
import { useLocation } from 'react-router-dom';
import {
  Wh00tActionsEnum,
  Wh00tMessageTypeEnum,
  Wh00tWindowStateEnum,
} from '@/context/types/enums';
import { BsFillChatTextFill } from 'react-icons/bs';
import { ElementSize } from '@/views/wh00t/types/wh00tTypes';
import { Size } from '@/types';
import Wh00tConnectionStatus from '@/views/wh00t/components/Wh00tConnect/Wh00tConnectStatus';
import { Wh00tChatInput } from './components/Wh00tChatInput/Wh00tChatInput';
import { Wh00tMessages } from './components/Wh00tMessages/Wh00tMessages';
import {
  MinimizedWh00tButton,
  MinimizedWh00tIconContainer,
  Wh00tMiniContainer,
} from './styles/wh00tMiniStyle';
import { Wh00tChatHeader } from './components/Wh00tChatHeader/Wh00tChatHeader';

export function Wh00tMini() {
  const { pathname } = useLocation();
  const { state, dispatch } = useWh00tWebsocket();
  const isWh00tLarger: boolean = (pathname.includes('chat')) || state.wh00tWindowState === Wh00tWindowStateEnum.MAX;
  const wh00tWindowSwitch = (newWindowState: Wh00tWindowStateEnum) => {
    let dispatchAction: Wh00tActionsEnum = Wh00tActionsEnum.WINDOW_MIN;

    if (newWindowState === Wh00tWindowStateEnum.MED) {
      dispatchAction = Wh00tActionsEnum.WINDOW_MED;
    } else if (newWindowState === Wh00tWindowStateEnum.MAX) {
      dispatchAction = Wh00tActionsEnum.WINDOW_MAX;
    }
    dispatch({
      source: Wh00tMessageTypeEnum.LOCAL,
      type: dispatchAction,
    });
  };
  const miniChatHeader: JSX.Element = (
    <Wh00tChatHeader
      headerSize={ElementSize.SMALL}
      headerButtons={{
        maximize: true,
        minimize: true,
        disconnect: true,
      }}
      windowSwitch={wh00tWindowSwitch}
    />
  );

  if (isWh00tLarger) {
    return null;
  }

  if (state.wh00tWindowState === Wh00tWindowStateEnum.MIN) {
    return (
      <MinimizedWh00tButton
        title="Wh00t Mini Chat"
        onClick={() => wh00tWindowSwitch(Wh00tWindowStateEnum.MAX)}
      >
        <MinimizedWh00tIconContainer>
          <BsFillChatTextFill />
        </MinimizedWh00tIconContainer>
      </MinimizedWh00tButton>
    );
  }

  if (state.wh00tIsConnected) {
    return (
      <Wh00tMiniContainer>
        {miniChatHeader}
        <Wh00tMessages showBackgroundImage={false} />
        <Wh00tChatInput />
      </Wh00tMiniContainer>
    );
  } if (state.wh00tIsConnecting || state.wh00tConnectionError) {
    return (
      <Wh00tMiniContainer>
        {miniChatHeader}
        <Wh00tConnectionStatus size={Size.small} connectionStatus="Connecting" />
      </Wh00tMiniContainer>
    );
  }

  return (
    <Wh00tMiniContainer>
      {miniChatHeader}
      <Wh00tConnect size={Size.small} />
    </Wh00tMiniContainer>
  );
}
