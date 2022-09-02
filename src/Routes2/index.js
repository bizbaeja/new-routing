import SignUpContainer from "../containers/회원가입/SignUpContainer";
import LoginContainer from "../containers/로그인/LoginContainer";
import CreateQuestionContainer from "../containers/CreateQuestion/CreateQuestionContainer";
import MainContainer from "../containers/Main/MainContainer";
import QuestionContainer from "../containers/Questions/QuestionContainer";
const Routes2 = [
  {
    path: "/signup",
    element: <SignUpContainer />,
  },
  {
    path: "/login",
    element: <LoginContainer />,
  },
  {
    path: "/",
    element: <MainContainer />,
  },
  {
    path: "/question",
    element: <QuestionContainer />,
  },
  {
    path: "/:question",
    element: <CreateQuestionContainer />,
  },
];
export default Routes2;
