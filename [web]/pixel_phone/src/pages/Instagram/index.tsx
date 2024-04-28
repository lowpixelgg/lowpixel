import React from "react";
import { Routes, Route } from "react-router-dom";
import { Splash } from "./Pages/Splash";
import { Conect } from "./Pages/Conect";
import { MainTabs } from "./MainTabs";
import { Personal } from "./Pages/Profile";
import { Explore } from "./Pages/Explore";
import { Activity } from "./Pages/Activity";
import { Feed } from "./Pages/Feed";
import { CameraTab } from "./CameraTabs";
import { MainCam } from "./Pages/MainCam";
import { LiveCam } from "./Pages/LiveCam";
import { StoryCam } from "./Pages/StoryCam";
import { StoryEdit } from "./Pages/StoryEdit";
import { InstaProviders } from "./InstaContexts";
import { PostPage } from "./Pages/Post";
import { ChatPage } from "./Pages/ChatPage";
import { Profile } from "./Pages/Profile/Profile";
import { DmPage } from "./Pages/DmPage";
import { LiveOwner } from "./Pages/LiveStream";
import { GalleryPost } from "./Pages/GalleyPost";
import { PostCreate } from "./Pages/PostCreate";
import { ProfileEdit } from "./Pages/ProfileEdit";
import { StoryView } from "./Pages/StoryView";
import { LiveView } from "./Pages/LiveStream/LiveView";

export const Instagram = () => {
  return (
    <InstaProviders>
      <Routes>
        <Route path="/" element={<Splash />} />

        <Route path="/conect" element={<Conect />} />

        <Route path="/post" element={<PostPage />} />

        <Route path="/chats" element={<ChatPage />} />

        <Route path="/user" element={<Profile />} />

        <Route path="/dm" element={<DmPage />} />

        <Route path="/liveOwner" element={<LiveOwner />} />

        <Route path="/liveView" element={<LiveView />} />

        <Route path="/galleryPost" element={<GalleryPost />} />

        <Route path="/createPost" element={<PostCreate />} />

        <Route path="/profileEdit" element={<ProfileEdit />} />

        <Route path="/storyView" element={<StoryView />} />

        <Route element={<MainTabs />}>
          <Route path="/feed" element={<Feed />} />

          <Route path="/profile" element={<Personal />} />

          <Route path="/explore" element={<Explore />} />

          <Route path="/activity" element={<Activity />} />
        </Route>

        <Route element={<CameraTab />}>
          <Route path="/cam" element={<MainCam />} />

          <Route path="/liveCam" element={<LiveCam />} />

          <Route path="/storyCam/*" element={<StoryCam />} />
        </Route>

        <Route path="/storyEdit" element={<StoryEdit />} />
      </Routes>
    </InstaProviders>
  );
};
