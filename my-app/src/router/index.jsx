import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import AuthLayout from "../components/AuthLayout";
import Landing from "../pages/Landing";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import EditProfile from "../pages/EditProfile";
import Explore from "../pages/Explore";
import Chat from "../pages/Chat";
import Call from "../pages/Call";
import Skills from "../pages/Skills";
import SkillDetail from "../pages/SkillDetail";
import Testimonials from "../pages/Testimonials";
import Contact from "../pages/Contact";
import Community from "../pages/Community";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/login",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Login />,
      },
    ],
  },
      {
    path: "/signup",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Signup />,
      },
    ],
  },
  {
    path: "/app", // A base path for authenticated routes
    element: <AppLayout />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "profile/:id",
        element: <Profile />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "profile/edit",
        element: <EditProfile />,
      },
      {
        path: "explore",
        element: <Explore />,
      },
      {
        path: "chat",
        element: <Chat />,
      },
      {
        path: "call/:id",
        element: <Call />,
      },
      {
        path: "skills",
        element: <Skills />,
      },
      {
        path: "skill/:id",
        element: <SkillDetail />,
      },
    ],
  },
  {
    path: "/skills",
    element: <Skills />,
  },
  {
    path: "/skill/:id",
    element: <SkillDetail />,
  },
  {
    path: "/mentors",
    element: <Explore />,
  },
  {
    path: "/community",
    element: <Community />,
  },
  {
    path: "/testimonials",
    element: <Testimonials />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/about",
    element: <Landing />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
