/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  MdMoreHoriz,
  MdVisibility,
  MdModeEdit,
  MdDeleteForever,
} from 'react-icons/md';

import ViewModal from '../ViewModal';

import history from '../../services/history';

import { Container, MoreActions, ActionList, Action } from './styles';

export default function Actions({ actions, target, object, callback }) {
  const [visible, setVisible] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  function handleEdit() {
    history.push({ pathname: target, state: { object } });
  }

  async function handleDelete() {
    const remove = target ? 'excluir o registro' : 'cancelar a encomenda';
    const confirm = window.confirm(`Deseja realmente ${remove}?`);
    if (confirm) {
      callback();
    }
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
              <Action key={action} onClick={() => setOpenModal(true)}>
                <MdVisibility size={15} color="#8E5BE8" />
                {action}
              </Action>
            ) : action === 'Editar' ? (
              <Action key={action} onClick={handleEdit}>
                <MdModeEdit size={15} color="#4D85EE" />
                {action}
              </Action>
            ) : (
              <Action key={action} onClick={handleDelete}>
                <MdDeleteForever size={15} color="#DE3B3B" />
                {action}
              </Action>
            )
          )}
        </div>
      </ActionList>

      <ViewModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        page={target}
        object={object}
      />
    </Container>
  );
}

Actions.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.string).isRequired,
  target: PropTypes.string.isRequired,
  object: PropTypes.shape().isRequired,
  callback: PropTypes.func.isRequired,
};
