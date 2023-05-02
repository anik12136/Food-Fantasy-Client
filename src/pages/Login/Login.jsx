import React from 'react';

const LoginPage = () => {
  const handleEmailLogin = () => {
    // Handle email/password login logic
  };

  const handleGoogleLogin = () => {
    // Handle Google authentication logic
  };

  const handleGithubLogin = () => {
    // Handle GitHub authentication logic
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label>Email</label>
          <input type="email" className="form-control" placeholder="Enter email" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" placeholder="Enter password" />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleEmailLogin}>
          Sign in with Email/Password
        </button>
        <div className="or-separator">or</div>
        <button type="button" className="btn btn-danger" onClick={handleGoogleLogin}>
          Sign in with Google
        </button>
        <button type="button" className="btn btn-dark" onClick={handleGithubLogin}>
          Sign in with GitHub
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
