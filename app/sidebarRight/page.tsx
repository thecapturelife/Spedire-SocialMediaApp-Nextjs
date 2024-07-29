  "use client";

  import { useEffect, useState } from "react";
  import instance from "../instance/instance";

  export const FollowSection: React.FC = () => {
    const [users, setUsers] = useState([]);
    const [followedUsers, setFollowedUsers] = useState<{ [key: string]: boolean }>(() => {
      if (typeof window !== "undefined") {
        const savedFollowedUsers = localStorage.getItem("followedUsers");
        return savedFollowedUsers ? JSON.parse(savedFollowedUsers) : {};
      }
      return {};
    });

    const getUser = async () => {
      try {
        const response = await instance.get("/user");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    useEffect(() => {
      getUser();
    }, []);

    const toggleFollow = async (id: string) => {
      try {
        const userid = localStorage.getItem("userid");
        const isFollowed = followedUsers[id] || false;

        const endpoint = isFollowed ? `/user/${id}/unfollow` : `/user/${id}/follow`;
        await instance.put(endpoint, { _id: userid });

        const newFollowState = { ...followedUsers, [id]: !isFollowed };
        setFollowedUsers(newFollowState);
        localStorage.setItem("followedUsers", JSON.stringify(newFollowState));
      } catch (error) {
        console.error("Error toggling follow state:", error);
      }
    };

    return (
      <div className="h-[90vh] w-full sm:w-80 bg-gray-900 text-white border-l border-gray-700 p-4 sm:p-6">
        <h1 className="text-2xl font-bold mb-6">Discover People</h1>
        <div className="w-full h-[80vh] overflow-auto space-y-4">
          {users.map((user: any) => (
            <div
              key={user._id}
              className="flex items-center p-3 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <div
                className="h-12 w-12 rounded-full bg-cover bg-center mr-4"
                style={{
                  backgroundImage:
                    "url('https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg')",
                }}
              ></div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{user.username}</h3>
                <p className="text-sm text-gray-400">{user.bio || "No bio available"}</p>
              </div>
              <button
                className={`ml-auto px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                  followedUsers[user._id]
                    ? "bg-red-500 hover:bg-red-600 focus:ring-red-300"
                    : "bg-blue-500 hover:bg-blue-600 focus:ring-blue-300"
                }`}
                onClick={() => toggleFollow(user._id)}
              >
                {followedUsers[user._id] ? "Unfollow" : "Follow"}
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };

  export default FollowSection;

