import React, { useState, useEffect } from "react";
import HomeAdmin from "./HomeAdmin";
import CustomInput from "../../../Components/CustomInput";
import Upload from "../../../Components/Upload";
import { Message, Select } from "../../../Components/UserReview";
import { MovieValidation } from "../../../Components/Validation/userValidation";
import CastModal from "../../../Components/Modal/CastModal";
import {
  MdDeleteForever,
  MdEditSquare,
  MdOutlineFileUpload,
} from "react-icons/md";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast'
const AddMovie = () => {
  const categoryData = [
    {
      title: "Kinh dị",
      value: 0,
    },
  ];
  const [modalOpen, setModalOpen] = useState(false);
  const [cast, setCast] = useState(false);
  const [movieImg, setMovieImg] = useState(null);
  const [posterImg, setPosterImg] = useState(null);
  const [castList, setCastList] = useState([]);
  const handleUploadCast = (castInfo) => {
    setCastList([...castList, castInfo]);
    setModalOpen(false);
  };
  const handleUploadMovie = (data) => {
    console.log(data);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(MovieValidation),
  });
  useEffect(() => {
    if (!modalOpen) {
      setCast();
    }
  }, [modalOpen, castList]);

  return (
    <HomeAdmin>
      <CastModal
        modalOpen={modalOpen}
        cast={cast}
        setModalOpen={setModalOpen}
        onUpload={handleUploadCast}
      ></CastModal>
      <form
        onSubmit={handleSubmit(handleUploadMovie)}
        className="flex flex-col gap-6"
      >
        <h2 className="text-xl font-bold">Create Movie</h2>
        <div className="w-full grid md:grid-cols-2 gap-6">
          <CustomInput
            label="Movie Name"
            placeholder="Movie Name"
            bg={true}
            register={register("name")} 
          ></CustomInput>
          <CustomInput
            label="Hours"
            placeholder="Movie Hours"
            bg={true}
          ></CustomInput>
        </div>
        <div className="w-full grid md:grid-cols-2 gap-6">
          <CustomInput
            label="Language"
            placeholder="Việt Nam"
            bg={true}
          ></CustomInput>
          <CustomInput
            label="Year of Release"
            placeholder="2022"
            bg={true}
          ></CustomInput>
        </div>
        <div className="w-full grid md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <p className="text-border font-semibold text-sm">
              Image without Title
            </p>
            <Upload setUrlImg={setMovieImg}></Upload>
            {movieImg && (
              <div className="w-32 h-32 p-2 bg-main border border-border rounded">
                <img
                  src={movieImg}
                  alt="www"
                  className="w-full h-full object-cover rounded"
                />
              </div>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-border font-semibold text-sm">
              Image without Poster
            </p>
            <Upload setUrlImg={setPosterImg}></Upload>
            {posterImg && (
              <div className="w-32 h-32 p-2 bg-main border border-border rounded">
                <img
                  src={posterImg}
                  alt="www"
                  className="w-full h-full object-cover rounded"
                />
              </div>
            )}
          </div>
        </div>
        <Select lable="Category" options={categoryData}></Select>
        <Message lable="Movie Description" placeholder="Description"></Message>
        <div className="w-full grid lg:grid-cols-2 gap-6 items-start ">
          <button
            onClick={() => {
              setModalOpen(true);
            }}
            className="w-full py-4 bg-main border border-subMain border-dashed text-white rounded"
          >
            Add Cast
          </button>
          <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-4 grid-cols-2 gap-4">
            {castList &&
              castList.map((cast) => (
                <div className="p-2 italic text-xs text-text rounded flex-colo bg-main border border-border">
                  <img
                    src="/images/movies/1.jpg"
                    alt="123"
                    className="w-full h-24 object-cover rounded mb-2"
                  />
                  <p>Tom Cruise</p>
                  <div className="flex-rows mt-2 w-full gap-2">
                    <button className="w-6 h-6 flex-colo bg-dry border border-border text-subMain rounded">
                      <MdDeleteForever />
                    </button>
                    <button className="w-6 h-6 flex-colo bg-dry border border-border text-green-600 rounded">
                      <MdEditSquare />
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <button
          type="submit"
          className="bg-subMain w-full flex-rows gap-6 font-medium text-white py-4 rounded"
        >
          <MdOutlineFileUpload /> Add Movie
        </button>
      </form>
    </HomeAdmin>
  );
};

export default AddMovie;
