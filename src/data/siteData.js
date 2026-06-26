import { Code2, Palette, ShoppingCart, Server, Rocket, ShieldCheck, Hotel, Utensils, GraduationCap, Briefcase, Store, Plane, Building2, Stethoscope, UserRound, MapPin, Database, Globe2, Layers, Zap } from 'lucide-react'

export const nav = [
  ['Home','/'], ['About','/about'], ['Services','/services'], ['Projects','/projects'], ['Contact','/contact']
]
export const services = [
  ['Website Development','We build modern, responsive, and professional websites for businesses, startups, and individuals.', Code2],
  ['Web App Development','We create dynamic web applications with frontend, backend, database, and API integration.', Layers],
  ['UI Design','We design clean, attractive, and user-friendly interfaces for websites and web apps.', Palette],
  ['E-commerce Website','We build online store websites with product listing, cart, checkout, and order features.', ShoppingCart],
  ['API Development','We create REST APIs using Node.js and Express.js for secure backend communication.', Server],
  ['Deployment & Support','We help deploy websites on Vercel, Netlify, Render and provide basic support.', Rocket]
]
export const projects = [
  ['StayFinder - Hotel Booking Website','Hotel booking web application with authentication, room listing, booking management, and admin features.','React.js, Node.js, Express.js, MongoDB',['Login','Rooms','Booking','Admin'], { live: 'https://stayfinder-mu.vercel.app/', github: '#' }],
  ['React E-commerce Website','Responsive e-commerce frontend with product listing, cart system, product details, and checkout page.','React.js, Tailwind CSS, JavaScript',['Products','Cart','Checkout','Responsive'], { live: 'https://kith.com/', github: '#' }],
  ['Hotel Green Palace Website','Hotel website with rooms, booking form, gallery, contact section, and responsive design.','HTML, CSS, JavaScript, PHP, MySQL',['Booking','Gallery','Contact','Admin'], { live: 'https://harshitbhatt07.github.io/HotelBookingWebsite/main.html', github: '#' }]
]
export const process = ['Requirement Discussion','Planning','UI Design','Development','Testing','Deployment','Support']
export const why = ['Modern and Responsive Design','Attractive UI with Smooth Animations','Affordable Project Pricing','Clean and Maintainable Code','Fast Delivery','User-Friendly Websites','Source Code Delivery','Deployment Support','Clear Communication','Basic Support After Delivery']
export const industries = [['Hotels',Hotel],['Restaurants',Utensils],['Coaching Institutes',GraduationCap],['Startups',Rocket],['Small Businesses',Briefcase],['E-commerce',Store],['Travel Agencies',Plane],['Real Estate',Building2],['Clinics',Stethoscope],['Personal Brands',UserRound],['Portfolio Websites',Globe2],['Local Businesses',MapPin]]
export const tech = { Frontend:['HTML','CSS','JavaScript','React.js','Angular.js','Tailwind CSS','Bootstrap'], Mobile:['Flutter','iOS','Android'], Backend:['Node.js','Firebase'], Database:['MongoDB','PostgreSQL','MySQL'] }
export const stats = [['Multiple Projects Completed',Zap],['Modern Tech Stack',Code2],['Creative Development Team',Palette],['Client-Focused Work',ShieldCheck]]
export const faqs = [
 ['Do you build responsive websites?','Yes, we build fully responsive websites that work properly on mobile, tablet, laptop, and desktop.'],
 ['Do you provide modern animations?','Yes, we add smooth and attractive animations like scroll reveal, hover effects, card animations, and modern UI interactions.'],
 ['Do you provide source code?','Yes, we provide complete source code after final project delivery.'],
 ['Do you provide deployment support?','Yes, we help deploy websites on platforms like Vercel, Netlify, Render, or hosting server.'],
 ['Can you build custom websites?','Yes, we can build custom websites according to client requirements.'],
 ['How much time does a website take?','It depends on the project size. A basic website can take 3-7 days, while a full-stack web app can take more time.'],
 ['Do you provide support after delivery?','Yes, we provide basic support after project delivery.']
]
