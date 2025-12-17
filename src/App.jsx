import {Routes, Route, useMatch} from 'react-router-dom'
import Home from './pages/student/Home'
import CourseList from './pages/student/CourseList'
import CourseDetails from './pages/student/CourseDetails'
import MyEnrollments from './pages/student/MyEnrollments'
import Player from './pages/student/Player'
import Loading from './components/student/Loading'

import Educator from './pages/educator/Educator'
import AddCourses from './pages/educator/AddCourses'
import Dashboard from './pages/educator/Dashboard'
import MyCourses from './pages/educator/MyCourses'
import StudentsEnrolled from './pages/educator/StudentsEnrolled'
import Navbar from './components/student/Navbar'

export default function App() {

  const isEducatorRoute = useMatch("/educator/*")

  return (
    <div className='text-default min-h-screen bg-white'>
      {!isEducatorRoute && <Navbar></Navbar>}
      
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/course-list' element={<CourseList></CourseList>}/>
        <Route path='/course-list/:input' element={<CourseList></CourseList>}/>
        <Route path='/course' element={<CourseDetails/>}/>
        <Route path='/course/:id' element={<CourseDetails/>}/>
        <Route path='/my-enrollments' element={<MyEnrollments/>}/>
        <Route path='/player/:courseId' element={<Player/>}/>
        <Route path='/loading/:path' element={<Loading/>}/>

        <Route path="/educator" element={<Educator />}>
          <Route path="educator" element={<Dashboard />} />
          <Route path="add-course" element={<AddCourses />} />
          <Route path="my-course" element={<MyCourses />} />
          <Route path="student-enrolled" element={<StudentsEnrolled />} />
        </Route>

        
      </Routes>
    </div>
  )
}