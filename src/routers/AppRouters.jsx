import { Route, Routes } from 'react-router-dom'
import SuspenseWrapper from "../container/SuspenseWrapper"
import { lazy } from 'react'
import PageWrapper from '../container/PageWrapper'
const ErrorPage =lazy(()=>import("../pages/ErrorPage/ErrorPage"))
const Search=lazy(()=>import("../component/Search/SearchResult"))
const MyList=lazy(()=>import("../pages/Mylist/Mylist"))
const Root=lazy(()=>import("../pages/FrontPage/FrontPage"))
const LoginPage=lazy(()=>import("../pages/LoginPage/LoginPage"))
const HomePage=lazy(()=>import("../pages/HomePage/HomePage"))
const MovieDetails=lazy(()=>import("../component/MovieDetails/MovieDetails"))
const Singlepage=lazy(()=>import("../component/SampleNav/SampleNav"))
const Movie=lazy(()=>import("../component/Movie/Movie"))
const Register=lazy(()=>import("../pages/Register/Register"))
const AppRouters = () => {
  return (
   <Routes>
    <Route path="/"
    element={
      <SuspenseWrapper>
      <Root/>
      </SuspenseWrapper>
    }></Route>

    <Route path="/login"
    element={
      <SuspenseWrapper>
      <LoginPage/>
      </SuspenseWrapper>
    }></Route>
     
     <Route path='/register' element={
      <SuspenseWrapper>
      <Register/>
      </SuspenseWrapper>
     }></Route>
    <Route path="/home"
    element={
      <SuspenseWrapper>
        <PageWrapper>
          <HomePage/>
        </PageWrapper>
      </SuspenseWrapper>
    }></Route>

    <Route path="/home/:id"
    element={
     <SuspenseWrapper>
      <MovieDetails/>
     </SuspenseWrapper>
    }></Route>

    <Route path="/tv Shows"
    element={
     <SuspenseWrapper>
      <PageWrapper>
        <Singlepage/>
      </PageWrapper>
     </SuspenseWrapper>
    }></Route>

    <Route path="/movies" 
    element={
       <SuspenseWrapper>
        <PageWrapper>
          <Singlepage/>
        </PageWrapper>
       </SuspenseWrapper>
    }></Route>
     
     <Route path="/new & popular" element={
      <SuspenseWrapper>
        <PageWrapper>
          <Singlepage/>
        </PageWrapper>
      </SuspenseWrapper>
     }></Route>

     <Route path="/my List" element={
      <SuspenseWrapper>
         <PageWrapper>
      <MyList/>
      </PageWrapper>
      </SuspenseWrapper>
     }></Route>

     <Route path="/browser by languages" element={
         <SuspenseWrapper>
          <PageWrapper>
            <Singlepage/>
          </PageWrapper>
         </SuspenseWrapper>
     }></Route>

     <Route path='/search' element={
      <SuspenseWrapper>
        <PageWrapper>
          <Search/>
        </PageWrapper>
      </SuspenseWrapper>
     }></Route>

     <Route path='/watch/:id' element={
      <SuspenseWrapper>
        <Movie/>
      </SuspenseWrapper>
     }></Route>

     <Route path='/*' element={
        <SuspenseWrapper>
          <ErrorPage/>
        </SuspenseWrapper>
     }></Route>
   </Routes>
  )
}

export default AppRouters