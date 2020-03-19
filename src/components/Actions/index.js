/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  MdMoreHoriz,
  MdVisibility,
  MdModeEdit,
  MdDeleteForever,
} from 'react-icons/md';

import history from '../../services/history';

import { Container, MoreActions, ActionList, Action } from './styles';

export default function Actions({ actions, target, object }) {
  const [visible, setVisible] = useState(false);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  function handleEdit() {
    history.push({ pathname: target, state: { rawParcel: object } });
  }

  return (
    <Container>
      <MoreActions onClick={handleToggleVisible}>
        <MdMoreHoriz size={25} color="#C6C6C6" />
      </MoreActions>

      <ActionList visible={visible}>
        <div>
          {actions.map(action =>
            action === 'Visualizar' ? (
              <Action onClick={() => alert('visualizar')}>
                <MdVisibility size={15} color="#8E5BE8" />
                {action}
              </Action>
            ) : action === 'Editar' ? (
              <Action onClick={handleEdit}>
                <MdModeEdit size={15} color="#4D85EE" />
                {action}
              </Action>
            ) : (
              <Action onClick={() => alert('excluir')}>
                <MdDeleteForever size={15} color="#DE3B3B" />
                {action}
              </Action>
            )
          )}
        </div>
      </ActionList>
    </Container>
  );
}

Actions.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.string).isRequired,
  target: PropTypes.string.isRequired,
  object: PropTypes.shape().isRequired,
};
