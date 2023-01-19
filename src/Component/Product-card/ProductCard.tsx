import classNames from 'classnames';
import React, { Fragment, useEffect, useState } from 'react';
import st from './style.module.scss';

interface IProps {
  subtitle: string;
  taste: string;
  portion: number;
  numberGifts: number;
  weight: number;
  composition: string;
  disable?: boolean;
  textForDisable: string;
}

export const ProductCard = ({
  subtitle,
  taste,
  portion,
  numberGifts,
  weight,
  composition,
  disable,
  textForDisable,
}: IProps) => {
  const [gift, setGift] = useState('Мышь');
  const [select, setSelect] = useState(false);
  const [selectedHover, setSelectedHover] = useState(false);

  useEffect(() => {
    if (numberGifts === 1) {
      setGift('мышь');
    } else if (numberGifts > 1 && numberGifts < 5) {
      setGift('мыши');
    } else {
      setGift('мышей');
    }
  }, [numberGifts]);

  return (
    <div className={st.flexItem}>
      <div
        className={classNames(
          st.cardBorder,
          { [st.selected]: select },
          { [st.blockDisable]: disable }
        )}
        onClick={() => (!disable ? setSelect(!select) : <></>)}
        onMouseLeave={() =>
          select && !disable ? setSelectedHover(true) : <></>
        }
        onMouseEnter={() =>
          select && !disable ? setSelectedHover(false) : <></>
        }
      >
        <div className={st.card}>
          <h5
            className={classNames(
              st.subTitle,
              { [st.selectedHover]: selectedHover },
              { [st.colorDisabled]: disable }
            )}
          >
            {selectedHover ? <>Котэ не одобряет?</> : <>{subtitle}</>}
          </h5>
          <h3 className={classNames(st.title, { [st.colorDisabled]: disable })}>
            <span>Нямушка</span>
            <br />с {taste}
          </h3>
          <p
            className={classNames(st.description, {
              [st.colorDisabled]: disable,
            })}
          >
            {portion} порций
            <br />
            {numberGifts} {gift} в подарок
          </p>
          <div
            className={classNames(
              st.weight,
              { [st.selected]: select },
              { [st.bgDisable]: disable }
            )}
          >
            {weight}
            <span>кг</span>
          </div>
        </div>
      </div>
      <a className={st.textAfterCard}>
        {disable ? (
          <div className={st.disableText}>{textForDisable}</div>
        ) : select ? (
          <>{composition}</>
        ) : (
          <>
            Чего сидишь? Порадуй котэ,{' '}
            <span onClick={() => setSelect(!select)}>купи.</span>
          </>
        )}
      </a>
    </div>
  );
};
