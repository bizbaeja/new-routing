import SignUpContainer from "../containers/회원가입";
import LoginContainer from "../containers/로그인";
import CreateQuestionContainer from "../containers/CreateQuestion";
import MainContainer from "../containers/Main";
import QuestionContainer from "../containers/Questions";
const routes = [
  {
    path: "/signup",
    element: <SignUpContainer />,
    title: "SignUp",
  },
  {
    path: "/login",
    element: <LoginContainer />,
    title: "login",
  },
  {
    path: "/",
    element: <MainContainer />,
    title: "main",
  },
  {
    path: "/question",
    element: <QuestionContainer />,
    title: "questioin",
  },
  {
    path: "/:question",
    element: <CreateQuestionContainer />,
    title: "createcontact",
  },
];
export default routes;
