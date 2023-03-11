import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetings } from '../redux/greetings/greetingSlice';

function Greetings() {
  const dispatch = useDispatch();
  const { greeting, error, loading } = useSelector((state) => state.greetings);
  console.log(greeting, error, loading)
  console.log(error)

  useEffect(() => {
    dispatch(fetchGreetings());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{ error }</p>;
  }

  return (
    <p>{ greeting.greeting }</p>
  );
}

export default Greetings;