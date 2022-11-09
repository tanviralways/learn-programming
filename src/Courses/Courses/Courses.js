import React from "react";
import LeftSideBar from "../../Pages/Shared/LeftSideBar/LeftSideBar";
import RightSideBar from "../../Pages/Shared/RightSideBar/RightSideBar";

const Courses = () => {
  return (
    <div>
      <h1>This ic course</h1>
      <div className="container mx-auto  px-10 grid grid-cols-3 gap-12 ">
        <div>
          {" "}
          <LeftSideBar> </LeftSideBar>{" "}
        </div>
        <div className="col-span-2 ">
          <RightSideBar></RightSideBar>
        </div>
      </div>
    </div>
  );
};

export default Courses;
