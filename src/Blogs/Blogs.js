import React from "react";
import "./Blogs.css";

const Blogs = () => {
    return (
        <div className="blog">
            <p className=' qna-head'> QnA Section <span className='qna-span'> Click the "plus" icon below</span> </p>
            <div className=''></div>
            <div className="ans-container">
                <div className="tab w-full overflow-hidden border-t">
                    <input className="absolute opacity-0  d-none" id="tab-multi-one" type="checkbox" name="tabs" />
                    <label className=" question p-5 " htmlFor="tab-multi-one"> Difference between javascript and nodejs?</label>
                    <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                        <p className="p-5 ans"> 1. Node.JS is a Javascript is a runtime environment for Javascript that lets a user run this programming language on the server-side.  <br />  <br />
                            2. Node.JS is utilized on the web page's client-side, whereas Javascript uses JS on the server side since it works on the server-side. <br />  <br />

                            3. Node.JS runs mainly on the client-side, whereas Javascript runs on the server-side. <br />  <br />

                            4. Node.JS can easily add HTML and even play with the DOM where Javascript isn't capable of adding various HTML tags. <br />  <br /> </p>
                    </div>
                </div>
                <div className="tab w-full overflow-hidden border-t">
                    <input className="absolute opacity-0  d-none" id="tab-multi-two" type="checkbox" name="tabs" />
                    <label className="  question p-5  " htmlFor="tab-multi-two"> When should you use nodejs and when should you use mongodb?</label>
                    <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                        <p className="p-5 ans ">MongoDB and NodeJS are two different technologies. MongoDB is a database system that gives the users the chance to efficiently store documents in a database and perform operations like data updates or search documents by some criteria. NodeJS's responsibility is especially to execute the application. </p>
                    </div>
                </div>
                <div className="tab w-full overflow-hidden border-t">
                    <input className="absolute opacity-0 d-none" id="tab-multi-three" type="checkbox" name="tabs" />
                    <label className="  question p-5  " htmlFor="tab-multi-three"> Differences between SQL and noSQL databases?</label>
                    <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                        <p className="p-5 ans "> The differences between SQL vs. NoSQL are: <br />  <br /> <br />  
                            1. SQL databases are relational, and NoSQL databases are non-relational. <br />  <br />2. SQL databases
                            use structured query language and have a predefined schema. NoSQL
                            databases have dynamic schemas for unstructured data.  <br />  <br /> 3. SQL
                            databases are vertically scalable, while NoSQL databases are
                            horizontally scalable.  <br />  <br /> 4. SQL databases are table-based, while
                            NoSQL databases are documents, key-value, graphs, or wide-column
                            stores.  <br />  <br /> 5. SQL databases are better for multi-row transactions,
                            while NoSQL is better for unstructured data like documents or
                            JSON. </p>
                    </div>
                </div>
                <div className="tab w-full overflow-hidden border-t">
                    <input className="absolute opacity-0  d-none" id="tab-multi-four" type="checkbox" name="tabs" />
                    <label className="  question p-5 " htmlFor="tab-multi-four">What is the purpose of jwt and how does it work?</label>
                    <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                        <p className="p-5 ans"> JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims are not altered after issuing the token. JWTs differ from other web tokens because they contain a set of claims. Claims are used to transmit information between two parties. These claims depend on the use case at hand. For example, a claim may assert who issued the token, how long it is valid, or what permissions the client has been granted. </p>
                        <br />
                    </div>
                    <hr />
                </div>

            </div>
        </div>
    );
};

export default Blogs;
