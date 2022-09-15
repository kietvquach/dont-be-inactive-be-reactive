import { useReactiveVar } from '@apollo/client';
import { List } from 'antd';
import { toDoListVar } from '../state';

const ItemList = () => {
  const toDoList = useReactiveVar(toDoListVar);

  return (
    <List
      style={{ borderColor: 'black' }}
      bordered
      dataSource={toDoList}
      renderItem={item => (
        <List.Item style={{ borderColor: 'black' }}>{item}</List.Item>
      )}
    />
  )
}

export default ItemList;