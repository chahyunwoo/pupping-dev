function Layout({ name, id, children }) {
  return (
    <section className={`content ${name}`} id={id}>
      <div className="inner">{children}</div>
    </section>
  );
}

export default Layout;
