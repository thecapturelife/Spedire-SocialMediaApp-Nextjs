// 'use client'
// import React, { useState, useRef, useEffect, useContext } from 'react';
// import Box from '@mui/material/Box';
// import Modal from '@mui/material/Modal';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import { styled } from '@mui/system';
// import instance from '../instance/instance';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { GlobalContext } from './context/globalContext';

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 600,
//   height: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   pt: 2,
//   px: 4,
//   pb: 3,
//   borderRadius: '16px',
//   borderColor: '#3f51b5',
//   background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//   color: 'white',
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'space-between',
// };

// const buttonStyle = {
//   backgroundColor: '#3f51b5',
//   color: 'white',
//   margin: '10px 0',
//   '&:hover': {
//     backgroundColor: '#303f9f',
//   },
// };

// const Input = styled('input')({
//   display: 'none',
// });


// interface CreatePostProps {
//   open: boolean;
//   handleClose: () => void;
//   setImageUrl: React.Dispatch<React.SetStateAction<string[]>>;
// }

// export const CreatePost : React.FC<CreatePostProps> = ({ open , handleClose , setImageUrl }) => {
//    const {post , setPost} = useContext <any> (GlobalContext);
//   const [description, setDescription] = useState<string>('');
//   const fileInputRef = useRef<HTMLInputElement>(null);
//   const [selectFile, setSelectFile] = useState<File | null>(null);
//   const [imageUrl, setImageUrlState] = useState<string | null >(null);


//   useEffect(() => {
//     if (!open) {
//         setDescription('');
//         setSelectFile(null);
//         setImageUrlState(null);
//     }
// }, [open]);

//   const handleUpload = () => {
//     if (fileInputRef.current) {
//       fileInputRef.current.click();
//     }
//   };

//   const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const inputFile = e.target.files ? e.target.files[0] : null;
//     setSelectFile(inputFile);
//     if (inputFile) {
//       const inputUrl = URL.createObjectURL(inputFile);
//       setImageUrlState(inputUrl);
//   } else {
//       alert("No file selected");
//     }
//   };

//   const userid =
//   typeof localStorage !== "undefined" ? localStorage.getItem("userid") : null;

//   const handleApi = async () => {
//     const userId = typeof localStorage !== 'undefined' ? localStorage.getItem("userid") : null;
//     const formData = new FormData();
//     formData.append("desc", description);
//     formData.append("userId", userId!);
    



//     if (selectFile) {
//       formData.append("file", selectFile); 
//     }

//       try {
//       const response = await instance.post('/createPost', formData, {
//         headers: { 'Content-Type': 'multipart/form-data' },
//       });
//       console.log('Post created:', response.data);
//       setImageUrl ((prev : any) => [...prev, response.data.post.image]);
//       handleClose(); 
//       setSelectFile(null);
//       setDescription("");
//       toast.success('Post created successfully.');

//     } catch (error) {
//       console.error('Error creating post:', error);
//       // toast.error('Error creating post.');
//     }
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await instance.get(`/posts/${userid}/timeline`);
        
//         if (response.status === 200) {
//           setPost(response.data);

          
//           // const newPostIds = response.data.map((item: any) => item.comments);
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchData();
//   }, []);



 


//   const addPost = () => {
//     if (selectFile) {
//         handleApi();
//     } else {
//         alert("Please select a file");
//     }
// };

//   return (
//     <div>
//       <input
//         ref={fileInputRef}
//         onChange={handleFile}
//         type="file"
//         accept="image/*"
//         style={{ display: 'none' }}
//       />

//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="parent-modal-title"
//         aria-describedby="parent-modal-description"
//       >
//         <Box sx={style}>
//           <h2 id="parent-modal-title">Post Your moments</h2>
//           <p id="parent-modal-description">
//             Please fill out the form below to post.
//           </p>
//           <label htmlFor="file-upload">
//             <Input
//               ref={fileInputRef}
//               accept="image/*"
//               id="file-upload"
//               multiple
//               type="file"
//               onChange={handleFile}
//             />
//             <Button component="span" sx={buttonStyle} onClick={handleUpload}>
//               Upload File
//             </Button>
//             {imageUrl && (
//               <img src={imageUrl} alt="Selected" style={{ maxWidth: '70%', maxHeight: '200px', margin: '10px 0', marginLeft: '2rem' }} />
//              )}
//           </label>
//           <TextField
//             id="description"
//             label="Description"
//             multiline
//             rows={4}
//             variant="outlined"
//             sx={{ bgcolor: 'white', borderRadius: 1, mb: 2 }}
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//           />
//           <Button sx={buttonStyle} onClick={addPost}>
//             Post
//           </Button>
//         </Box>
//       </Modal>
//       <ToastContainer />
//     </div>
//   );
// };

