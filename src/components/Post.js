import React, { useState } from "react";
import styled from "styled-components";
import db from "../firebase";
import "./Post.css";

const Header = styled.header`
  background: #f4f4f4;
  padding: 1rem;
  text-align: center;
`;
const MainSection = styled.section`
  margin: auto;
  max-width: 500px;
  overflow: auto;
  padding: 3rem 2rem;
`;
const PostForm = styled.form`
  padding: 2rem;
  background: #f4f4f4;
  label {
    display: block;
  }
  input[type="text"] {
    width: 100%;
    padding: 8px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
`;
const PostButton = styled.button`
  display: block;
  padding: 10px 15px;
  border: 0;
  background: #333;
  color: #fff;
  border-radius: 5px;
  margin: 5px 0;
  &:hover {
    background: #444;
    cursor: pointer;
  }
`;

const Post = () => {
  const [personName, setPersonName] = useState("");
  const [imageurl, setImageurl] = useState("");
  const addItems = (personName, imageurl) => {
    db.collection("people").add({ name: personName, url: imageurl });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addItems(personName, imageurl);
    setPersonName("");
    setImageurl("");
  };
  return (
    <div>
      <Header>
        <h1>Enter Details</h1>
      </Header>
      <MainSection>
        <PostForm onSubmit={handleSubmit}>
          <div>
            <label>Enter Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              value={personName}
              onChange={(e) => setPersonName(e.target.value)}
            />
          </div>
          <div>
            <label>Enter Image Url</label>
            <input
              type="text"
              placeholder="Enter image URL"
              value={imageurl}
              onChange={(e) => setImageurl(e.target.value)}
            />
          </div>
          <PostButton type="submit">Submit</PostButton>
        </PostForm>
      </MainSection>
    </div>
  );
};

export default Post;
