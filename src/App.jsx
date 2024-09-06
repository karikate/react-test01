import Header from './components/Header/Header';
import List from './components/List/List';
import Message from './components/Message/Message';
import Modal from './components/Modal/Modal';

const App = () => {
  const isOnline = false;
  const age = 28;
  const filmsData = [
    { id: '1', title: 'GOT' },
    { id: '2', title: 'HARRY POTTER' },
    { id: '3', title: 'ATLANTIDA' },
    { id: '4', title: 'LOTR' },
  ];

  const goodsData = [
    { id: '1', title: 'Carrot' },
    {
      id: '2',
      title: 'Tomato',
    },
    { id: '3', title: 'Potato' },
  ];
  return (
    <>
      <Header />
      <p>Super forum</p>
      {isOnline && <h2>Welcome</h2>}
      {age > 18 ? <h2>Ти диви, який вимахав!</h2> : <h2>Йди їж кашу</h2>}
      <Message author="Petro" message="Продам диван" />
      <Message message="Hello" />
      <List title="Films" data={filmsData} />
      <List title="Goods" data={goodsData} />

      <Modal title="Питання">
        <h2>Згодні?</h2>
        <button>Так</button>
        <button>Ні</button>
      </Modal>
    </>
  );
};

export default App;
