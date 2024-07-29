// 'use client'
// import React, { useContext, useEffect, useState } from 'react';
// import { GlobalContext } from '../component/context/globalContext';
// import instance from '../instance/instance';

// const ProfilePage = () => {
//   const [userName, setUserName] = useState('');
//   const [imageIndex, setImageIndex] = useState(0);
//   const { post } = useContext<any>(GlobalContext);

//   const postCount = post.length;
//   const [followers, setFollowers] = useState<number | null>(null);
//   const [following, setFollowing] = useState<number | null>(null);
//   const [userid, setUserid] = useState<string | null>(null);

//   useEffect(() => {
//     const storedUserName = localStorage.getItem('username');
//     if (storedUserName) {
//       setUserName(storedUserName);
//     }
//   }, []);

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const id = localStorage.getItem("userid");
//       setUserid(id);
//     }
//   }, []);

//   useEffect(() => {
//     if (userid) {
//       const fetchUser = async () => {
//         try {
//           const response = await instance.get(`/user/${userid}`);
//           const followersCount = response.data.followers.length;
//           const followingsCount = response.data.following.length;
//           console.log(followersCount, "followers");

//           setFollowers(followersCount);
//           setFollowing(followingsCount);
//         } catch (error) {
//           console.error("error");
//         }
//       };

//       fetchUser();
//     }
//   }, [userid ,post]);

//   return (
//     <div className="flex flex-col items-center w-full p-5 bg-black min-h-screen text-white">
//       <header className="flex flex-col items-center w-full bg-gray-900 shadow-lg rounded-lg p-5 mb-5">
//         <img
//           src="/che2.jpeg"
//           alt="Profile Picture"
//           className="w-28 h-28 rounded-full mb-3 border-2 border-gray-700"
//         />
//         <h2 className="text-3xl font-bold">{userName}</h2>
//         <p className="text-gray-400 text-center mt-3">
//           Its just a beginning of something <br /> Obadiah 1:4 ;
//         </p>
//         <div className="flex justify-around w-full mt-5">
//           <div className="text-center">
//             <span className="font-bold text-white">{postCount}</span>
//             <p className="text-gray-400">Posts</p>
//           </div>
//           <div className="text-center">
//             <span className="font-bold text-white">{followers}</span>
//             <p className="text-gray-400">Followers</p>
//           </div>
//           <div className="text-center">
//             <span className="font-bold text-white">{following}</span>
//             <p className="text-gray-400">Following</p>
//           </div>
//         </div>
//       </header>
//       <div className="w-full mb-5">
//         <div className="flex justify-center space-x-4 mb-5">
//           <button className="text-white px-4 py-2 border-b-2 border-blue-500">Posts</button>
//           <button className="text-gray-500 px-4 py-2">Reels</button>
//           <button className="text-gray-500 px-4 py-2">Tags</button>
//         </div>
//         <div className="grid grid-cols-3 gap-4">
            
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProfilePage;








'use client'
import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../component/context/globalContext';
import instance from '../instance/instance';
// import { CiHome } from "react-icons/ci";


const ProfilePage = () => {
  const [userName, setUserName] = useState('');
  const [imageIndex, setImageIndex] = useState(0);
  const { post } = useContext<any>(GlobalContext);

  const postCount = post.length;
  const [followers, setFollowers] = useState<number | null>(null);
  const [following, setFollowing] = useState<number | null>(null);
  const [userid, setUserid] = useState<string | null>(null);

  useEffect(() => {
    const storedUserName = localStorage.getItem('username');
    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const id = localStorage.getItem("userid");
      setUserid(id);
    }
  }, []);

  useEffect(() => {
    if (userid) {
      const fetchUser = async () => {
        try {
          const response = await instance.get(`/user/${userid}`);
          const followersCount = response.data.followers.length;
          const followingsCount = response.data.following.length;
          console.log(followersCount, "followers");

          setFollowers(followersCount);
          setFollowing(followingsCount);
        } catch (error) {
          console.error("error");
        }
      };

      fetchUser();
    }
  }, [userid, post]);

  return (
    <div className="flex flex-col items-center w-full p-5 bg-black min-h-screen text-white">

      <header className="flex flex-col items-center w-full bg-gray-900 shadow-lg rounded-lg p-5 mb-5">
      {/* <CiHome  className=' mr-96'/> */}


        <img
          src="/che2.jpeg"
          alt="Profile Picture"
          className="w-28 h-28 rounded-full mb-3 border-2 border-gray-700"
        />
        <h2 className="text-3xl font-bold">{userName}</h2>
        <p className="text-gray-400 text-center mt-3">
          Its just a beginning of something <br /> Obadiah 1:4 ;
        </p>
        <div className="flex justify-around w-full mt-5">
          <div className="text-center">
            <span className="font-bold text-white">{postCount}</span>
            <p className="text-gray-400">Posts</p>
          </div>
          <div className="text-center">
            <span className="font-bold text-white">{followers}</span>
            <p className="text-gray-400">Followers</p>
          </div>
          <div className="text-center">
            <span className="font-bold text-white">{following}</span>
            <p className="text-gray-400">Following</p>
          </div>
        </div>
      </header>
      <div className="w-full mb-5">
        <div className="flex justify-center space-x-4 mb-5">
          <button className="text-white px-4 py-2 border-b-2 border-blue-500">Posts</button>
          <button className="text-gray-500 px-4 py-2">Reels</button>
          <button className="text-gray-500 px-4 py-2">Tags</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {post.map((item: any) => (
            <div key={item._id} className="relative">
              <img src={item.image} alt="post" className="w-full h-full object-cover rounded-lg" />
              <div className="absolute bottom-2 left-2 text-white bg-black bg-opacity-50 px-2 py-1 rounded">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
