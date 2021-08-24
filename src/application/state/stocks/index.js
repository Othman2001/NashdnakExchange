/* eslint-disable import/no-named-as-default */
import {
  createStateHook, createActionsHook, createEffectsHook, createReactionHook,
} from 'overmind-react';
import state from './state';
import actions from './action';
import * as effects from '../../../infstracture/effects/StokcsApi/stocks.effects.api';

export {
  state,
  actions,
  effects,
};
export const useAppState = createStateHook();
export const userActions = createActionsHook();
export const useEffects = createEffectsHook();
export const useReaction = createReactionHook();
