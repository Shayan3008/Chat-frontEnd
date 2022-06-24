import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import axios from 'axios';
import Api from './api/Api'
// import Login from './components/Login';
import Post from './components/Post';
import MessageInput from './components/MessageInput';
function App() {
  const [Arr, setArr] = useState([])
  const checkUserId = (Arr2) => {
    return Arr2.userId < 5
  }
  const getPostData = async () => {
    try {
      const data = await axios.get(Api.url, { headers: Api.headers })
      let data2 = data.data;
      data2 = data2.filter(checkUserId)

      setArr(data2)
    } catch (error) {
      console.log('This is error' + error)
    }

  }
  useEffect(() => {
    getPostData()
  })

  return (
    <>
      <Navbar title='Chats' />
      <div style={{ height: '91.5vh' }}>
        <Post arr={Arr} />
        <MessageInput />
      </div>
    </>
  );
}

export default App;
