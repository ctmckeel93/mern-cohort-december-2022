import UseContextCount from '../components/UseContextCount';
import UseReducerCount from '../components/UseReducerCount';
import CounterObject from '../components/CounterObject';

const Counters = () => {
  return (
    <>
      <UseContextCount />
      <hr className="my-3" />
      <UseReducerCount />
      <hr className="my-3" />
      <CounterObject initialValue={3} />
    </>
  )
}

export default Counters;