// export default CreatePost;




'use client';
import React, { useState, useRef, useEffect, useContext } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/system';
import instance from '../instance/instance';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalContext } from './context/globalContext';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  height: 400,
  bgcolor: 'black',
  border: 'none',
  boxShadow: 24,
  borderRadius: '16px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  p: 3,
};

const buttonStyle = {
  backgroundColor: '#3f51b5',
  color: 'white',
  margin: '10px 0',
  '&:hover': {
    backgroundColor: '#303f9f',
  },
};

const Input = styled('input')({
  display: 'none',
});

interface CreatePostProps {
  open: boolean;
  handleClose: () => void;
  setImageUrl: React.Dispatch<React.SetStateAction<string[]>>;
}

export const CreatePost: React.FC<CreatePostProps> = ({ open, handleClose, setImageUrl }) => {
  const { post, setPost } = useContext<any>(GlobalContext);
  const [description, setDescription] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectFile, setSelectFile] = useState<File | null>(null);
  const [imageUrl, setImageUrlState] = useState<string | null>(null);

  useEffect(() => {
    if (!open) {
      setDescription('');
      setSelectFile(null);
      setImageUrlState(null);
    }
  }, [open]);

  const handleUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputFile = e.target.files ? e.target.files[0] : null;
    setSelectFile(inputFile);

    if (inputFile) {
      const inputUrl = URL.createObjectURL(inputFile);
      setImageUrlState(inputUrl);
    } else {
      alert("No file selected");
    }
  };

  const userid = typeof localStorage !== "undefined" ? localStorage.getItem("userid") : null;

  const handleApi = async () => {
    const userId = typeof localStorage !== 'undefined' ? localStorage.getItem("userid") : null;
    const formData = new FormData();
    formData.append("file" , post);
    formData.append("desc", description);
    formData.append("userId", userId!);

    if (selectFile) {
      formData.append("file", selectFile);
    }

    try {
      const response = await instance.post('/createPost', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      console.log('Post created:', response.data);
      setImageUrl((prev: any) => [...prev, response.data.post.image]);
      handleClose();
      setSelectFile(null);
      setDescription("");
      toast.success('Post created successfully.');
    } catch (error) {
      console.error('Error creating post:', error);
      toast.error('Error creating post.');
    }
  };

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await instance.get(`/posts/${userid}/timeline`);
        if (response.status === 200) {
          setPost(response.data);
          // post.push(response.data)
        }
      } catch (error) {
        console.log(error);
      }
    };
    if (userid) {
      fetchData();
    }
  }, [userid,setPost]);


  
  const addPost = () => {
    if (selectFile) {
      handleApi();
    } else {
      alert("Please select a file");
    }
  };

  return (
    <div>
      <input
        ref={fileInputRef}
        onChange={handleFile}
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
      />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={style}>
          <h2 className=' text-slate-100' id="parent-modal-title">Create New Post</h2>
          <p className=' text-slate-100' id="parent-modal-description">
            Please fill out the form below to post.
          </p>
          <Button component="span" sx={buttonStyle} onClick={handleUpload}>
            Upload File
          </Button>
          {imageUrl && (
            <img src={imageUrl} alt="Selected" style={{ maxWidth: '100%', maxHeight: '200px', margin: '10px 0' }} />
          )}
          <TextField
            id="description"
            label="Description"
            multiline
            rows={4}
            variant="outlined"
            sx={{ bgcolor: 'white', borderRadius: 1, mb: 2 }}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Button sx={buttonStyle} onClick={addPost}>
            Post
          </Button>
        </Box>
      </Modal>
      <ToastContainer />
    </div>
  );
};

export default CreatePost;
