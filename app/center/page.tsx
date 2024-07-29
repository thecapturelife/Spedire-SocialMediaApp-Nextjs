
'use client'
import React, { useContext, useEffect, useRef, useState } from 'react';
import { AiOutlineHeart, AiOutlineComment } from 'react-icons/ai';
import { GrAdd } from 'react-icons/gr';
import instance from '../instance/instance';
import StarButton from '../createbutton/page';
import CreatePost from '../component/createpost';
import { GlobalContext } from '../component/context/globalContext';
import { toast } from 'react-toastify';
import Delete from '../component/Deletefunction';

const Center = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectFile, setSelectFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string[]>([]);
  const [open, setOpen] = useState(false);
  const [userName, setUserName] = useState('');
  const { post, setPost } = useContext<any>(GlobalContext);

  useEffect(() => {
    const storedUserName = localStorage.getItem('username');
    if (storedUserName) {
      setUserName(storedUserName);
    }

    const storedLikedPosts = JSON.parse(localStorage.getItem('likedPosts') || '{}');
    setLikedPosts(storedLikedPosts);
  }, []);

  const handleUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputFile = e.target.files ? e.target.files[0] : null;
    setSelectFile(inputFile);
  };

  const handleSubmit = async (description: string) => {
    if (selectFile) {
      const formData = new FormData();
      formData.append('file', selectFile);
      formData.append('desc', description);
      formData.append('userId', '663c610c0fe5ec8be36a53fe');

      try {
        const response = await instance.post('/createPost', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        setImageUrl(prev => [...prev, response.data.post.image]);
      } catch (error) {
        console.error('Error creating post:', error);
      }
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [likedPosts, setLikedPosts] = useState<any>({});
  const [commentSections, setCommentSections] = useState<any>({});
  // const [liked , setliked] = useState<any>(false);

  const fetchLike = async (id: any) => {
    const usernteid =
      typeof localStorage !== "undefined"
        ? localStorage.getItem("userid")
        : null;
    const datas = {
      userId: usernteid,
    };
    try {
      const response = await instance.put(`/posts/${id}/like`, { ...datas });
      if (response.status === 200) {

        const updatedLikes = post.map((item: any) => {
          
          if (item._id === id) {
            return {
              ...item,
              likes: response.data.likes,
            };
          }
          return item;
        });
        setPost(updatedLikes);
        
        const newLikedPosts = { ...likedPosts, [id]: !likedPosts[id] };
        setLikedPosts(newLikedPosts);
        localStorage.setItem('likedPosts', JSON.stringify(newLikedPosts));
      }
    } catch (error) {
      toast.error("something error");
      console.error("error like : ", error);
    }
  };

  const [inputValue, setInputValue] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const fetchComment = async (id: any) => {
    const usernteid = localStorage.getItem('userid');
    const datas = {
      userId: usernteid,
      text: inputValue,
    };
    try {
      const response = await instance.post(`/posts/${id}/comment`, {
        ...datas,
      });
      if (response.status === 200) {
        const updatedPosts = post.map((item: any) => {
          if (item._id === id) {
            return {
              ...item,
              comments: response.data.comments,
            };
          }
          return item;
        });

        setPost(updatedPosts);
        setInputValue('');        
        toast.success('Commented successfully');
      }
    } catch (error) {
      console.error(error);
      setInputValue('');
      toast.error('Failed to post comment');
    }
  };

  const toggleCommentSection = (postId: string) => {
    setCommentSections((prev: any) => ({ ...prev, [postId]: !prev[postId] }));
  };

  return (
    <div className='flex flex-col items-center p-4 overflow-y-auto h-full'>
      <div className='ml-auto mb-4'>
        <StarButton onClick={handleOpen} />
      </div>
      <CreatePost
        open={open}
        handleClose={handleClose}
        fileInputRef={fileInputRef}
        handleUpload={handleUpload}
        handleFile={handleFile}
        handleSubmit={handleSubmit}
        setImageUrl={setImageUrl}
      />

      <div className='flex space-x-4 mb-8'>
        <div className='flex items-center justify-center rounded-full h-24 w-24 border-2 border-dashed border-blue-700 bg-slate-50'>
          <GrAdd className='text-blue-700 text-4xl' />
        </div>

        <div
          className='flex items-center justify-center rounded-full h-24 w-24 border-2 border-blue-700 bg-slate-50'
          style={{ backgroundImage: "url('chris.webp')", backgroundSize: 'cover', backgroundPosition: 'center' }}
        ></div>
        <div
          className='flex items-center justify-center rounded-full h-24 w-24 border-2 border-blue-700 bg-slate-50'
          style={{ backgroundImage: "url('joTj.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
        ></div>
        <div
          className='flex items-center justify-center rounded-full h-24 w-24 border-2 border-blue-700 bg-slate-50'
          style={{ backgroundImage: "url('bib.avif')", backgroundSize: 'cover', backgroundPosition: 'center' }}
        ></div>
        <div
          className='flex items-center justify-center rounded-full h-24 w-24 border-2 border-blue-700 bg-slate-50'
          style={{ backgroundImage: "url('mahi.jpeg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
        ></div>
        <div
          className='flex items-center justify-center rounded-full h-24 w-24 border-2 border-blue-700 bg-slate-50'
          style={{ backgroundImage: "url('sun.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
        ></div>
      </div>

      {post?.map((url: any, index: any) => (
        <div key={index} className='bg-white rounded-lg shadow-md w-full max-w-2xl mx-auto my-4'>
          <div className='flex items-center p-4 bg-gray-400 rounded-t-lg'>
            <img className='h-10 w-10 rounded-full border border-white' src={url?.image} alt='Profile' />
            <h1 className='text-lg font-semibold ml-4'>{userName}</h1>
          </div>
          <img className='w-full rounded-t-lg' src={url?.image} alt='Post' />

          <div className='p-4 bg-gray-400 '>
            <div className='flex items-center space-x-4 mb-4'>
              <button
                className={`flex items-center space-x-1 ${likedPosts[url._id] ? 'text-red-500' : 'text-white'}`}
                onClick={() => fetchLike(url._id)}
              >
                <AiOutlineHeart className='text-2xl cursor-pointer' aria-label='Like' />
                <span>{url?.likes?.length}</span>
              </button>
              
              <button
                className='flex items-center space-x-1 text-white'
                onClick={() => toggleCommentSection(url._id)}
              >
                <AiOutlineComment className='text-2xl cursor-pointer' aria-label='Comment' />
                <span>{url?.comments?.length}</span>
              </button>
            </div>

            <Delete itemId={url._id} />

            <p className='text-sm text-gray-700'>{url?.desc}</p>

            {commentSections[url._id] && (
              <div className='mt-4'>
                {url?.comments?.map((comment: any, idx: any) => (
                  <div key={idx} className='flex items-center space-x-2 mb-2'>
                    <img
                      className='h-6 w-6 rounded-full border border-white'
                      src={url?.image}
                      alt='Profile'
                    />
                    <p className='text-sm'>{comment.text}</p>
                  </div>
                ))}
                <div className='flex items-center mt-2'>
                  <input
                    type='text'
                    value={inputValue}
                    onChange={handleChange}
                    className='border border-gray-300 rounded-lg p-2 w-full'
                    placeholder='Add a comment...'
                  />
                  <button
                    onClick={() => fetchComment(url._id)}
                    className='ml-2 bg-blue-500 text-white p-2 rounded-lg'
                  >
                    Post
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Center;
