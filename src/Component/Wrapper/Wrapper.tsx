import React, { ReactNode, useCallback } from 'react';
import st from './style.module.scss';

interface IProps {
  children: ReactNode;
}

export const Wrapper = ({ children }: IProps) => {
  return <div className={st.container}>{children}</div>;
};
