import styles from "./Layout.module.css";
function Layout({ children }) {
  return (
    <>
      <header>
        <h2>Crypto App</h2>
      </header>
      {children}
      <footer>Developed By Hossein Hamidi</footer>
    </>
  );
}

export default Layout;
