import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar/Navbar";
import { LeftSideNavbarProvider } from "./containers/LeftSideNavbarContext";
import AuthProvider from "./customHook/AuthContext";
import NotFoundPage from "./containers/notFoundPage/NotFoundPage";
import Spinner from "./containers/spinner/Spinner";

const HomePage = lazy(() => import("./containers/homePage/HomePage"));
const RoadmapsPage = lazy(() =>
  import("./containers/roadmapsPage/RoadmapsPage")
);
const UserSignUp = lazy(() =>
  import("./components/user/loginsignup/UserSignUp")
);
const UserLogin = lazy(() => import("./components/user/loginsignup/UserLogin"));
const UserProfile = lazy(() =>
  import("./components/user/useProfile/UserProfile")
);
const UserProgress = lazy(() =>
  import("./components/user/useProfile/UserProgress")
);

const UserLogOut = lazy(() =>
  import("./components/user/useProfile/UserLogOut")
);

const UserPasswordReset = lazy(() =>
  import("./components/user/useProfile/UserPasswordReset")
);
const RequestPasswordReset = lazy(() =>
  import("./components/user/loginsignup/RequestPasswordReset")
);
const VerifyPasswordReset = lazy(() =>
  import("./components/user/loginsignup/VerifyPasswordReset")
);

function App() {
  return (
    <>
      <AuthProvider>
        <LeftSideNavbarProvider>
          <Navbar />

          <Suspense fallback={<Spinner />}>
            {" "}
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/roadmaps/:roadmapName" element={<RoadmapsPage />} />
              <Route
                path="/roadmaps/frontend/:topicName"
                element={<RoadmapsPage />}
              />
              <Route
                path="/roadmaps/ai/:topicName"
                element={<RoadmapsPage />}
              />
              <Route
                path="/roadmaps/ml/:topicName"
                element={<RoadmapsPage />}
              />
              <Route
                path="/roadmaps/cs/:topicName"
                element={<RoadmapsPage />}
              />
              <Route path="/user/signup" element={<UserSignUp />} />
              <Route path="/user/login" element={<UserLogin />} />
              <Route
                path="/user/request-password-reset"
                element={<RequestPasswordReset />}
              />
              <Route
                path="/user/verify-password-reset"
                element={<VerifyPasswordReset />}
              />
              <Route
                path="/user/user-profile/*"
                element={
                  <>
                    <UserProfile />
                    <Routes>
                      <Route path="/" element={<UserProgress />} />
                      <Route path="/logout" element={<UserLogOut />} />
                      <Route
                        path="/password-reset"
                        element={<UserPasswordReset />}
                      />
                    </Routes>
                  </>
                }
              />

              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </LeftSideNavbarProvider>
      </AuthProvider>
    </>
  );
}

export default App;

// /roadmaps/:roadmap i can use instead of this all
/* python,ai,ml,dl,backend,andriod,javascript,reactjs,nodejs,java,flutter,cs,frontend */
