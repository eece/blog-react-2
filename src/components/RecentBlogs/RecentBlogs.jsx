import classes from "./RecentBlogs.module.css";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { format } from 'date-fns';
import axios from "axios";

export function RecentBlogs() {
   const [recentBlogs, setRecentBlogs] = useState([]);
    useEffect(() => {
        axios.get('/api/blog-list.json')
        .then(response => {
            setRecentBlogs(response.data);
        })
        .catch(error => {
            console.error('Error fetching recent blogs:', error);
        });
    }, []);

    return (
        <div className={classes.recentBlogs}>
            <div className="container-small">
                <div className={classes.top}>
                    <h1>Recent Essays</h1>
                    <NavLink to="/blog/">View All</NavLink>
                </div>
                <div className={classes.blogs}>
                    {recentBlogs.map((blog, index) => (
                        <div className={classes.blog} key={blog.slug}>

                            <div className={classes.blogImage}>
                                <NavLink to={`/blog/${blog.slug}`}>
                                    <img src={blog.featuredImageUrl} alt={blog.title} />
                                </NavLink>
                            </div>

                            <div className={classes.blogContent}>
                                <div className={classes.blogMeta}>
                                    <span>{blog.categoryName}</span>
                                    <span>{format(new Date(blog.date), 'MMMM d, yyyy')}</span>
                                </div>
                                <h2>{blog.title}</h2>
                                <p>{blog.excerpt}</p>
                                <NavLink to={`/blog/${blog.slug}`}>Read More</NavLink>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}