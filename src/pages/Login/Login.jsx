import React, { useContext,useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { FaGithub, FaGoogle } from 'react-icons/fa';


const LoginPage = () => {
    const [error, setError] = useState('');
    
    const { signIn, signInWithGoogle, signInWithGithub, user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    
    const from = location.state?.from?.pathname || '/'

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                event.target.reset();
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                
            })
            .catch(error => {
                
            })
    }

    const handleGithubSignIn = () => {
        signInWithGithub()
            .then(result => {
                const loggedUser = result.user;
                
            })
            .catch(error => {
                
            })
    }


    return (
        <Container className='w-25 mx-auto my-5'>
            <p className='text-danger'>{error}</p>
            <h3>Please Login</h3>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Login
                </Button>
                {
                    !user &&
                    <div>
                        {/* <button onClick={handleGoogleSignIn} className="btn btn-primary">Google</button>
                        <button onClick={handleGithubSignIn} className="btn btn-primary">Github</button> */}
                        <h4 className='mt-4'>Login With</h4>
                        <Button onClick={handleGoogleSignIn} className='mb-2' variant="outline-primary"> <FaGoogle /> Login with Google</Button>
                        <Button onClick={handleGithubSignIn} variant="outline-secondary"> <FaGithub></FaGithub> Login with Github</Button>
                    </div>
                }
                <br />
                
                <Form.Text className="text-secondary">
                    Don't Have an Account? <Link to="/register">Register</Link>
                </Form.Text>
                <Form.Text className="text-success">

                </Form.Text>
                <Form.Text className="text-danger">

                </Form.Text>
            </Form>
        </Container>
    );
};

export default LoginPage;
