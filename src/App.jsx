
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'
import Home from './Components/Home'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import MyProvider from './ContextApi/MyProvider';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import About from './Components/About';
import Videos from './Components/Videos';
import Audios from './Components/Audios';
import Books from './Components/Books';
import VideoLecturesDetail from './Components/VideoLecturesDetail';
import AudioLectureDetail from './Components/AudioLectureDetail';
import Contact from './Components/Contact';
import AdminLogin from './Components/AdminLogin';
import Admin from './AdminDashBoard/Admin';
import AllLectures from './AdminDashBoard/AllLectures';
import Scroll from './ScrollToTop';
import AddLectureCat from './AdminDashBoard/AddLectureCat';
import AddVideoLecture from './AdminDashBoard/AddVideoLecture';
import AddAudioLecture from './AdminDashBoard/AddAudioLecture';
import AddCourse from './AdminDashBoard/AddCourse';
import CoursesList from './AdminDashBoard/CoursesList';
import Courses from './Components/Courses';
import UserLogin from './Components/UserLogin';
import UserSignup from './Components/UserSignup';
import Panel from './CourseRegistration/Panel';
import CoursesRegistration from './CourseRegistration/CoursesRegistration';
import CoursesRegisRequest from './AdminDashBoard/CoursesRegisRequest';
import RequestedCourses from './CourseRegistration/RequestedCourses';
import { I18nextProvider } from 'react-i18next';
import i118n from './i18n';
import Donate from './Components/Donate';
import AddBooks from './AdminDashBoard/AddBooks';
import AddBookCat from './AdminDashBoard/AddBookCat';
import BooksCategoryWise from './Components/BooksCategoryWise';
import BookDetail from './Components/BookDetail';
import BooksList from './AdminDashBoard/BooksList';
import VideoLecturesCat from './Components/VideoLecturesCat';
import AudioLecturesCat from './Components/AudioLecturesCat';
import TopBar from './Components/TopBar';
import SocialMedia from './Components/SocialMedia';

function App() {
  return (
    <>
      <I18nextProvider i18n={i118n}>
        <Router>
          <MyProvider>
            <Scroll />
            <TopBar />
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/video-lectures' element={<Videos />} />
              <Route path='/audio-lectures' element={<Audios />} />
              <Route path='/pdf-books' element={<Books />} />
              <Route path='/courses' element={<Courses />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/social-media' element={<SocialMedia />} />
              <Route path='/video-lecture/:title' element={<VideoLecturesDetail />} />
              <Route path='/video-lectures/:category' element={<VideoLecturesCat />} />
              <Route path='/audio-lecture/:title' element={<AudioLectureDetail />} />
              <Route path='/audio-lectures/:category' element={<AudioLecturesCat />} />
              <Route path='/adminLogin' element={<AdminLogin />} />
              <Route path='/user-login' element={<UserLogin />} />
              <Route path='/user-signup' element={<UserSignup />} />
              <Route path='/pdf-books/:category' element={<BooksCategoryWise />} />
              <Route path='/pdf-book/:title' element={<BookDetail />} />
              <Route path='/donate' element={<Donate />} />
              <Route path='/adminPanel' element={<Admin />} >
                <Route index element={<Navigate to="add-video-lecture" />} />
                <Route path='add-video-lecture' element={<AddVideoLecture />} />
                <Route path='add-audio-lecture' element={<AddAudioLecture />} />
                <Route path='add-lecture-category' element={<AddLectureCat />} />
                <Route path='lectures' element={<AllLectures />} />
                <Route path='add-course' element={<AddCourse />} />
                <Route path='add-books' element={<AddBooks />} />
                <Route path='add-books-category' element={<AddBookCat />} />
                <Route path='courses-list' element={<CoursesList />} />
                <Route path='books-list' element={<BooksList />} />
                <Route path='course-registration-request' element={<CoursesRegisRequest />} />
              </Route>
              <Route path='/userPanel' element={<Panel />}>
                <Route index element={<Navigate to="courses-registration" />} />
                <Route path='courses-registration' element={<CoursesRegistration />} />
                <Route path='requested-courses' element={<RequestedCourses />} />
              </Route>
            </Routes>
            <Footer />
          </MyProvider>
        </Router >
      </I18nextProvider>
    </>
  )
}

export default App
