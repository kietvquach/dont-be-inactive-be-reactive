import { useReactiveVar } from '@apollo/client';
import { Button, Input, Space } from 'antd';
import { useEffect, useState } from 'react';
import { toDoListVar, timerVar } from '../state';


const AddForm = () => {
  const [item, setItem] = useState('');
  const [timerStart, setTimerStart] = useState(false);
  const toDoList = useReactiveVar(toDoListVar);
  const timer = useReactiveVar(timerVar);

  useEffect(() => {
    let interval = null;
    if (timerStart) {
      interval = setInterval(() => {
        timerVar(timer + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [timerStart, timer])

  const handleOnClick = () => {
    if (item !== '') {
      toDoListVar([...toDoList, item]);
      setItem('');

      // start timer
      if (!timerStart) {
        setTimerStart(true);
      }
    }
  }

  const handleOnInputChange = (e) => {
    setItem(e.target.value);
  }

  return (
    <>
      <Input.Group>
      <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
              <Input style={{ borderColor: 'black' }} onChange={handleOnInputChange} value={item} placeholder='What should I react to today?' />
              <div style={{ textAlign: 'center' }}>
                <Button style={{ width: '50%', textAlign: 'center' }} type='primary' onClick={handleOnClick}>Add!</Button>
              </div>
        </Space>
      </Input.Group>
    </>
  )
}

export default AddForm;