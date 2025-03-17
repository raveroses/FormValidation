export default function UserProfile({ user }) {
  return (
    <div className="text-white w-[300px] h-[100px] absolute top-20 right-8 bg-white rounded ">
      <div className="flex items-center gap-3">
        <div className="">
          <img src={`${user?.user?.photoURL}`} alt="profile-image" />
        </div>
        <div className=""></div>
      </div>
    </div>
  );
}
