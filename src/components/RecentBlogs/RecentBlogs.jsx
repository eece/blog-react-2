import classes from "./RecentBlogs.module.css";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { format } from 'date-fns';
import axios from "axios";
import { BlogItem } from "../BlogItem/BlogItem";

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
                        <BlogItem key={index} blog={blog} />
                    ))}
                </div>
            </div>
        </div>
    );
}