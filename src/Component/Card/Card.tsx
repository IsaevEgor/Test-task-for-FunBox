import React from 'react';
import { ProductCard } from '../Product-card/ProductCard';
import { Title } from '../Title/Title';
import { Wrapper } from '../Wrapper/Wrapper';
import st from './style.module.scss';

export const Card = () => {
  return (
    <Wrapper>
      <div className={st.flexBlock}>
        <div className={st.bodyTitle}>
          <Title text="Ты сегодня покормил кота?" />
        </div>
        <ProductCard
          subtitle="Сказочное заморское яство"
          taste="фуа-гра"
          portion={10}
          numberGifts={1}
          weight={0.5}
          composition="Печень утки разварная с артишоками."
          textForDisable="Печалька, с фуа-гра закончился."
        />
        <ProductCard
          subtitle="Сказочное заморское яство"
          taste="рыбой"
          portion={40}
          numberGifts={3}
          weight={2}
          composition="Головы щучьи с чесноком да свежайшая сёмгушка."
          textForDisable="Печалька, с рыбой закончился."
        />
        <ProductCard
          subtitle="Сказочное заморское яство"
          taste="курой"
          portion={100}
          numberGifts={5}
          weight={5}
          composition="Филе из цыплят с трюфелями в бульоне."
          textForDisable="Печалька, с курой закончился."
          disable
        />
      </div>
    </Wrapper>
  );
};
