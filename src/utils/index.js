import { BASE_URL } from '@/Constants';

export const getRoomUrl = ({ roomCode }) => {
  return BASE_URL + '?room_code=' + roomCode;
};

export const getRoomPath = ({ roomCode }) => {
  return '?room_code=' + roomCode;
};
