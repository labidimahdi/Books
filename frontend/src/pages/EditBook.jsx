import React,{useState , useEffect} from 'react'
import Backbutton from '../components/Backbutton'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const EditBook = () => {
  const [title,setTitle]=useState('');
  const [author,setAuthor]=useState('');
  const [publishyear, setPublishyear]=useState('');
  const [loading, setLoading]=useState(false);
  const navigate = useNavigate();
  const {id}=useParams();
  useEffect(() =>{
    setLoading(true);
    axios.get(`http://localhost:5555/books/${id}`)
    .then((response) => {
      setTitle(response.data.title);
      setAuthor(response.data.author);
      setPublishyear(response.data.publishyear);
      setLoading(false);
    }).catch((error) =>{
      setLoading(false);
      alert('An error happened ! please check console ');
      console.log(error);
    });
  }, [])
  const handleEditBook = () =>{
    const data = {
      title,
      author,
      publishyear,
    };
    setLoading(true);
    axios
    .put(`http://localhost:5555/books/${id}`,data)
    .then(() =>{
      setLoading(false);
      navigate('/');
    })
    .catch((error) =>{
      setLoading(false);
      alert('An error happened ! please check console ');
      console.log(error);
    })
  };

  return (
    <div className='p-4'>
      <Backbutton/>
      <h1 className='text-3xl my-4'>Edit Book</h1>
      {loading ? <Spinner/> : ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto' >
        <div className='m-4'>
          <label className='text-xl mr-4 text-gray-500'>Title</label>
          <input 
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='m-4'>
          <label className='text-xl mr-4 text-gray-500'>Author</label>
          <input 
          type='text'
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='m-4'>
          <label className='text-xl mr-4 text-gray-500'>Publish Year</label>
          <input 
          type='number'
          value={publishyear}
          onChange={(e) => setPublishyear(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <button className='p-2 bg-sky-300 m-8' onClick={handleEditBook}>
            Save
          </button>
      </div>
    </div>
  )
}

export default EditBook