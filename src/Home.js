// import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs')

    // const [blogs, setBlogs] = useState([
    //     { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    // //     { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    // //     { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    // // ]);

    // const [blogs, setBlogs] = useState(null);

    // //let name = 'mario'; <is not reactive - can't be changed
    // // const [name, setName] = useState('mario');
    // // const [age, setAge] = useState(25);

    // // const handleClick = (e) => {
    // //     // console.log('hello, ninjas', e); 
    // //     setName('luigi');
    // //     setAge(30)
    // // }
    
    // // const handleClickAgain = (name, e) => {
    // //     console.log('hello ' + name, e.target);
    // // }
    // // const handleDelete = (id) => {
    // //     const newBlogs = blogs.filter(blog => blog.id !== id)
    // //     setBlogs(newBlogs);
    // // }  

    // // const [name, setName] = useState('mario');

    // // useEffect(() => {
    // //     console.log('use effect ran');
    // //     console.log(name);
    // // }, [name]);

    // const [isPending, setIsPending] = useState(true);
    // const [error, setError] = useState(null);

    // useEffect(() => {
    //     fetch('http://localhost:8000/blogs')
    //         .then(res => {
    //             if(!res.ok) {
    //                 throw Error('could not fetch the data for that resource')
    //             }
    //             return res.json();
    //         })
    //         .then((data) => {
    //             setData(data);
    //             setIsPending(false);
    //             setError(null);
    //         })
    //         .catch((err) => {
    //             setIsPending(false);
    //             setError(err.message);
    //         })
    // }, []);

    return (  
        <div className="home">

            {/* <h2>Home Page</h2>
            <p>{ name } is { age } years old</p>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={(e) => handleClickAgain('mario', e)}>Click Me Again</button> */}

            {/* {blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>} */}

            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> } 
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}

            {/* <button onClick={() => setName('luigi')}>change name</button>
            <p>{ name }</p>
            <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blogs"/> */}

        </div>
    ); 
}
 
export default Home;