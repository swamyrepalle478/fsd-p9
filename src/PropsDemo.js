import React from "react";

function Child({ user }) {
  return (
    <div className="inner-box">
      <h3>Child Component</h3>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>
    </div>
  );
}

function Parent({ user }) {
  return (
    <div className="inner-box">
      <h3>Parent Component</h3>
      <p>Passing user data to Child using props.</p>
      <Child user={user} />
    </div>
  );
}

function PropsDemo() {
  const user = {
    name: "John Doe",
    email: "john@example.com",
    role: "Student",
  };

  return (
    <section className="section">
      <h2>3. Props Drilling</h2>
      <p>Data flow: App → Parent → Child</p>
      <Parent user={user} />
    </section>
  );
}

export default PropsDemo;
