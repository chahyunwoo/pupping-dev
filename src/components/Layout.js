function Layout({ name, children }) {
  return (
    <section className={`content ${name}`}>
      <div className="inner">{children}</div>
    </section>
  );
}

export default Layout;
