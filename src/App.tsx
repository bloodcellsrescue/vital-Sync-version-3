import { createBrowserRouter, RouterProvider } from "react-router-dom"; 

import HomeOne from "./components/homes/home-1";
import NotFound from "./error";
import { useEffect } from "react";
 


const router = createBrowserRouter([
	{ path: "/", element: <HomeOne /> },  
	// { path: "/about-us", element: <Aboutus /> }, 
	// { path: "/service", element: <Service /> }, 
	// { path: "/portfolio", element: <Portfolio /> }, 
	// { path: "/team", element: <Team /> }, 
	// { path: "/faq", element: <Faq /> }, 
	// { path: "/pricing", element: <Pricing /> }, 
	// { path: "/blog", element: <Blog /> }, 
	// { path: "/contact-us", element: <Contactus /> }, 
	// { path: "/single-service", element: <SingleService /> }, 
	// { path: "/single-portfolio", element: <SinglePortfolio /> }, 
	// { path: "/single-blog", element: <SingleBlog /> },  

	
	{ path: "*", element: <NotFound /> },
]);
 

function App() { 

	useEffect(() => {
		document.body.scroll({
			behavior: 'smooth'
		})
	}, [])

	return	<RouterProvider router={router} />
			
}

export default App;
