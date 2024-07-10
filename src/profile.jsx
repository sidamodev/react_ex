const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};

const Profile = () => {
  return (
    <>
      <h1>{user.name}</h1>
      <img className="avatar" src={user.imageUrl} width={user.imageSize} alt="" />
    </>
  );
};
export default Profile;
