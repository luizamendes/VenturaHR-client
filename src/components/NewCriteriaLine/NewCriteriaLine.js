import React from 'react';
import { Input } from '../../components/Input';
import { GrAddCircle } from 'react-icons/gr';
import { generateId } from '../../utils';
import './index.scss';

export const NewCriteriaLine = ({ criteriaList, setCriteriaList }) => {
  const handleAddLine = e => {
    e.preventDefault();
    const newCriteriaList = [...criteriaList];
    newCriteriaList.push({
      id: generateId(),
      name: '',
      description: '',
      profile: 1,
      weight: 3,
    });
    setCriteriaList(newCriteriaList);
  };

  const onChange = e => {
    const { name, value } = e.target;
    const [param, criteriaId] = name.split('-');
    const newCriteriaList = criteriaList.map(criteria => {
      if (criteria.id === criteriaId) {
        criteria[param] = value;
      }

      return criteria;
    });

    setCriteriaList([...newCriteriaList]);
  };

  const renderCriteriaLine = ({ id, name, description, profile, weight }) => {
    return (
      <tr key={id} className="new-criteria__line">
        <td>
          <Input value={name} name={`name-${id}`} onChange={onChange} />
        </td>
        <td>
          <Input
            name={`description-${id}`}
            value={description}
            onChange={onChange}
          />
        </td>
        <td>
          <select
            defaultValue={profile}
            className="select"
            onChange={onChange}
            name={`profile-${id}`}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </td>
        <td>
          <select
            defaultValue={weight}
            className="select"
            onChange={onChange}
            name={`weight-${id}`}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </td>
        <td>
          <button type="button" onClick={handleAddLine}>
            <GrAddCircle />
          </button>
        </td>
      </tr>
    );
  };

  return (
    <table className="new-criteria">
      <thead className="new-criteria__header">
        <tr>
          <th className="new-criteria__header__column">Nome</th>
          <th className="new-criteria__header__column">Descrição</th>
          <th className="new-criteria__header__column">Perfil</th>
          <th className="new-criteria__header__column">Peso</th>
          <th className="new-criteria__header__column"></th>
        </tr>
      </thead>
      <tbody>{criteriaList.map(renderCriteriaLine)}</tbody>
    </table>
  );
};
