import { AddStudent } from "./components/AddStudent";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import { StudentInfo } from "./components/StudentInfo";


const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/AddStudent',
    element: <AddStudent />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  },
  {
    path: '/Student-Info',
    element: <StudentInfo />
  }
];

export default AppRoutes;
