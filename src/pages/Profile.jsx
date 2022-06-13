import React from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import Gravatar from "react-gravatar";

const Profile = () => {
  const { user } = useAuthContext();
  return (
    <div className="p-4">
      <div className="pb-5 mt-4 border-b-[1px]">
        <h1 className="text-headline5">Hồ sơ</h1>
        <Gravatar
          email={user.email}
          className="rounded-full w-[70px] h-[70px]"
          default="mp"
        />
        <div className="my-5">
          Lưu ý: Chúng tôi sử dụng{" "}
          <a
            href="https://en.gravatar.com/"
            target="_blank"
            className="text-blue"
          >
            Gravatar
          </a>{" "}
          để đặt avatar cho bạn. Để thay đổi avatar, hãy{" "}
          <a
            href="https://wordpress.com/start/wpcc/oauth2-user?ref=oauth2&oauth2_redirect=https%3A%2F%2Fpublic-api.wordpress.com%2Foauth2%2Fauthorize%2F%3Fclient_id%3D1854%26response_type%3Dcode%26blog_id%3D0%26state%3D60c93383f92a2cc23709d37d94211a9404bb4abb6449439711b47b09f3ff2ba5%26redirect_uri%3Dhttps%253A%252F%252Fen.gravatar.com%252Fconnect%252F%253Faction%253Drequest_access_token%26jetpack-code%26jetpack-user-id%3D0%26action%3Doauth2-login&oauth2_client_id=1854"
            target="_blank"
            className="text-blue"
          >
            tạo tài khoản và tải lên avatar
          </a>
        </div>
      </div>
      <form>
        <div>
          <label className="block">Tên đầy đủ</label>
          <input type="text" className="border-[1px]" />
          <button className="m-1 bg-blue text-light px-4 py-1/2 rounded-md">
            đổi
          </button>
        </div>
        <div>
          <label className="block">Email</label>
          <input type="text" className="border-[1px]" />
          <button className="m-1 bg-blue text-light px-4 py-1/2 rounded-md">
            đổi
          </button>
        </div>
        <div>
          <label className="block">Mật khẩu</label>
          <input type="text" className="border-[1px]" />
          <button className="m-1 bg-blue text-light px-4 py-1/2 rounded-md">
            đổi
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
