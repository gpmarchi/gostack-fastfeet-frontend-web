import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import { MdImage } from 'react-icons/md';
import PropTypes from 'prop-types';

import api from '../../../services/api';

import { Container } from './styles';

export default function AvatarInput({ deliveryman }) {
  const { defaultValue, registerField } = useField('avatar');

  const [preview, setPreview] = useState(defaultValue && defaultValue.url);
  const [file, setFile] = useState(defaultValue && defaultValue.id);

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'avatar_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }

    if (deliveryman) {
      setFile(deliveryman.id);
      setPreview(deliveryman.url);
    }
  }, [ref, registerField, deliveryman]);

  async function handleChange(event) {
    const data = new FormData();

    data.append('file', event.target.files[0]);

    const response = await api.post('/files', data);

    const { id, url } = response.data;

    setFile(id);
    setPreview(url);
  }

  return (
    <Container>
      <label htmlFor="avatar">
        {preview ? (
          <img src={preview} alt="" />
        ) : (
          <span>
            <MdImage size={50} color="#DDD" />
            <p>Adicionar foto</p>
          </span>
        )}

        <input
          type="file"
          id="avatar"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />
      </label>
    </Container>
  );
}

AvatarInput.propTypes = {
  deliveryman: PropTypes.shape({
    id: PropTypes.number,
    url: PropTypes.string,
  }),
};

AvatarInput.defaultProps = {
  deliveryman: undefined,
};
