import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";



const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    };

    return (
        <>

            <Navbar
                collapseOnSelect
                expand="lg"
                sticky="top"
                bg="secondary"
                variant="dark"
            >

                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className=" fw-bold">
                            <Nav.Link className="text-light" href="/">
                                Home
                            </Nav.Link>
                            <Nav.Link className="text-light" href="home#popular">
                                Popular
                            </Nav.Link>
                            <Nav.Link className="text-light" href="/manageinventory">
                                All Perfumes
                            </Nav.Link>
                            <Nav.Link className="text-light" href="/blogs">
                                Blogs
                            </Nav.Link>

                        </Nav>
                        <h1 className="text-warning mx-auto fst-italic fs-1" >Perfumance...</h1>
                        <Nav className=" fw-bold">
                            {user && (
                                <>
                                    <Nav.Link className="text-light" as={Link} to="myitems">
                                        My Perfumes
                                    </Nav.Link>
                                    <Nav.Link className="text-light" as={Link} to="addservice">
                                        Add Perfumes
                                    </Nav.Link>
                                    <Nav.Link className="text-light" as={Link} to="manage">
                                        Manage
                                    </Nav.Link>
                                </>
                            )}
                            {user ? (
                                <button
                                    className="btn btn-link  text-decoration-none text-warning fw-bold"
                                    onClick={handleSignOut}
                                >
                                    SignOut
                                </button>
                            ) : (
                                <Nav.Link as={Link} to="login">
                                    Login
                                </Nav.Link>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};

export default Header;
