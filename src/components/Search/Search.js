import React from 'react';
import { Button } from '../Button';
import { Cardbox } from '../Cardbox';
import { Input } from '../Input';
import { search, button, input } from './Search.module.scss';

export const Search = ({ searchValue, onChange, onClick }) => {
  return (
    <Cardbox title="Filtrar vagas">
      <div className={search}>
        <Input
          value={searchValue}
          onChange={onChange}
          type="text"
          className={input}
          placeholder="Insira uma palavra-chave e clique em buscar"
        />
        <Button
          buttonText="Buscar"
          kind="secondary"
          className={button}
          onClick={onClick}
        />
      </div>
    </Cardbox>
  );
};
