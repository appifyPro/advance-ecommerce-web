// // import Head from 'next/head'
// // import Image from 'next/image'
// // import { Inter } from 'next/font/google'
// // // import styles from  "../styles/hack"
// // import styles from '../styles/hack.module.css'

// // const inter = Inter({ subsets: ['latin'] })

// // export default function Home() {
// //   return (
// //     <div>
// //        <body>
// //   <header>
// //     <h1>Event Planner App</h1>
// //     <nav>
// //       <a href="#">View Events</a>
// //       <a href="#">Log In</a>
// //       <a href="#">Sign Up</a>
// //     </nav>
// //   </header>
// //   <main>
// //     <section>
// //       <h2>Plan, Manage, and Attend Events with Ease</h2>
// //       <p>The Event Planner app is a real-time collaboration tool for planning, managing, and attending events. With features such as creating events, inviting attendees, and tracking RSVPs, the app makes it easy for event organizers to stay organized and keep their attendees informed. Attendees can quickly RSVP to events and receive real-time updates, while organizers can manage the event details and see who's coming. Whether you're planning a small get-together or a large conference, the Event Planner app helps streamline the event planning process and make it a success.</p>
// //       <a href="#">Learn More</a>
// //     </section>
// //   </main>
// //   <footer>
// //     <p>&copy; 2023 Event Planner App. All rights reserved.</p>
// //   </footer>
// // </body>
     
// //     </>
// //     </div>
// //    di
// //   )
// // }
// import styled from 'styled-components';
// import { FiMenu } from 'react-icons/fi';

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   min-height: 100vh;
// `;

// const Header = styled.header`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding: 1rem 2rem;
//   background-color: #fff;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
// `;

// const Logo = styled.a`
//   font-size: 2rem;
//   font-weight: bold;
//   color: #333;
//   text-decoration: none;
//   cursor: pointer;
// `;

// const Nav = styled.nav`
//   display: flex;
// `;

// const NavItem = styled.a`
//   margin-left: 1.5rem;
//   color: #333;
//   text-decoration: none;
//   cursor: pointer;

//   &:hover {
//     text-decoration: underline;
//   }
// `;

// const MenuIcon = styled(FiMenu)`
//   font-size: 2rem;
//   color: #333;
//   cursor: pointer;

//   &:hover {
//     color: #777;
//   }
// `;

// const Main = styled.main`
//   flex: 1;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const Footer = styled.footer`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 1rem 2rem;
//   background-color: #333;
//   color: #fff;
// `;

// export default function Home() {
//   return (
//     <Container>
//       <Header>
//         <Logo>My Landing Page</Logo>
//         <Nav>
//           <NavItem>Home</NavItem>
//           <NavItem>About</NavItem>
//           <NavItem>Contact</NavItem>
//         </Nav>
//         <MenuIcon />
//       </Header>
//       <Main>
//         <h1>Welcome to My Landing Page</h1>
//       </Main>
//       <Footer>
//         Made with ❤️ by Your Name
//       </Footer>
//     </Container>
//   );
// }
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import style from '../styles/my.module.css';



export default function Home() {
  return (
   <div >
     <div className={styles.container}>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid ">
    <a className="navbar-brand" href="#">Event Planner</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/signup">Signup</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/login">login</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/createuser">createevent</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>

      <Head>
        
        <title>Event Planner App</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to the Event Planner App!</h1>
        <img  src="my.jpg" height={"900px"} width={"900px"}  className="img-fluid" alt="..."/>
        <p  className={styles.description}>
          This app helps you plan, manage, and attend events with ease.
        </p>

        <div className={styles.grid}>
          <Link href="/createuser" className={styles.card}>
            <h3>View Events &rarr;</h3>
            <p>See a list of upcoming events and RSVP.</p>
          </Link>

          <Link href="/signup" className={styles.card}>
            <h3>Sign Up &rarr;</h3>
            <p>Create an account to plan and manage your own events.</p>
          </Link>

          <Link href="/login" className={styles.card}>
            <h3>Log In &rarr;</h3>
            <p>Access your account and manage your events.</p>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
              
      </footer>
    </div>
   </div>
   
  );
}