/** @jsxImportSource @emotion/react */

import { useState } from "react"
import { storage } from "../../plugins/firebase"
import { css } from "@emotion/react"

const labelStyle = css`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  display: inline-block;
  background-color: #FFF;
  border: none;
  margin-top: 14px;
  text-align: center;
  box-shadow: 0 18px 18px -10px #0009652b;
  transition: all 0.5s ease;
  &:hover {
    color: #3ea8ff;
    transform: translateY(-2px);
  }
`

const imgStyle = css`
  width: 30px;
  height: 30px;
  display: block;
  margin: 7px;
`

import Loading from "./loading"

const Uploader = (props) => {
  const { onClick } = props
  const [image, setImage] = useState("");
  const [progress, setProgress] = useState(101);

  const handleImage = (event) => {
    event.preventDefault();
    const image = event.target.files[0]
    setImage(image)

    // アップロード処理
    const storageRef = storage.ref("images/"); //どのフォルダの配下に入れるかを設定
    const imagesRef = storageRef.child(image.name); //ファイル名

    const upLoadTask = imagesRef.put(image);

    upLoadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(percent)
      },
      (error) => {
        console.log("err", error);
      },
      () => {
        upLoadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {

          // ここまじ大事
          onClick(downloadURL)

          setTimeout(() => {
            setProgress(101)
          }, 3000)
        });
      }
    );
  };

  return (
    <div>
      <label css={labelStyle}>
        <svg css={imgStyle} viewBox="0 0 27 27" width="25" height="25"><g fill="currentColor"><path d="M21 5.5H6c-1.2 0-2.1 1-2.1 2.1v12.2C3.9 21 4.8 22 6 22h15c1.2 0 2.2-1 2.2-2.2V7.6c0-1.2-1-2.1-2.2-2.1zM5.4 18.6l4.7-5.2h.2l6.6 6.9H6c-.3 0-.6-.2-.6-.5v-1.2zm16.1-1.5l-4-4.2c-.2-.2-.4-.3-.6-.3-.2 0-.5.1-.6.3l-2.1 2.3-3.4-3.6c-.2-.2-.4-.3-.7-.3-.3 0-.5.1-.7.3l-4 4.5V7.6c0-.3.3-.6.6-.6h15c.3 0 .5.2.5.6v9.5zm-4.8-2.2c0-.1.1-.1.2-.1s.1 0 .2.1l4.4 4.6v.3c0 .3-.2.5-.5.5h-1.8l-3.8-4 1.3-1.4z"></path><path d="M17.6 8.1c-.7 0-1.5.6-1.5 1.6 0 .7.6 1.5 1.5 1.5.7 0 1.6-.6 1.5-1.6-.1-.8-.7-1.5-1.5-1.5z"></path></g></svg>
        <input type="file" onChange={handleImage} style={{display: "none"}} />
      </label>
      <Loading progress={progress} />
    </div>
  );
};

export default Uploader