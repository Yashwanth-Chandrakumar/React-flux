import { Route, Routes } from "react-router-dom";
import AuthForm from "./components/AuthForm";
import ImageGenerator from "./components/ImageGenerator";

const App = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
  // const [isLogin, setIsLogin] = useState(true);

  // const handleAuthSuccess = () => {
  //   setIsLoggedIn(true);
  // };

  // const handleLogout = () => {
  //   localStorage.removeItem('token');
  //   setIsLoggedIn(false);
  // };

  return (
    <Routes>
      <Route path="/" element={<AuthForm/>}/>
      <Route path="/home" element={<ImageGenerator/>}/>
    </Routes>
    // <Layout>
    //   {isLoggedIn ? (
    //     <>
    //       <button
    //         onClick={handleLogout}
    //         className="absolute top-4 right-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
    //       >
    //         Logout
    //       </button>
    //       <UserDashboard />
    //     </>
    //   ) : (
    //     <div className="max-w-md mx-auto">
    //       <AuthForm isLogin={isLogin} setIsLogin={setIsLogin} onSuccess={handleAuthSuccess} />
    //       <p className="mt-4 text-center">
    //         {isLogin ? "Don't have an account? " : "Already have an account? "}
    //         <button
    //           onClick={() => setIsLogin(!isLogin)}
    //           className="text-purple-600 hover:text-purple-500 focus:outline-none focus:underline"
    //         >
    //           {isLogin ? 'Sign Up' : 'Log In'}
    //         </button>
    //       </p>
    //     </div>
    //   )}
    // </Layout>
  );
};

export default App;
