import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Layout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <PostSkeleton />
      ) : (
        <>
          <Sidebar />
          <MainContent />
        </>
      )}
    </>
  );
};

const PostSkeleton = () => (
  <div>
    <Skeleton
      height={"90vh"}
      color="#202020"
      borderRadius="30px"
      highlightColor="#F7E7E8"
    />
  </div>
);

export default Layout;
