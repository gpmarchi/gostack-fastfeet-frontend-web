export const parcelStatus = parcel => {
  if (!parcel.cancelled_at && parcel.start_date && parcel.end_date) {
    return {
      id: 1,
      name: 'ENTREGUE',
    };
  }

  if (parcel.cancelled_at) {
    return {
      id: 2,
      name: 'CANCELADA',
    };
  }

  if (!parcel.cancelled_at && parcel.start_date && !parcel.end_date) {
    return {
      id: 3,
      name: 'RETIRADA',
    };
  }

  if (!parcel.cancelled_at && !parcel.start_date && !parcel.end_date) {
    return {
      id: 4,
      name: 'PENDENTE',
    };
  }

  return {};
};

export const filterSelect = (inputValue, objectArray) =>
  objectArray.filter(object =>
    object.label.toLowerCase().includes(inputValue.toLowerCase())
  );
